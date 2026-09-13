'use client';
import { useEffect, useRef, useState } from 'react';
export default function BentoHowItWorks(){
const ref=useRef<HTMLDivElement>(null);const [vis,setVis]=useState(false);
useEffect(()=>{const el=ref.current;if(!el) return;const io=new IntersectionObserver(([e])=>{if(e.isIntersecting) setVis(true);},{threshold:0.15});io.observe(el);return ()=>io.disconnect();},[]);
const steps=[
{n:'01',t:'Нажмите +',d:'Плавающая кнопка 56px с пульсацией',c:'#FFD6A5'},
{n:'02',t:'Выберите проблему',d:'8 pastel типов с иконками',c:'#FFB3BA',span:'md:col-span-2'},
{n:'03',t:'Выделите улицу',d:'Тап по карте Google-like',c:'#D5C4F5'},
{n:'04',t:'2 фото',d:'Место + территория',c:'#A8D8EA'},
{n:'05',t:'Вежливо и точно',d:'Мы проверим и добавим',c:'#C5E8A5',span:'md:col-span-2'},
];
return (<div ref={ref} className="bg-[#FCFCFA] text-black py-[160px] px-6"><div className="max-w-[1120px] mx-auto"><h2 className="text-[32px] md:text-[48px] font-[800] tracking-[-0.03em] leading-[0.9]" style={{fontFamily:'Manrope'}}>Как это работает<br/><span style={{fontWeight:300, opacity:0.5}}>5 шагов, 20 секунд</span></h2><div className="mt-16 grid md:grid-cols-3 gap-4">{steps.map((s:any,i:number)=>(<div key={s.n} className={`p-7 rounded-[32px] bg-white border border-[#EDE8E3] shadow-[0_20px_80px_rgba(0,0,0,0.06)] ${s.span||''}`} style={{opacity:vis?1:0, transform:vis?'translate3d(0,0,0)':'translate3d(0,24px,0)', filter:vis?'blur(0)':'blur(20px)', transitionDelay:`${i*90}ms`, transition:'all 0.7s cubic-bezier(0.16,1,0.3,1)'}}><div className="w-11 h-11 rounded-[12px] flex items-center justify-center" style={{background:s.c}}>{s.n}</div><h4 className="mt-6 font-[700] text-[16px]">{s.t}</h4><p className="mt-2 text-[12.5px] text-neutral-500">{s.d}</p></div>))}</div></div></div>);
}
