'use client'
import React from 'react'
import { Starburst, VersionBadge } from './Starburst'

export function Hero() {
  return (
    <section style={{ position:'relative', minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'80px 24px 60px', overflow:'hidden', background:'#0A0A0A' }}>
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 70% 60% at 20% 30%, rgba(26,115,232,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 70%, rgba(255,107,0,0.12) 0%, transparent 60%)', animation:'gradientShift 12s ease infinite', backgroundSize:'200% 200%' }}/>
      <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize:'28px 28px' }}/>
      <div style={{ position:'absolute', top:'8%', right:'6%', opacity:0.65 }}>
        <Starburst size={130} />
      </div>
      <div style={{ position:'relative', zIndex:2, textAlign:'center', maxWidth:900 }}>
        <VersionBadge version="v8" subtitle="WAZE-LIKE BAKU" />
        <h1 style={{ marginTop:32, fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'clamp(52px,10vw,120px)', color:'white', letterSpacing:-4, lineHeight:0.88 }}>
          Безопасный<br/>
          <span style={{ fontFamily:'Instrument Serif,serif', fontStyle:'italic', fontWeight:400, color:'#1A73E8' }}>Баку</span>
          {' '}как в <span style={{ color:'#E8FF59' }}>Waze</span>
        </h1>
        <p style={{ marginTop:28, fontSize:17, color:'rgba(255,255,255,0.5)', fontFamily:'Inter,sans-serif', lineHeight:1.65, maxWidth:480, margin:'28px auto 0' }}>
          Репорты об авариях, полиции и ремонте дорог в реальном времени.
        </p>
        <div style={{ display:'flex', gap:12, justifyContent:'center', marginTop:36, flexWrap:'wrap' }}>
          <a href="/map" style={{ background:'white', color:'#101828', padding:'14px 32px', borderRadius:24, fontSize:15, fontWeight:700, textDecoration:'none', fontFamily:'Inter,sans-serif' }}>
            Открыть карту
          </a>
          <a href="#how" style={{ background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.12)', color:'white', padding:'14px 28px', borderRadius:24, fontSize:15, fontWeight:600, textDecoration:'none', fontFamily:'Inter,sans-serif' }}>
            Как работает
          </a>
        </div>
      </div>
    </section>
  )
}
