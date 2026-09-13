'use client';
import { useEffect, useRef, useState } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
export default function Page(){
  const mapDiv=useRef<HTMLDivElement>(null);
  const mapRef=useRef<any>(null);
  const [q,setQ]=useState('');
  useEffect(()=>{
    let map:any;
    (async()=>{
      const ml=await import('maplibre-gl');
      if(!mapDiv.current) return;
      map=new ml.Map({container:mapDiv.current,style:'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',center:[49.854,40.376],zoom:15,attributionControl:false});
      mapRef.current=map;
    })();
    return()=>map?.remove();
  },[]);
  const search=async()=>{
    if(!q||!mapRef.current) return;
    const r=await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q+' Baku')}&limit=1`);
    const d=await r.json();
    if(d[0]) mapRef.current.flyTo({center:[parseFloat(d[0].lon),parseFloat(d[0].lat)],zoom:16});
  };
  return(
    <div style={{width:'100%',height:'100vh',position:'relative',background:'#e5e5e5'}}>
      <div ref={mapDiv} style={{position:'absolute',inset:0}} />
      <div style={{position:'absolute',top:12,left:12,right:60,display:'flex',background:'white',borderRadius:999,padding:'6px 8px',boxShadow:'0 2px 12px rgba(0,0,0,.15)'}}>
        <input value={q} onChange={e=>setQ(e.target.value)} onKeyDown={e=>e.key==='Enter'&&search()} placeholder="Поиск улицы в Баку..." style={{flex:1,outline:'none',padding:'0 12px',fontSize:14}} />
        <button onClick={search} style={{background:'black',color:'white',borderRadius:999,padding:'8px 16px',fontSize:12}}>Найти</button>
      </div>
    </div>
  );
}
