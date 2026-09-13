'use client';
import { useEffect, useRef, useState } from 'react';
export default function LiveMiniMap(){
const ref=useRef<HTMLDivElement>(null);const [mounted,setMounted]=useState(false);
useEffect(()=>{
setMounted(true);
if(typeof window==='undefined') return;
let map:any=null;
const init=async ()=>{
const maplibregl=await import('maplibre-gl');
await import('maplibre-gl/dist/maplibre-gl.css');
if(!ref.current) return;
map=new maplibregl.Map({container: ref.current, style:'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json', center:[49.854,40.376], zoom:15, attributionControl:false});
};
init();
return ()=>{if(map) map.remove();};
},[]);
return (<div id="live-demo" className="bg-[#FCFCFA] py-[160px] px-6"><div className="max-w-[1120px] mx-auto grid lg:grid-cols-2 gap-16 items-center"><div><h2 className="text-[28px] md:text-[40px] font-[800] leading-[0.9]">Живая карта<br/><span style={{fontWeight:300, opacity:0.5}}>Ичери Шехер • 28 мая</span></h2><p className="mt-5 text-[13px] text-neutral-500">Маленький кусочек Баку где можно потыкать.</p></div><div className="relative h-[420px] rounded-[32px] overflow-hidden border border-[#EDE8E3] bg-[#F2F0EB]">{!mounted ? <div className="w-full h-full flex items-center justify-center text-[12px]">Загрузка...</div> : <div ref={ref} className="w-full h-full"/>}</div></div></div>);
}
