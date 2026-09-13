'use client';
import { useEffect, useRef } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
export default function LiveMiniMap(){
  const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{ let map:any; (async()=>{ const ml=await import('maplibre-gl'); if(!ref.current) return; map=new ml.Map({container:ref.current,style:'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',center:[49.854,40.376],zoom:11,attributionControl:false}); map.on('load',()=>{ map.getStyle().layers.forEach((l:any)=>{ if(l.type==='line'&&/road|highway|street/.test(l.id)){ try{map.setPaintProperty(l.id,'line-color','#8a8a8a');}catch{}} }); }); })(); return()=>map?.remove(); },[]);
  return <div ref={ref} className="w-full h- rounded- overflow-hidden" />;
}
