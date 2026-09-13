'use client';
import { useEffect, useRef, useState } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';

const SearchIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="6"/><path d="m21 21-4.3-4.3"/></svg>;
const LocateIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>;
const PlusIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>;
const EyeIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12Z"/><circle cx="12" cy="12" r="3"/></svg>;

export default function Page(){
  const mapDiv=useRef<HTMLDivElement>(null);
  const mapRef=useRef<any>(null);
  const userMarker=useRef<any>(null);
  const watchRef=useRef<number|null>(null);
  const trail=useRef<{lat:number,lng:number,time:number}[]>([]);
  const [q,setQ]=useState('');
  const [filter,setFilter]=useState('Все');
  const [info,setInfo]=useState('ИДЕТЕ 0 точек');

  useEffect(()=>{
    let map:any;
    (async()=>{
      const ml=await import('maplibre-gl');
      if(!mapDiv.current) return;
      map=new ml.Map({
        container:mapDiv.current,
        style:'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
        center:[49.854,40.376],
        zoom:14.5,
        pitch:0,
        bearing:0,
        antialias:true,
        attributionControl:false
      });
      mapRef.current=map;
      map.on('load',()=>{
        map.getStyle().layers.forEach((l:any)=>{ if(l.type==='line'&&/road|highway|street/.test(l.id)){ try{map.setPaintProperty(l.id,'line-color','#8a8a8a'); map.setPaintProperty(l.id,'line-opacity',0.9);}catch{}} });
        const el=document.createElement('div');
        el.innerHTML=`<div style="width:28px;height:28px;background:#1a73e8;border:3px solid white;border-radius:50%;box-shadow:0 3px 12px rgba(0,0,0,.4);"></div>`;
        userMarker.current=new ml.Marker({element:el.firstChild as HTMLElement}).setLngLat([49.854,40.376]).addTo(map);

        // демо-метки Баку
        const demo=[{lng:49.867,lat:40.409},{lng:49.834,lat:40.372},{lng:49.892,lat:40.381}];
        demo.forEach(p=>{
          const d=document.createElement('div');
          d.innerHTML=`<div style="width:12px;height:12px;background:#ff3b30;border:2px solid white;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,.3)"></div>`;
          new ml.Marker({element:d.firstChild as HTMLElement}).setLngLat([p.lng,p.lat]).addTo(map);
        });

        if(navigator.geolocation){
          watchRef.current=navigator.geolocation.watchPosition((pos)=>{
            if(pos.coords.accuracy>35) return;
            const now={lat:pos.coords.latitude,lng:pos.coords.longitude,time:Date.now()};
            trail.current.push(now); if(trail.current.length>6) trail.current.shift();
            if(trail.current.length<2){ userMarker.current.setLngLat([now.lng,now.lat]); return; }
            const prev=trail.current[trail.current.length-2];
            const dLat=(now.lat-prev.lat)*Math.PI/180; const dLng=(now.lng-prev.lng)*Math.PI/180;
            const a=Math.sin(dLat/2)**2+Math.cos(prev.lat*Math.PI/180)*Math.cos(now.lat*Math.PI/180)*Math.sin(dLng/2)**2;
            const dist=6371000*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
            if(dist<2) return;
            const dt=(now.time-prev.time)/1000; const speed=dt>0?dist/dt:0;
            const y=Math.sin(dLng)*Math.cos(now.lat*Math.PI/180);
            const x=Math.cos(prev.lat*Math.PI/180)*Math.sin(now.lat*Math.PI/180)-Math.sin(prev.lat*Math.PI/180)*Math.cos(now.lat*Math.PI/180)*Math.cos(dLng);
            const heading=pos.coords.heading??((Math.atan2(y,x)*180/Math.PI+360)%360);
            const moving=speed>0.8;
            setInfo(`${moving?`Идет ${(speed*3.6).toFixed(1)} км/ч`:'Стоит'} • ${pos.coords.accuracy.toFixed(0)}м • ${trail.current.length} точек`);
            userMarker.current.setLngLat([now.lng,now.lat]);
            if(moving){
              map.easeTo({center:[now.lng,now.lat],zoom:17.8,pitch:65,bearing:heading,duration:1000,padding:{bottom:90}});
            }else{
              map.easeTo({center:[now.lng,now.lat],zoom:15.5,pitch:0,bearing:0,duration:1000});
            }
          },()=>{},{enableHighAccuracy:true,maximumAge:0,timeout:10000});
        }
      });
    })();
    return()=>{ if(watchRef.current!==null) navigator.geolocation.clearWatch(watchRef.current); map?.remove(); };
  },[]);

  const doSearch=async()=>{
    if(!q||!mapRef.current) return;
    const r=await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q+' Baku')}&limit=1`);
    const d=await r.json(); if(d[0]) mapRef.current.flyTo({center:[parseFloat(d[0].lon),parseFloat(d[0].lat)],zoom:16});
  };

  return(
    <div className="relative w-full h- bg-[#f2f2f2] overflow-hidden">
      <div ref={mapDiv} className="absolute inset-0" />
      <div className="absolute top-3 left-3 right-3 h- bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,.15)] flex items-center px-2">
        <div className="pl-3 text-gray-400"><SearchIcon/></div>
        <input value={q} onChange={e=>setQ(e.target.value)} onKeyDown={e=>e.key==='Enter'&&doSearch()} placeholder="Поиск улицы в Баку..." className="flex-1 outline-none px-3 text- bg-transparent" />
        <button onClick={doSearch} className="bg-black text-white rounded-full px-5 h- text- font-medium">Найти</button>
      </div>
      <div className="absolute top- left-3 flex gap-2">
        {['Все','Сегодня','2 часа'].map(f=>(
          <button key={f} onClick={()=>setFilter(f)} className={`h-8 px-4 rounded-full text- font-medium shadow-[0_2px_8px_rgba(0,0,0,.12)] ${filter===f?'bg-black text-white':'bg-white text-black'}`}>{f}</button>
        ))}
      </div>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        <button onClick={()=>mapRef.current?.zoomIn()} className="w-11 h-11 bg-black text-white rounded- shadow-[0_4px_12px_rgba(0,0,0,.3)] flex items-center justify-center"><PlusIcon/></button>
        <button onClick={()=>{const t=trail.current[trail.current.length-1]; if(t) mapRef.current?.flyTo({center:[t.lng,t.lat],zoom:16})}} className="w-11 h-11 bg-white rounded- shadow-[0_4px_12px_rgba(0,0,0,.15)] flex items-center justify-center text-black"><LocateIcon/></button>
        <button className="w-11 h-11 bg-white rounded- shadow-[0_4px_12px_rgba(0,0,0,.15)] flex items-center justify-center text-black"><EyeIcon/></button>
      </div>
      <div className="absolute bottom-3 left-3 right-3 h-8 bg-white/90 backdrop-blur rounded-full px-4 flex items-center justify-between text- text-gray-600">
        <span>MapLibre • VoyagerGL • Google-like • без ключа • 60-120 FPS</span>
        <span className="text-[#1a73e8] font-medium">{info}</span>
      </div>
    </div>
  );
}
