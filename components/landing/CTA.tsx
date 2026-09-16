'use client'
import React from 'react'

export function CTA() {
  return (
    <section style={{ padding:'140px 24px', background:'#101828', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(26,115,232,0.14) 0%, transparent 60%)' }}/>
      <div style={{ position:'relative', textAlign:'center', maxWidth:700, margin:'0 auto' }}>
        <h2 style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'clamp(40px,7vw,88px)', color:'white', letterSpacing:-3, lineHeight:0.9, margin:'0 0 24px' }}>
          Готов ехать<br/>безопасно?
        </h2>
        <p style={{ fontSize:16, color:'rgba(255,255,255,0.45)', fontFamily:'Inter,sans-serif', lineHeight:1.65, maxWidth:440, margin:'0 auto 40px' }}>
          Открой карту прямо сейчас — работает в браузере, без установки.
        </p>
        <div style={{ position:'relative', display:'inline-block' }}>
          <div style={{ position:'absolute', inset:-2, borderRadius:28, background:'conic-gradient(from 0deg, #1A73E8, #E8FF59, #FF3B30, #1A73E8)', animation:'borderSpin 3s linear infinite' }}/>
          <a href="/map" style={{ position:'relative', background:'white', color:'#101828', padding:'16px 40px', borderRadius:26, fontSize:16, fontWeight:700, textDecoration:'none', fontFamily:'Inter,sans-serif', display:'inline-block', zIndex:1 }}>
            Открыть Baku Safe Map
          </a>
        </div>
      </div>
    </section>
  )
}
