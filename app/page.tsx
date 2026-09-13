'use client';
import { useEffect, useRef, useState } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';

const IcoSearch=()=><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="6"/><path d="m21 21-4.3-4.3"/></svg>;
const IcoLocate=()=><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>;
const IcoPlus=()=><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>;
const IcoVoice=()=><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19 4.93a10 10 0 0 1 0 14.14"/></svg>;

type Report={id:string,lng:number,lat:number,type:'danger'|'police'|'accident'|'repair',time:number};
type Step={text:string,dist:number,loc:[number,number]};

export default function Page(){
  const mapDiv=useRef<HTMLDivElement>(null);
  const mapRef=useRef<any>(null);
  const userRef=useRef<any>(null);
  const watchRef=useRef<number|null>(null);
  const trail=useRef<{lat:number,lng:number,time:number}[]>([]);
  const [q,setQ]=useState(''); const [sug,setSug]=useState<any[]>([]);
  const [pos,setPos]=useState<{lng:number,lat:number,heading:number}|null>(null);
  const [reports,setReports]=useState<Report[]>([]);
  const [showRep,setShowRep]=useState(false);
  const [routeSteps,setRouteSteps]=useState<Step[]>([]); const [cur,setCur]=useState(0);
  const [nav,setNav]=useState(false); const [voiceOn,setVoiceOn]=useState(true);
  const [info,setInfo]=useState('готов');

  const speak=(t:string)=>{
    if(!voiceOn) return;
    try{
      window.speechSynthesis.cancel();
      const u=new SpeechSynthesisUtterance(t);
      u.lang='ru-RU'; u.rate=1; u.pitch=0.85;
      const vs=window.speechSynthesis.getVoices();
      const male=vs.find(v=>v.lang.includes('ru')&&/Pavel|Dmitry|Alex/i.test(v.name))||vs.find(v=>v.lang.includes('ru'));
      if(male) u.voice=male;
      window.speechSynthesis.speak(u);
    }catch{}
  };

  useEffect(()=>{
    try{ const s=localStorage.getItem('bsm_rep'); if(s) setReports(JSON.parse(s)); }catch{}
  },[]);
  useEffect(()=>{ try{ localStorage.setItem('bsm_rep',JSON.stringify(reports)); }catch{} },[reports]);

  useEffect(()=>{
    let map:any;
    (async()=>{
      const ml=await import('maplibre-gl');
      if(!mapDiv.current) return;
      map=new ml.Map({container:mapDiv.current,style:'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',center:[49.854,40.376],zoom:14.5,attributionControl:false,antialias:true});
      mapRef.current=map;
      map.on('load',()=>{
        map.addSource('route',{type:'geojson',data:{type:'FeatureCollection',features:[]}});
        map.addLayer({id:'route-line',type:'line',source:'route',paint:{'line-color':'#1a73e8','line-width':6}});
        reports.forEach(r=>{
          const d=document.createElement('div');
          const col=r.type==='danger'?'#ff3b30':r.type==='police'?'#007aff':r.type==='accident'?'#ff9500':'#8e8e93';
          d.innerHTML=`<div style="width:14px;height:14px;background:${col};border:2px solid white;border-radius:50%"></div>`;
          new ml.Marker({element:d.firstChild as HTMLElement}).setLngLat([r.lng,r.lat]).addTo(map);
        });
        const el=document.createElement('div'); el.innerHTML=`<div style="width:28px;height:28px;background:#1a73e8;border:3px solid white;border-radius:50%;box-shadow:0 3px 12px rgba(0,0,0,.4)"></div>`;
        userRef.current=new ml.Marker({element:el.firstChild as HTMLElement}).setLngLat([49.854,40.376]).addTo(map);
        if(navigator.geolocation){
          watchRef.current=navigator.geolocation.watchPosition((p)=>{
            if(p.coords.accuracy>35) return;
            const now={lat:p.coords.latitude,lng:p.coords.longitude,time:Date.now()};
            trail.current.push(now); if(trail.current.length>6) trail.current.shift();
            if(trail.current.length>=2){
              const prev=trail.current[trail.current.length-2];
              const dLat=(now.lat-prev.lat)*Math.PI/180; const dLng=(now.lng-prev.lng)*Math.PI/180;
              const a=Math.sin(dLat/2)**2+Math.cos(prev.lat*Math.PI/180)*Math.cos(now.lat*Math.PI/180)*Math.sin(dLng/2)**2;
              const dist=6371000*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
              if(dist<2) return;
            }
            const y=Math.sin((now.lng-trail.current[0].lng)*Math.PI/180)*Math.cos(now.lat*Math.PI/180);
            const x=Math.cos(trail.current[0].lat*Math.PI/180)*Math.sin(now.lat*Math.PI/180)-Math.sin(trail.current[0].lat*Math.PI/180)*Math.cos(now.lat*Math.PI/180)*Math.cos((now.lng-trail.current[0].lng)*Math.PI/180);
            const head=p.coords.heading||((Math.atan2(y,x)*180/Math.PI+360)%360);
            setPos({lng:now.lng,lat:now.lat,heading:head});
            setInfo(`${(p.coords.speed||0).toFixed(1)} м/с • ${p.coords.accuracy.toFixed(0)}м`);
            userRef.current.setLngLat([now.lng,now.lat]);
            if(nav){ map.easeTo({center:[now.lng,now.lat],zoom:18,pitch:65,bearing:head,duration:800}); }
          },()=>{},{enableHighAccuracy:true,maximumAge:0,timeout:10000});
        }
      });
    })();
    return()=>{ if(watchRef.current!==null) navigator.geolocation.clearWatch(watchRef.current); map?.remove(); };
  },[]);

  const search=async(v:string)=>{
    setQ(v);
    if(v.length<3){ setSug([]); return; }
    const r=await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(v+' Baku')}&limit=5`);
    const d=await r.json(); setSug(d);
  };

  const goRoute=async(to:{lng:number,lat:number,name:string})=>{
    if(!pos||!mapRef.current) return;
    const url=`https://router.project-osrm.org/route/v1/driving/${pos.lng},${pos.lat};${to.lng},${to.lat}?overview=full&geometries=geojson&steps=true`;
    const res=await fetch(url); const data=await res.json();
    if(!data.routes||!data.routes[0]) return;
    const route=data.routes[0];
    mapRef.current.getSource('route').setData({type:'Feature',geometry:route.geometry});
    const st:Step[]=route.legs[0].steps.map((s:any)=>({text:s.name?`Двигайтесь по ${s.name}`:s.maneuver.instruction||'Продолжайте',dist:s.distance,loc:s.maneuver.location}));
    setRouteSteps(st); setCur(0); setNav(true);
    speak(`Маршрут ${Math.round(route.distance/1000)} км, ${Math.round(route.duration/60)} минут. ${st[0].text}`);
  };

  const addRep=(type:Report['type'])=>{
    const c=mapRef.current? mapRef.current.getCenter() : {lng:pos?.lng||49.854,lat:pos?.lat||40.376};
    const r:Report={id:Date.now().toString(),lng:c.lng,lat:c.lat,type,time:Date.now()};
    setReports(a=>[...a,r]); setShowRep(false);
    (async()=>{
      const ml=await import('maplibre-gl');
      const d=document.createElement('div');
      const col=type==='danger'?'#ff3b30':type==='police'?'#007aff':type==='accident'?'#ff9500':'#8e8e93';
      d.innerHTML=`<div style="width:14px;height:14px;background:${col};border:2px solid white;border-radius:50%"></div>`;
      new ml.Marker({element:d.firstChild as HTMLElement}).setLngLat([c.lng,c.lat]).addTo(mapRef.current);
    })();
  };

  return(
    <div style={{width:'100%',height:'100vh',position:'relative',background:'#e5e5e5'}}>
      <div ref={mapDiv} style={{position:'absolute',inset:0}} />
      <div style={{position:'absolute',top:12,left:12,right:12,height:48,background:'white',borderRadius:999,display:'flex',alignItems:'center',padding:'0 8px',boxShadow:'0 4px 20px rgba(0,0,0,.15)',zIndex:10}}>
        <span style={{paddingLeft:8,color:'#999'}}><IcoSearch/></span>
        <input value={q} onChange={e=>search(e.target.value)} placeholder="Поиск улицы в Баку..." style={{flex:1,outline:'none',padding:'0 12px',fontSize:14}} />
        <button onClick={()=>{ if(sug[0]){ const s=sug[0]; goRoute({lng:parseFloat(s.lon),lat:parseFloat(s.lat),name:s.display_name}); setQ(s.display_name.split(',')[0]); setSug([]); } }} style={{background:'black',color:'white',borderRadius:999,padding:'8px 16px',fontSize:12}}>Найти</button>
      </div>
      {sug.length>0 && (
        <div style={{position:'absolute',top:68,left:12,right:12,background:'white',borderRadius:16,boxShadow:'0 8px 24px rgba(0,0,0,.2)',zIndex:20,overflow:'hidden'}}>
          {sug.map((s,i)=>(<button key={i} onClick={()=>{ goRoute({lng:parseFloat(s.lon),lat:parseFloat(s.lat),name:s.display_name}); setQ(s.display_name.split(',')[0]); setSug([]); }} style={{width:'100%',textAlign:'left',padding:'12px 16px',fontSize:13,borderBottom:'1px solid #eee'}}>{s.display_name}</button>))}
        </div>
      )}
      <div style={{position:'absolute',right:12,top:90,display:'flex',flexDirection:'column',gap:12,zIndex:10}}>
        <button onClick={()=>mapRef.current?.zoomIn()} style={{width:44,height:44,background:'black',color:'white',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center'}}><IcoPlus/></button>
        <button onClick={()=>{ if(pos) mapRef.current?.flyTo({center:[pos.lng,pos.lat],zoom:16}); }} style={{width:44,height:44,background:'white',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center'}}><IcoLocate/></button>
        <button onClick={()=>setShowRep(true)} style={{width:44,height:44,background:'#ff3b30',color:'white',borderRadius:12}}>!</button>
        <button onClick={()=>setVoiceOn(v=>!v)} style={{width:44,height:44,background:voiceOn?'white':'#ccc',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center'}}><IcoVoice/></button>
      </div>
      {showRep && (
        <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,.4)',zIndex:30,display:'flex',alignItems:'flex-end'}}>
          <div style={{width:'100%',background:'white',borderTopLeftRadius:24,borderTopRightRadius:24,padding:16}}>
            <div style={{fontWeight:600,marginBottom:12}}>Что сообщить?</div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
              <button onClick={()=>addRep('danger')} style={{height:64,background:'#fee',borderRadius:12}}>🚨 Опасность</button>
              <button onClick={()=>addRep('police')} style={{height:64,background:'#eef6ff',borderRadius:12}}>👮 Полиция</button>
              <button onClick={()=>addRep('accident')} style={{height:64,background:'#fff4e5',borderRadius:12}}>💥 ДТП</button>
              <button onClick={()=>addRep('repair')} style={{height:64,background:'#f2f2f2',borderRadius:12}}>🚧 Ремонт</button>
            </div>
            <button onClick={()=>setShowRep(false)} style={{width:'100%',marginTop:12,height:44,background:'black',color:'white',borderRadius:999}}>Отмена</button>
          </div>
        </div>
      )}
      {nav && routeSteps[cur] && (
        <div style={{position:'absolute',bottom:12,left:12,right:12,background:'white',borderRadius:20,padding:12,boxShadow:'0 8px 30px rgba(0,0,0,.25)',zIndex:20}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div><div style={{fontSize:11,color:'#888'}}>{Math.round(routeSteps.slice(cur).reduce((a,b)=>a+b.dist,0)/1000*10)/10} км осталось</div><div style={{fontWeight:700}}>{routeSteps[cur].text}</div><div style={{fontSize:12,color:'#666'}}>{routeSteps[cur].dist.toFixed(0)} м • {info}</div></div>
            <button onClick={()=>{ setNav(false); mapRef.current.getSource('route').setData({type:'FeatureCollection',features:[]}); try{window.speechSynthesis.cancel();}catch{} }} style={{background:'black',color:'white',borderRadius:999,padding:'8px 16px',fontSize:13}}>Стоп</button>
          </div>
        </div>
      )}
    </div>
  );
}
