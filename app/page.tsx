'use client';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
const MapView = dynamic(()=>import('../components/map/MapView'), {ssr:false});
const HeroWow = dynamic(()=>import('../components/landing/HeroWow'), {ssr:false});
const PhoneShowcase3D = dynamic(()=>import('../components/landing/PhoneShowcase3D'), {ssr:false});
const BentoHowItWorks = dynamic(()=>import('../components/landing/BentoHowItWorks'), {ssr:false});
const BeforeAfter = dynamic(()=>import('../components/landing/BeforeAfter'), {ssr:false});
const LiveMiniMap = dynamic(()=>import('../components/landing/LiveMiniMap'), {ssr:false});
const SocialProof = dynamic(()=>import('../components/landing/SocialProof'), {ssr:false});
const FooterIOS = dynamic(()=>import('../components/landing/FooterIOS'), {ssr:false});

export default function Page(){
const [showMap,setShowMap]=useState(false);
const [onboard,setOnboard]=useState(0);
const [mounted,setMounted]=useState(false);
useEffect(()=>{setMounted(true); try{if(localStorage.getItem('baku_mosh_map_v8')) setShowMap(true);}catch{}},[]);
if(!mounted) return <div className="min-h-[100svh] bg-[#0A0A0B] flex items-center justify-center"><div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white/60 animate-spin"/></div>;
if(showMap) return <MapView/>;
if(onboard===1){
return (
<div className="min-h-[100svh] bg-[#0A0A0B] text-white flex flex-col items-center justify-center p-6 text-center">
<div className="w-20 h-20 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-2xl">📍</div>
<h2 className="text-[26px] font-[800] mt-6" style={{fontFamily:'Manrope'}}>Разрешить ходьбу?</h2>
<p className="text-white/40 mt-3 max-w-[320px] text-[12px] leading-[1.6]">Покажем как идете и флажки если попадете на яму. Ultra soft Google-like, PWA, 60-120 FPS.</p>
<div className="mt-8 flex flex-col gap-2.5 w-full max-w-[320px]">
<button onClick={()=>{try{localStorage.setItem('baku_mosh_map_v8','1');}catch{}; setShowMap(true);}} className="bg-white text-black px-8 py-3.5 rounded-full font-[700] text-[14px]">Разрешить и идти • ULTRA SOFT</button>
<button onClick={()=>{try{localStorage.setItem('baku_mosh_map_v8','1');}catch{}; setShowMap(true);}} className="border border-white/12 px-8 py-3 rounded-full text-[12px] text-white/50">Позже</button>
</div>
</div>
);
}
return (
<div className="bg-[#0A0A0B]">
<HeroWow onOpen={()=>setOnboard(1)}/>
<PhoneShowcase3D/>
<BentoHowItWorks/>
<BeforeAfter/>
<LiveMiniMap/>
<SocialProof/>
<FooterIOS/>
<button onClick={()=>setOnboard(1)} className="fixed bottom-6 right-6 z-[80] w-[56px] h-[56px] bg-[#1a1a1a] rounded-[18px] shadow-[0_16px_40px_rgba(0,0,0,0.4)] border border-white/10 flex items-center justify-center text-white text-[22px]" style={{animation:'pulse-soft 2.8s ease-in-out infinite'}}>+</button>
</div>
);
}
