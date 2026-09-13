'use client';
import { useEffect, useRef, useState } from 'react';

type Pos = { lat:number, lng:number, acc:number, speed:number, heading:number, isMoving:boolean }

export function useWazeLocation(){
  const [pos, setPos] = useState<Pos|null>(null);
  const last = useRef<{lat:number,lng:number,time:number}[]>([]);
  const watchId = useRef<number| null>(null);

  useEffect(()=>{
    if(!navigator.geolocation) return;
    
    const calcHeading = (a:any,b:any)=>{
      const y = Math.sin(b.lng-a.lng) * Math.cos(b.lat);
      const x = Math.cos(a.lat)*Math.sin(b.lat) - Math.sin(a.lat)*Math.cos(b.lat)*Math.cos(b.lng-a.lng);
      return (Math.atan2(y,x)*180/Math.PI+360)%360;
    }
    const dist = (a:any,b:any)=>{
      const R=6371e3;
      const dLat=(b.lat-a.lat)*Math.PI/180;
      const dLng=(b.lng-a.lng)*Math.PI/180;
      const la1=a.lat*Math.PI/180, la2=b.lat*Math.PI/180;
      const aa=Math.sin(dLat/2)**2+Math.cos(la1)*Math.cos(la2)*Math.sin(dLng/2)**2;
      return R*2*Math.atan2(Math.sqrt(aa),Math.sqrt(1-aa));
    }

    watchId.current = navigator.geolocation.watchPosition(
      (p)=>{
        if(p.coords.accuracy > 35) return; // отбрасываем кривые точки - вот почему у тебя прыгала
        const now = {lat:p.coords.latitude, lng:p.coords.longitude, time: Date.now()};
        last.current.push(now);
        if(last.current.length>5) last.current.shift();
        if(last.current.length<2) return;

        const prev = last.current[last.current.length-2];
        const d = dist(prev, now);
        const dt = (now.time - prev.time)/1000;
        if(d < 2) return; // не дергаем карту если сдвиг <2м

        const speed = dt>0 ? d/dt : 0; // м/с
        const heading = p.coords.heading ?? calcHeading(prev, now);
        const isMoving = speed > 0.8; // >2.9 км/ч = идет

        setPos({
          lat: now.lat,
          lng: now.lng,
          acc: p.coords.accuracy,
          speed,
          heading,
          isMoving
        });
      },
      (e)=>console.log('geo error',e),
      { enableHighAccuracy:true, maximumAge:0, timeout:10000 }
    );
    return ()=>{ if(watchId.current!==null) navigator.geolocation.clearWatch(watchId.current) }
  },[]);
  return pos;
}
