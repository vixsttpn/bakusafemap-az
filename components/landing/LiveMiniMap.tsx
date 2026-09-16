"use client";
import { useEffect, useRef } from "react";
import "maplibre-gl/dist/maplibre-gl.css";

export default function LiveMiniMap(){
  const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    let map:any;
    const init=async()=>{
      const maplibregl=await import('maplibre-gl');
      if(!ref.current) return;
      map=new maplibregl.Map({
        container: ref.current,
        style:'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
        center:[49.854,40.376],
        zoom:15,
        attributionControl:false
      });
    };
    init();
    return ()=> map?.remove();
  },[]);
  return <div ref={ref} className="w-full h-[320px] rounded-[24px] overflow-hidden" />;
}
