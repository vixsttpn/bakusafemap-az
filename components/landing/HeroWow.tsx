'use client';
import { useEffect, useRef } from 'react';
export default function HeroWow({onOpen}:{onOpen:()=>void}){
const bgRef=useRef<HTMLDivElement>(null);const gradRef=useRef<HTMLDivElement>(null);
useEffect(()=>{
if(typeof window==='undefined') return;
const bg=bgRef.current;const grad=gradRef.current;let mx=0,my=0,rx=0,ry=0,raf=0;
const onMouse=(e:MouseEvent)=>{mx=(e.clientX/window.innerWidth-0.5)*2;my=(e.clientY/window.innerHeight-0.5)*2;};
const loop=()=>{rx+=(mx-rx)*0.06;ry+=(my-ry)*0.06;if(bg) bg.style.transform=`translate3d(${rx*18}px,${ry*14}px,0) scale(1.12)`;if(grad) grad.style.transform=`translate3d(${rx*28}px,${ry*22}px,0)`;raf=requestAnimationFrame(loop);};
loop();window.addEventListener('mousemove',onMouse);return ()=>{cancelAnimationFrame(raf);window.removeEventListener('mousemove',onMouse);};
},[]);
return (
<div className="relative min-h-[100svh] bg-[#0A0A0B] flex flex-col items-center justify-center overflow-hidden px-6 py-20">
<div ref={bgRef} className="absolute inset-[-12%] will-change-transform" style={{filter:'blur(24px) saturate(0.15) brightness(1.15)', opacity:0.55}}><div className="absolute inset-0" style={{backgroundImage:`url("https://a.tile.openstreetmap.org/12/2468/1612.png")`, backgroundSize:'50% 50%'}}/></div>
<div ref={gradRef} className="absolute w-[900px] h-[700px] rounded-full blur-[120px] will-change-transform" style={{background:'radial-gradient(60% 60% at 50% 40%, #FFD6A5 0%, #FFE8C6 28%, transparent 72%)', opacity:0.38, top:'8%', left:'-6%'}}/>
<div className="relative z-10 max-w-[1120px] w-full flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.07] border border-white/10 backdrop-blur-[20px]"><span className="w-1.5 h-1.5 rounded-full bg-[#FFD6A5] animate-pulse"/><span className="text-[10px] tracking-[0.18em] text-white/70">BAKU • 40.4093° N • GOOGLE-LIKE FREE</span></div>
<h1 className="mt-10 font-[800] tracking-[-0.04em] leading-[0.88] text-[44px] sm:text-[68px] md:text-[84px] max-w-[820px]"><span className="block" style={{fontWeight:700, fontFamily:'Manrope'}}>Дороги Баку.</span><span className="block" style={{fontWeight:300, opacity:0.6, fontFamily:'Geist'}}>Чисто. Понятно.</span></h1>
<p className="mt-8 max-w-[520px] text-[14px] leading-[1.7] text-white/55" style={{fontFamily:'Geist'}}>Мягкая карта как Google Maps, но бесплатно навсегда. Без рекламы и магазинов. Только дороги. Ограничено Азербайджаном.</p>
<div className="mt-10 flex gap-3"><button onClick={onOpen} className="h-[56px] px-8 rounded-full bg-white text-black font-[700] text-[14px]">Открыть карту →</button><button onClick={()=>{if(typeof document!=='undefined') document.getElementById('live-demo')?.scrollIntoView({behavior:'smooth'});}} className="h-[56px] px-8 rounded-full bg-white/[0.06] border border-white/10 text-[13.5px] text-white/80">Посмотреть демо</button></div>
<div className="mt-14 flex flex-wrap gap-2 justify-center max-w-[560px]">{['Ремонт','Авария','Яма','Закрыто','Вода','Полиция','Стройка','Светофор'].map(l=><div key={l} className="px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur text-[11px] text-white/70">{l}</div>)}</div>
</div>
</div>
);
}
