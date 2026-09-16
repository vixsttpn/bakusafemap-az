'use client'
import React from 'react'

const features = [
  { emoji:'', label:'Репорты', desc:'Danger, Police, Accident, Repair', color:'#FF3B30' },
  { emoji:'', label:'Навигация', desc:'OSRM маршруты + голос Pavel', color:'#1A73E8' },
  { emoji:'', label:'Геолокация', desc:'±35м, watchPosition, trail', color:'#34d399' },
  { emoji:'', label:'Поиск', desc:'Nominatim debounce 280ms', color:'#FF9500' },
  { emoji:'', label:'60 FPS', desc:'MapLibre GL + Voyager tiles', color:'#E8FF59' },
  { emoji:'', label:'PWA', desc:'Offline-ready, installable', color:'#8E8E93' },
]

export function Features() {
  return (
    <section id="features" style={{ padding:'100px 24px', background:'#0A0A0A' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <h2 style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'clamp(36px,5vw,64px)', color:'white', letterSpacing:-2, lineHeight:1, margin:'0 0 60px' }}>
          Возможности
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:16 }}>
          {features.map((f,i) => (
            <div key={i} style={{ padding:'28px', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.06)', borderRadius:16, transition:'border-color 200ms' }}
              onMouseEnter={e=>(e.currentTarget.style.borderColor=f.color+'40')}
              onMouseLeave={e=>(e.currentTarget.style.borderColor='rgba(255,255,255,0.06)')}
            >
              <div style={{ fontSize:14, fontWeight:700, color:f.color, fontFamily:'Syne,sans-serif', marginBottom:8 }}>{f.label}</div>
              <div style={{ fontSize:13, color:'rgba(255,255,255,0.45)', fontFamily:'Inter,sans-serif', lineHeight:1.6 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
