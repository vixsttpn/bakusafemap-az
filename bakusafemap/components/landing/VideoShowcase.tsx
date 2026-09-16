'use client'
import React, { useRef, useEffect } from 'react'

export function VideoShowcase() {
  const roadRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!roadRef.current) return
    // CSS car animation handles this
  }, [])

  return (
    <section style={{ padding:'100px 24px', background:'#101828', overflow:'hidden' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <h2 style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'clamp(40px,6vw,80px)', color:'white', letterSpacing:-3, lineHeight:0.92, margin:'0 0 48px' }}>
          ДВИЖЕНИЕ<br/><span style={{color:'#8A8A8A'}}>ПО БАКУ</span>
        </h2>
        <div ref={roadRef} style={{ background:'#1a1a1a', borderRadius:20, overflow:'hidden', height:280, position:'relative', border:'1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ position:'absolute', top:'50%', left:0, right:0, height:72, transform:'translateY(-50%)', background:'#2a2a2a' }}>
            <div style={{ position:'absolute', top:'50%', left:0, right:0, height:3, transform:'translateY(-50%)', background:'repeating-linear-gradient(90deg, #E8FF59 0, #E8FF59 40px, transparent 40px, transparent 80px)', animation:'dashFlow 0.9s linear infinite', backgroundSize:'80px 3px' }}/>
          </div>
          <div className="car-drive" style={{ position:'absolute', top:'50%', transform:'translateY(-50%)', display:'flex', alignItems:'center' }}>
            <div style={{ background:'#1A73E8', borderRadius:20, padding:'6px 18px', boxShadow:'0 0 24px rgba(26,115,232,0.7)', display:'flex', alignItems:'center', gap:6 }}>
              <div style={{ width:8, height:8, borderRadius:'50%', background:'white' }}/>
              <div style={{ width:28, height:6, background:'rgba(255,255,255,0.7)', borderRadius:3 }}/>
            </div>
          </div>
          <div style={{ position:'absolute', top:20, left:24, fontSize:11, fontFamily:'Fragment Mono,monospace', color:'rgba(255,255,255,0.3)', letterSpacing:2 }}>BABAK PROSPEKTİ</div>
        </div>
      </div>
    </section>
  )
}
