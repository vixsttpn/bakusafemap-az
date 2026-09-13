'use client';
import { useEffect, useRef, useState } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
export default function Page(){
  const mapDiv=useRef<HTMLDivElement>(null);
  const mapRef=useRef<any>(null);
  const markerRef=useRef<any>(null);
  const watchRef=useRef<number|null>(null);
  const trail=useRef<{lat:number,lng:number,time:number}[]>([]);
  const [q,setQ]=useState(''); const [filter,setFilter]=useState('Все'); const [info,setInfo]=useState('');
  useEffect(()=>{
    let map:any;
    (async()=>{
      const ml=await import('maplibre-gl');
      if(!mapDiv.current) return;
      map=new ml.Map({container:mapDiv.current,style:'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',center:[49.854,40.376],zoom:15,pitch:0,bearing:0,antialias:true,attributionControl:false});
      mapRef.current=map;
      map.on('load',()=>{
        map.getStyle().layers.forEach((l:any)=>{ if(l.type==='line'&&/road|highway|street/.test(l.id)){ try{map.setPaintProperty(l.id,'line-color','#8a8a8a');}catch{}} });
        const el=document.createElement('div'); el.style.cssText='width:28px;height:28px;background:#1a73e8;border:3px solid white;border-radius:50%;box-shadow:0 3px 12px rgba(0,0,0,.35)';
        markerRef.current=new ml.Marker({element:el}).setLngLat([49.854,40.376]).addTo(map);
        if(navigator.geolocation){
          watchRef.current=navigator.geolocation.watchPosition((p)=>{
            if(p.coords.accuracy>35) return;
            const now={lat:p.coords.latitude,lng:p.coords.longitude,time:Date.now()};
            trail.current.push(now); if(trail.current.length>6) trail.current.shift();
            if(trail.current.length<2){ markerRef.current.setLngLat([now.lng,now.lat]); return; }
            const prev=trail.current[trail.current.length-2];
            const dLat=(now.lat-prev.lat)*Math.PI/180; const dLng=(now.lng-prev.lng)*Math.PI/180;
            const a=Math.sin(dLat/2)**2+Math.cos(prev.lat*Math.PI/180)*Math.cos(now.lat*Math.PI/180)*Math.sin(dLng/2)**2;
            const dist=6371000*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
            if(dist<2) return;
            const dt=(now.time-prev.time)/1000; const speed=dt>0?dist/dt:0;
            const y=Math.sin(dLng)*Math.cos(now.lat*Math.PI/180); const x=Math.cos(prev.lat*Math.PI/180)*Math.sin(now.lat*Math.PI/180)-Math.sin(prev.lat*Math.PI/180)*Math.cos(now.lat*Math.PI/180)*Math.cos(dLng);
            const heading=p.coords.heading??((Math.atan2(y,x)*180/Math.PI+360)%360);
            const moving=speed>0.8;
            setInfo(`${moving?`Идет ${(speed*3.6).toFixed(1)} км/ч`:'Стоит'} • ${p.coords.accuracy.toFixed(0)}м`);
            markerRef.current.setLngLat([now.lng,now.lat]);
            if(moving){ map.easeTo({center:[now.lng,now.lat],zoom:17.8,pitch:65,bearing:heading,duration:1000,padding:{bottom:100}}); }
            else{ map.easeTo({center:[now.lng,now.lat],zoom:16,pitch:0,bearing:0,duration:1000}); }
          },()=>{},{enableHighAccuracy:true,maximumAge:0,timeout:10000});
        }
      });
    })();
    return()=>{ if(watchRef.current!==null) navigator.geolocation.clearWatch(watchRef.current); map?.remove(); };
  },[]);
  const search=async()=>{ if(!q||!mapRef.current) return; const r=await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q+' Baku')}&limit=1`); const d=await r.json(); if(d[0]) mapRef.current.flyTo({center:[parseFloat(d[0].lon),parseFloat(d[0].lat)],zoom:16}); };
  return(
    <div className="relative w-full h- bg-[#f5f5f5] overflow-hidden">
      <div ref={mapDiv} className="absolute inset-0" />
      <div className="absolute top-3 left-3 right-16 flex bg-white rounded-full shadow px-2 py-1.5"><input value={q} onChange={e=>setQ(e.target.value)} onKeyDown={e=>e.key==='Enter'&&search()} placeholder="Поиск улицы в Баку..." className="flex-1 outline-none px-3 text-" /><button onClick={search} className="bg-black text-white text- px-4 py-2 rounded-full">Найти</button></div>
      <div className="absolute top- left-3 flex gap-2">{['Все','Сегодня','2 часа'].map(f=>(<button key={f} onClick={()=>setFilter(f)} className={`px-3 py-1.5 rounded-full text- shadow ${filter===f?'bg-black text-white':'bg-white'}`}>{f}</button>))}</div>
      <div className="absolute bottom-6 right-3 flex flex-col gap-2"><button onClick={()=>mapRef.current?.zoomIn()} className="w-11 h-11 bg-black text-white rounded-xl shadow">+</button><button onClick={()=>{const t=trail.current[trail.current.length-1]; if(t) mapRef.current?.flyTo({center:[t.lng,t.lat],zoom:16})}} className="w-11 h-11 bg-white rounded-xl shadow">◎</button></div>
      <div className="absolute bottom-3 left-3 right-16 bg-white/90 px-3 py-1.5 rounded-full text- flex justify-between"><span>MapLibre • VoyagerGL • Google-like</span><span className="text-blue-600">{info}</span></div>
    </div>
  );
}
