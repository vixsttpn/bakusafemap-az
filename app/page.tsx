'use client';
import { useEffect, useRef, useState } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';

const IconSearch=()=><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="6"/><path d="m21 21-4.3-4.3"/></svg>;
const IconLocate=()=><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>;
const IconPlus=()=><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>;
const IconVoice=()=><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>;

type Report={id:string,lng:number,lat:number,type:'danger'|'police'|'accident'|'repair',time:number};
type RouteStep={instruction:string,distance:number,duration:number,location:[number,number],maneuver:string};

export default function Page(){
  const mapDiv=useRef<HTMLDivElement>(null);
  const mapRef=useRef<any>(null);
  const userM=useRef<any>(null);
  const routeSrcId='route';
  const watchRef=useRef<number|null>(null);
  const trail=useRef<{lat:number,lng:number,time:number}[]>([]);
  const [q,setQ]=useState(''); const [suggest,setSuggest]=useState<any[]>([]);
  const [pos,setPos]=useState<{lat:number,lng:number,heading:number,speed:number,acc:number}|null>(null);
  const [dest,setDest]=useState<{lng:number,lat:number,name:string}|null>(null);
  const [steps,setSteps]=useState<RouteStep[]>([]); const [curStep,setCurStep]=useState(0);
  const [navigating,setNavigating]=useState(false); const [voiceOn,setVoiceOn]=useState(true);
  const [reports,setReports]=useState<Report[]>(()=>{ if(typeof window==='undefined') return []; try{return JSON.parse(localStorage.getItem('bsm_reports')||'[]')}catch{return []} });
  const [showReport,setShowReport]=useState(false);

  const speak=(text:string)=>{
    if(!voiceOn || typeof window==='undefined') return;
    window.speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(text);
    u.lang='ru-RU'; u.rate=1.0; u.pitch=0.9;
    const voices=window.speechSynthesis.getVoices();
    const male=voices.find(v=>v.lang.includes('ru')&&/(Pavel|Dmitry|Yuri|Aleksandr|male|муж)/i.test(v.name)) || voices.find(v=>v.lang.includes('ru')) || voices[0];
    if(male) u.voice=male;
    window.speechSynthesis.speak(u);
  };

  useEffect(()=>{
    let map:any;
    (async()=>{
      const ml=await import('maplibre-gl');
      if(!mapDiv.current) return;
      map=new ml.Map({container:mapDiv.current,style:'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',center:[49.854,40.376],zoom:14.5,pitch:0,bearing:0,antialias:true,attributionControl:false});
      mapRef.current=map;
      map.on('load',()=>{
        map.getStyle().layers.forEach((l:any)=>{ if(l.type==='line'&&/road|highway|street/.test(l.id)){ try{map.setPaintProperty(l.id,'line-color','#8a8a8a');}catch{}} });
        const el=document.createElement('div'); el.innerHTML=`<div style="width:30px;height:30px;background:#1a73e8;border:3px solid white;border-radius:50%;box-shadow:0 3px 12px rgba(0,0,0,.4)"></div>`;
        userM.current=new ml.Marker({element:el.firstChild as HTMLElement}).setLngLat([49.854,40.376]).addTo(map);
        map.addSource(routeSrcId,{type:'geojson',data:{type:'FeatureCollection',features:[]}});
        map.addLayer({id:'route-line',type:'line',source:routeSrcId,paint:{'line-color':'#1a73e8','line-width':6,'line-opacity':0.9}});
        reports.forEach(r=>{ const d=document.createElement('div'); const col=r.type==='danger'?'#ff3b30':r.type==='police'?'#007aff':r.type==='accident'?'#ff9500':'#8e8e93'; d.innerHTML=`<div style="width:18px;height:18px;background:${col};border:2px solid white;border-radius:50%"></div>`; new ml.Marker({element:d.firstChild as HTMLElement}).setLngLat([r.lng,r.lat]).addTo(map); });

        if(navigator.geolocation){
          watchRef.current=navigator.geolocation.watchPosition((p)=>{
            if(p.coords.accuracy>35) return;
            const now={lat:p.coords.latitude,lng:p.coords.longitude,time:Date.now()};
            trail.current.push(now); if(trail.current.length>6) trail.current.shift();
            if(trail.current.length<2){ userM.current.setLngLat([now.lng,now.lat]); return; }
            const prev=trail.current[trail.current.length-2];
            const dLat=(now.lat-prev.lat)*Math.PI/180; const dLng=(now.lng-prev.lng)*Math.PI/180;
            const a=Math.sin(dLat/2)**2+Math.cos(prev.lat*Math.PI/180)*Math.cos(now.lat*Math.PI/180)*Math.sin(dLng/2)**2;
            const dist=6371000*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
            if(dist<2) return;
            const dt=(now.time-prev.time)/1000; const speed=dt>0?dist/dt:0;
            const y=Math.sin(dLng)*Math.cos(now.lat*Math.PI/180); const x=Math.cos(prev.lat*Math.PI/180)*Math.sin(now.lat*Math.PI/180)-Math.sin(prev.lat*Math.PI/180)*Math.cos(now.lat*Math.PI/180)*Math.cos(dLng);
            const heading=p.coords.heading??((Math.atan2(y,x)*180/Math.PI+360)%360);
            setPos({lat:now.lat,lng:now.lng,heading,speed,acc:p.coords.accuracy});
            userM.current.setLngLat([now.lng,now.lat]);
            if(navigating){
              map.easeTo({center:[now.lng,now.lat],zoom:18,pitch:65,bearing:heading,duration:800,padding:{bottom:120}});
              if(steps[curStep]){ const s=steps[curStep]; const d2=(now.lng-s.location[0])**2+(now.lat-s.location[1])**2; if(d2<0.00002 && curStep < steps.length-1){ const ns=steps[curStep+1]; setCurStep(c=>c+1); speak(ns.instruction); } }
            }else if(speed>0.8){
              map.easeTo({center:[now.lng,now.lat],zoom:17.2,pitch:55,bearing:heading,duration:1000});
            }
          },()=>{},{enableHighAccuracy:true,maximumAge:0,timeout:10000});
        }
      });
    })();
    return()=>{ if(watchRef.current!==null) navigator.geolocation.clearWatch(watchRef.current); map?.remove(); };
  },[]);

  useEffect(()=>{ localStorage.setItem('bsm_reports',JSON.stringify(reports)); },[reports]);

  const searchStreet=async(v:string)=>{
    setQ(v);
    if(v.length<3){ setSuggest([]); return; }
    const r=await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(v+' Baku')}&limit=5&addressdetails=1`);
    const d=await r.json(); setSuggest(d);
  };

  const fetchRoute=async(from:{lng:number,lat:number},to:{lng:number,lat:number})=>{
    const url=`https://router.project-osrm.org/route/v1/driving/${from.lng},${from.lat};${to.lng},${to.lat}?overview=full&geometries=geojson&steps=true`;
    const res=await fetch(url); const data=await res.json();
    if(!data.routes?.[0]) return;
    const route=data.routes[0];
    mapRef.current.getSource(routeSrcId).setData({type:'Feature',geometry:route.geometry});
    const s:RouteStep[]=route.legs[0].steps.map((st:any)=>({instruction:st.maneuver.type==='depart'?'Начните движение':st.maneuver.type==='arrive'?'Вы прибыли':`${st.maneuver.modifier?'Поверните '+st.maneuver.modifier:''} на ${st.name||'дорогу'}`,distance:st.distance,duration:st.duration,location:st.maneuver.location,maneuver:st.maneuver.type}));
    setSteps(s); setCurStep(0); setNavigating(true);
    speak(`Маршрут построен, ${Math.round(route.distance/1000)} километра, ${Math.round(route.duration/60)} минут. ${s[0]?.instruction}`);
    mapRef.current.fitBounds([[from.lng,from.lat],[to.lng,to.lat]],{padding:80});
  };

  const addReport=(type:Report['type'])=>{
    const center=mapRef.current?.getCenter(); const lng=center?.lng||pos?.lng||49.854; const lat=center?.lat||pos?.lat||40.376;
    const r:Report={id:Date.now().toString(),lng,lat,type,time:Date.now()};
    setReports(prev=>[...prev,r]); setShowReport(false);
    const mlEl=document.createElement('div'); const col=type==='danger'?'#ff3b30':type==='police'?'#007aff':type==='accident'?'#ff9500':'#8e8e93';
    mlEl.innerHTML=`<div style="width:18px;height:18px;background:${col};border:2px solid white;border-radius:50%"></div>`;
    new (window as any).maplibregl?.Marker||{}; // marker will be added on reload, simple add now:
    mapRef.current && (async()=>{ const ml=await import('maplibre-gl'); new ml.Marker({element:mlEl.firstChild as HTMLElement}).setLngLat([lng,lat]).addTo(mapRef.current); })();
  };

  return(
    <div className="relative w-full h- bg-[#f2f2f2] overflow-hidden">
      <div ref={mapDiv} className="absolute inset-0" />
      <div className="absolute top-3 left-3 right-3 h- bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,.15)] flex items-center px-2 z-10">
        <div className="pl-3 text-gray-400"><IconSearch/></div>
        <input value={q} onChange={e=>searchStreet(e.target.value)} placeholder="Поиск улицы в Баку..." className="flex-1 outline-none px-3 text- bg-transparent" />
        <button onClick={()=>{ if(suggest[0]){ const s=suggest[0]; const d={lng:parseFloat(s.lon),lat:parseFloat(s.lat),name:s.display_name}; setDest(d); setSuggest([]); setQ(s.display_name.split(',')[0]); if(pos) fetchRoute(pos,d); } }} className="bg-black text-white rounded-full px-5 h- text-">Найти</button>
      </div>
      {suggest.length>0 && (
        <div className="absolute top- left-3 right-3 bg-white rounded- shadow-xl z-20 overflow-hidden">
          {suggest.map((s,i)=>(<button key={i} onClick={()=>{ const d={lng:parseFloat(s.lon),lat:parseFloat(s.lat),name:s.display_name}; setDest(d); setSuggest([]); setQ(s.display_name.split(',')[0]); if(pos) fetchRoute(pos,d); }} className="w-full text-left px-4 py-3 text- border-b last:border-0 hover:bg-gray-50">{s.display_name}</button>))}
        </div>
      )}
      <div className="absolute right-3 top- flex flex-col gap-3 z-10">
        <button onClick={()=>mapRef.current?.zoomIn()} className="w-11 h-11 bg-black text-white rounded- shadow flex items-center justify-center"><IconPlus/></button>
        <button onClick={()=>{ if(pos) mapRef.current?.flyTo({center:[pos.lng,pos.lat],zoom:16}); }} className="w-11 h-11 bg-white rounded- shadow flex items-center justify-center"><IconLocate/></button>
        <button onClick={()=>setShowReport(true)} className="w-11 h-11 bg-[#ff3b30] text-white rounded- shadow flex items-center justify-center text-">!</button>
        <button onClick={()=>setVoiceOn(v=>!v)} className={`w-11 h-11 rounded- shadow flex items-center justify-center ${voiceOn?'bg-white text-black':'bg-gray-300'}`}><IconVoice/></button>
      </div>
      {showReport && (
        <div className="absolute inset-0 bg-black/40 z-30 flex items-end">
          <div className="w-full bg-white rounded-t- p-4">
            <div className="text- font-semibold mb-3">Что сообщить?</div>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={()=>addReport('danger')} className="h-16 rounded-xl bg-red-50 border border-red-200">🚨 Опасность</button>
              <button onClick={()=>addReport('police')} className="h-16 rounded-xl bg-blue-50 border border-blue-200">👮 Полиция</button>
              <button onClick={()=>addReport('accident')} className="h-16 rounded-xl bg-orange-50 border border-orange-200">💥 ДТП</button>
              <button onClick={()=>addReport('repair')} className="h-16 rounded-xl bg-gray-50 border">🚧 Ремонт</button>
            </div>
            <button onClick={()=>setShowReport(false)} className="w-full mt-3 h-11 rounded-full bg-black text-white">Отмена</button>
          </div>
        </div>
      )}
      {navigating && steps[curStep] && (
        <div className="absolute bottom-3 left-3 right-3 bg-white rounded- shadow-[0_8px_30px_rgba(0,0,0,.25)] p-3 z-20">
          <div className="flex items-center justify-between">
            <div><div className="text- text-gray-500">{Math.round(steps.slice(curStep).reduce((a,b)=>a+b.distance,0)/1000*10)/10} км • {Math.round(steps.slice(curStep).reduce((a,b)=>a+b.duration,0)/60)} мин</div><div className="text- font-bold">{steps[curStep].instruction}</div><div className="text- text-gray-600">{steps[curStep].distance.toFixed(0)} м</div></div>
            <button onClick={()=>{ setNavigating(false); mapRef.current.getSource(routeSrcId).setData({type:'FeatureCollection',features:[]}); window.speechSynthesis.cancel(); }} className="bg-black text-white rounded-full px-4 h-9 text-">Стоп</button>
          </div>
        </div>
      )}
    </div>
  );
}
