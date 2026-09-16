'use client'
import React, { useEffect, useRef, useState } from 'react'

/* Animated map demo that runs client-side */
export function LiveMiniMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>()
  const [activeDemo, setActiveDemo] = useState<'danger'|'route'|'voice'>('route')

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let t = 0
    // Car position along route
    const route = [
      [60, 340], [130, 290], [220, 240],
      [310, 195], [420, 175], [520, 158], [660, 145],
    ] as [number,number][]

    const drawMap = () => {
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)

      // BG
      ctx.fillStyle = '#F5F1E8'
      ctx.fillRect(0, 0, w, h)

      // Blocks
      ctx.fillStyle = '#EDE9E0'
      ;[[0,0,200,120],[220,0,180,90],[520,100,200,140],[0,240,140,160],[400,260,180,140]].forEach(([x,y,ww,hh]) => {
        ctx.fillRect(x, y, ww, hh)
      })

      // Parks
      ctx.fillStyle = '#D9DFCC'
      ;[[60,70,110,80],[420,50,80,65]].forEach(([x,y,ww,hh]) => {
        ctx.beginPath(); ctx.roundRect(x,y,ww,hh,8); ctx.fill()
      })
      ctx.fillStyle = '#C8E6C9'
      ctx.beginPath(); ctx.roundRect(560,240,130,100,8); ctx.fill()

      // Main road horizontal
      ctx.strokeStyle = '#8A8A8A'; ctx.lineWidth = 18; ctx.globalAlpha = 0.5
      ctx.beginPath()
      ctx.moveTo(0, 200); ctx.quadraticCurveTo(360, 192, 720, 200)
      ctx.stroke()
      ctx.strokeStyle = '#F5F1E8'; ctx.lineWidth = 12; ctx.globalAlpha = 1
      ctx.beginPath()
      ctx.moveTo(0, 200); ctx.quadraticCurveTo(360, 192, 720, 200)
      ctx.stroke()

      // Vertical road
      ctx.strokeStyle = '#8A8A8A'; ctx.lineWidth = 14; ctx.globalAlpha = 0.4
      ctx.beginPath(); ctx.moveTo(360,0); ctx.lineTo(360,400); ctx.stroke()
      ctx.strokeStyle = '#F5F1E8'; ctx.lineWidth = 8; ctx.globalAlpha = 1
      ctx.beginPath(); ctx.moveTo(360,0); ctx.lineTo(360,400); ctx.stroke()

      // Route glow
      ctx.save()
      ctx.shadowColor = '#1A73E8'; ctx.shadowBlur = 12
      ctx.strokeStyle = '#1A73E8'; ctx.lineWidth = 6; ctx.globalAlpha = 0.9
      ctx.lineCap = 'round'
      ctx.beginPath()
      route.forEach(([x,y], i) => i === 0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y))
      ctx.stroke()
      ctx.restore()

      // Report markers
      const markers = [
        { x: 420, y: 175, color: '#FF3B30' },
        { x: 140, y: 300, color: '#007AFF' },
        { x: 310, y: 240, color: '#FF9500' },
      ]
      markers.forEach(m => {
        const pulse = Math.sin(t * 0.06) * 0.5 + 0.5
        ctx.beginPath()
        ctx.arc(m.x, m.y, 9 + pulse*4, 0, Math.PI*2)
        ctx.fillStyle = m.color; ctx.globalAlpha = 0.2
        ctx.fill()
        ctx.beginPath()
        ctx.arc(m.x, m.y, 9, 0, Math.PI*2)
        ctx.fillStyle = m.color; ctx.globalAlpha = 1; ctx.fill()
        ctx.strokeStyle = 'white'; ctx.lineWidth = 2
        ctx.stroke()
      })

      // Moving car along route
      const totalPoints = route.length - 1
      const progress = (t * 0.008) % totalPoints
      const segIdx = Math.floor(progress)
      const segT = progress - segIdx
      const from = route[Math.min(segIdx, totalPoints - 1)]
      const to = route[Math.min(segIdx + 1, totalPoints)]
      const carX = from[0] + (to[0] - from[0]) * segT
      const carY = from[1] + (to[1] - from[1]) * segT

      // Car pulse
      const carPulse = Math.sin(t * 0.1) * 0.3 + 0.7
      ctx.save()
      ctx.shadowColor = '#1A73E8'; ctx.shadowBlur = 20
      ctx.beginPath(); ctx.arc(carX, carY, 16, 0, Math.PI*2)
      ctx.fillStyle = '#1A73E8'; ctx.globalAlpha = 0.2 * carPulse; ctx.fill()
      ctx.beginPath(); ctx.arc(carX, carY, 14, 0, Math.PI*2)
      ctx.fillStyle = '#1A73E8'; ctx.globalAlpha = 1; ctx.fill()
      ctx.shadowBlur = 0
      ctx.beginPath(); ctx.arc(carX, carY, 8, 0, Math.PI*2)
      ctx.fillStyle = 'white'; ctx.fill()
      ctx.restore()

      // Destination
      ctx.save()
      ctx.fillStyle = '#1A73E8'
      ctx.beginPath()
      ctx.arc(660, 145, 12, 0, Math.PI*2)
      ctx.fill()
      ctx.fillStyle = 'white'
      ctx.beginPath()
      ctx.arc(660, 145, 5, 0, Math.PI*2)
      ctx.fill()
      ctx.restore()

      t++
      animRef.current = requestAnimationFrame(drawMap)
    }

    animRef.current = requestAnimationFrame(drawMap)
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current) }
  }, [])

  return (
    <section style={{
      background: '#F5F1E8',
      padding: '100px 0',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 48,
          alignItems: 'center',
        }}>
          {/* Left: text */}
          <div>
            <p style={{
              fontSize: 11, fontWeight: 600, color: '#1A73E8',
              fontFamily: 'Fragment Mono,monospace', letterSpacing: 3,
              textTransform: 'uppercase', margin: '0 0 16px',
            }}>ДЕМО</p>
            <h2 style={{
              fontFamily: 'Syne,sans-serif', fontWeight: 800,
              fontSize: 'clamp(36px, 4vw, 56px)',
              color: '#101828', letterSpacing: -2,
              lineHeight: 0.95, margin: '0 0 24px',
            }}>
              Живая карта
              <br />
              <span style={{ color: '#8A8A8A' }}>в действии</span>
            </h2>
            <p style={{
              fontSize: 15, color: '#6b7280',
              fontFamily: 'Inter,sans-serif', lineHeight: 1.7,
              maxWidth: 400, margin: '0 0 32px',
            }}>
              MapLibre GL рендерит Voyager тайлы в 60 FPS.
              Маршруты строятся через OSRM, геокодинг через Nominatim.
              Всё работает прямо в браузере.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: '●', color: '#FF3B30', text: 'Маркеры репортов обновляются мгновенно' },
                { icon: '●', color: '#1A73E8', text: 'Маршрут с анимированным курсором' },
                { icon: '●', color: '#34d399', text: 'GPS фильтрация accuracy > 35м' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ color: item.color, fontSize: 8, marginTop: 5 }}>{item.icon}</span>
                  <span style={{ fontSize: 14, color: '#6b7280', fontFamily: 'Inter,sans-serif', lineHeight: 1.5 }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 36 }}>
              <a href="/map" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#101828', color: 'white',
                padding: '12px 24px', borderRadius: 20,
                fontSize: 14, fontWeight: 700,
                textDecoration: 'none', fontFamily: 'Inter,sans-serif',
              }}>
                Открыть полную карту
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </a>
            </div>
          </div>

          {/* Right: canvas */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 20, overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
              border: '1px solid rgba(0,0,0,0.06)',
            }}>
              <canvas
                ref={canvasRef}
                width={720}
                height={400}
                style={{ display: 'block', width: '100%', height: 'auto' }}
              />
            </div>

            {/* Floating badge */}
            <div style={{
              position: 'absolute', top: 16, left: 16,
              background: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(12px)',
              borderRadius: 12, padding: '6px 12px',
              display: 'flex', alignItems: 'center', gap: 6,
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#34d399', animation: 'pulseRing 2s ease infinite' }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: '#101828', fontFamily: 'Fragment Mono,monospace' }}>
                АНИМАЦИЯ · 60 FPS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
