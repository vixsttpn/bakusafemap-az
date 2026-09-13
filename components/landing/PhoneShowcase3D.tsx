'use client';
import { useEffect, useRef } from 'react';
function Phone3D({children, side}:{children:any, side:'left'|'right'}){
const ref=useRef<HTMLDivElement>(null);
useEffect(()=>{
if(typeof window==='undefined') return;
const el=ref.current;if(!el) return;let raf=0;
const onScroll=()=>{
cancelAnimationFrame(raf);
raf=requestAnimationFrame(()=>{
const rect=el.getBoundingClientRect();
const progress=1-Math.min(1,Math.max(0,(rect.top+rect.height*0.3)/window.innerHeight));
const rotY=side==='left'?-12+progress*6:12-progress*6;
const rotX=8-progress*3;
const y=-progress*24;
el.style.transform=`perspective(2400px) rotateY(${rotY}deg) rotateX(${rotX}deg) translate3d(0,${y}px,0)`;
});
};
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
return ()=>{cancelAnimationFrame(raf);window.removeEventListener('scroll',onScroll);};
},[side]);
return (<div ref={ref} className="relative will-change-transform" style={{transform:`perspective(2400px) rotateY(${side==='left'?-12:12}deg) rotateX(8deg)`, transformStyle:'preserve-3d'}}><div className="relative w-[340px] sm:w-[390px] h-[780px] sm:h-[844px] bg-[#0a0a0c] rounded-[60px] p-[11px] shadow-[0_40px_120px_-20px_rgba(0,0,0,0.85)]"><div className="w-full h-full bg-black rounded-[49px] overflow-hidden relative"><div className="absolute top-0 left-1/2 -translate-x-1/2 w-[126px] h-[37px] bg-black rounded-b-[18px] z-20"/><div className="w-full h-full bg-[#FBF9F6] relative overflow-hidden">{children}<div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-black rounded-full z-30"/></div></div></div></div>);
}
export default function PhoneShowcase3D(){
return (<div className="relative bg-[#08080A] py-[160px] px-6 overflow-hidden"><div className="max-w-[1280px] mx-auto"><div className="text-center max-w-[640px] mx-auto mb-[88px]"><h2 className="text-[28px] md:text-[48px] font-[800] tracking-[-0.03em] leading-[0.92]" style={{fontFamily:'Manrope'}}>Настоящий продукт<br/><span style={{fontWeight:300, opacity:0.5}}>внутри телефона</span></h2></div><div className="flex flex-col lg:flex-row gap-20 lg:gap-8 items-center justify-center"><Phone3D side="left"><div className="w-full h-full flex flex-col"><div className="h-[54px] shrink-0 flex items-end justify-between px-5 pb-2"><span className="text-[12px] font-[700]">09:41</span><span className="text-[11px] opacity-60">100%</span></div><div className="flex-1 bg-[#F2F0EB] relative"><div className="absolute top-[200px] left-[48%] -translate-x-1/2 bg-white rounded-[16px] shadow border px-3.5 py-2.5"><p className="text-[11px] font-bold">Ремонт дороги</p></div></div></div></Phone3D><Phone3D side="right"><div className="w-full h-full flex flex-col bg-[#0E0E10] text-white"><div className="h-[54px] shrink-0 flex items-end justify-between px-5 pb-2 text-white/70"><span>09:41</span><span>100%</span></div><div className="flex-1 bg-[#F2F0EB] p-3"><div className="p-3 rounded-[14px] bg-white border shadow"><p className="text-[11px] font-bold text-black">Вы в 14м от ямы • Это на месте? 🚩</p></div></div></div></Phone3D></div></div></div>);
}
