'use client'
import React, { useEffect, useRef } from 'react'

interface LaptopMockupProps {
  children?: React.ReactNode
  width?: number
  lerp?: number
}

export function LaptopMockup({ children, width = 720, lerp = 0.08 }: LaptopMockupProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const targetRot = useRef({ x: 6, y: 0 })
  const currentRot = useRef({ x: 6, y: 0 })
  const rafId = useRef<number>()

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      targetRot.current.x = 6 + ((e.clientY - cy) / cy) * -4
      targetRot.current.y = ((e.clientX - cx) / cx) * 6
    }
    window.addEventListener('mousemove', onMove)

    const animate = () => {
      currentRot.current.x += (targetRot.current.x - currentRot.current.x) * lerp
      currentRot.current.y += (targetRot.current.y - currentRot.current.y) * lerp
      if (wrapRef.current) {
        wrapRef.current.style.transform = `
          perspective(1400px)
          rotateX(${currentRot.current.x.toFixed(2)}deg)
          rotateY(${currentRot.current.y.toFixed(2)}deg)
        `
      }
      rafId.current = requestAnimationFrame(animate)
    }
    rafId.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [lerp])

  return (
    <div
      style={{
        display: 'inline-block',
        animation: 'float 6s ease-in-out infinite',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
    >
      <div ref={wrapRef} style={{ transformStyle: 'preserve-3d', transition: 'none' }}>
        {/* Screen */}
        <div style={{
          width: Math.min(width, window.innerWidth * 0.9),
          background: '#1c1c1e',
          borderRadius: '14px 14px 3px 3px',
          padding: '10px 10px 0',
          boxShadow: `
            0 40px 100px rgba(0,0,0,0.8),
            0 0 0 1px rgba(255,255,255,0.06),
            0 0 60px rgba(26,115,232,0.12)
          `,
        }}>
          {/* Camera notch */}
          <div style={{
            display: 'flex', justifyContent: 'center',
            marginBottom: 6,
          }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#2a2a2c' }} />
          </div>

          {/* Screen content */}
          <div style={{
            borderRadius: '6px 6px 0 0',
            overflow: 'hidden',
            background: '#e8e0d8',
            position: 'relative',
          }}>
            {children || <DefaultMapPreview />}
          </div>
        </div>

        {/* Hinge */}
        <div style={{
          height: 3,
          background: 'linear-gradient(to bottom, #2a2a2c, #1a1a1c)',
          borderRadius: '0 0 1px 1px',
        }} />

        {/* Base */}
        <div style={{
          height: 14,
          background: 'linear-gradient(to bottom, #1c1c1e, #0f0f10)',
          borderRadius: '3px 3px 14px 14px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
        }}>
          <div style={{
            width: '35%', height: 8, background: '#0a0a0b',
            borderRadius: '0 0 8px 8px', margin: '0 auto',
          }} />
        </div>

        {/* Shadow */}
        <div style={{
          height: 20, marginTop: 4,
          background: 'radial-gradient(ellipse 80% 100% at 50% 0%, rgba(26,115,232,0.25) 0%, transparent 70%)',
          filter: 'blur(12px)',
        }} />
      </div>
    </div>
  )
}

function DefaultMapPreview() {
  return (
    <div style={{ height: 400, position: 'relative', background: '#F5F1E8', overflow: 'hidden' }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 720 400" preserveAspectRatio="xMidYMid slice">
        {/* Base beige */}
        <rect width="720" height="400" fill="#F5F1E8" />
        {/* Block fills */}
        <rect x="0" y="0" width="200" height="120" fill="#EDE9E0" />
        <rect x="220" y="0" width="180" height="90" fill="#EDE9E0" />
        <rect x="520" y="100" width="200" height="140" fill="#EDE9E0" />
        <rect x="0" y="240" width="140" height="160" fill="#EDE9E0" />
        <rect x="400" y="260" width="180" height="140" fill="#EDE9E0" />
        {/* Parks */}
        <rect x="60" y="70" width="110" height="80" rx="8" fill="#D9DFCC" opacity="0.85" />
        <rect x="560" y="240" width="130" height="100" rx="8" fill="#C8E6C9" opacity="0.75" />
        <rect x="420" y="50" width="80" height="65" rx="6" fill="#D9DFCC" opacity="0.7" />
        {/* Major road horizontal */}
        <path d="M0 200 Q180 192 360 200 Q540 208 720 200" stroke="#8A8A8A" strokeWidth="20" fill="none" opacity="0.55" />
        <path d="M0 200 Q180 192 360 200 Q540 208 720 200" stroke="#F5F1E8" strokeWidth="13" fill="none" />
        <path d="M0 200 Q180 192 360 200 Q540 208 720 200" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="8 6" fill="none" />
        {/* Major road vertical */}
        <path d="M360 0 L360 400" stroke="#8A8A8A" strokeWidth="14" fill="none" opacity="0.4" />
        <path d="M360 0 L360 400" stroke="#F5F1E8" strokeWidth="8" fill="none" />
        {/* Side streets */}
        <path d="M0 100 L360 100" stroke="#8A8A8A" strokeWidth="7" fill="none" opacity="0.25" />
        <path d="M0 310 L360 310" stroke="#8A8A8A" strokeWidth="7" fill="none" opacity="0.25" />
        <path d="M180 0 L180 200" stroke="#8A8A8A" strokeWidth="7" fill="none" opacity="0.2" />
        <path d="M540 200 L540 400" stroke="#8A8A8A" strokeWidth="7" fill="none" opacity="0.2" />
        {/* ROUTE */}
        <path d="M60 340 Q130 290 220 240 Q310 195 420 175 Q520 158 660 145"
          stroke="#1A73E8" strokeWidth="6" fill="none" strokeLinecap="round"
          style={{ filter: 'drop-shadow(0 0 10px rgba(26,115,232,0.7))' }}
        />
        <path d="M60 340 Q130 290 220 240 Q310 195 420 175 Q520 158 660 145"
          stroke="#1A73E8" strokeWidth="16" fill="none" opacity="0.1" strokeLinecap="round"
        />
        {/* User */}
        <circle cx="220" cy="240" r="16" fill="#1A73E8" />
        <circle cx="220" cy="240" r="10" fill="white" />
        <circle cx="220" cy="240" r="5" fill="#1A73E8" />
        {/* Pulse rings */}
        <circle cx="220" cy="240" r="22" fill="none" stroke="#1A73E8" strokeWidth="2" opacity="0.4">
          <animate attributeName="r" values="16;32" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0" dur="2s" repeatCount="indefinite" />
        </circle>
        {/* Reports */}
        <circle cx="420" cy="175" r="9" fill="#FF3B30" stroke="white" strokeWidth="2.5" />
        <circle cx="140" cy="300" r="9" fill="#007AFF" stroke="white" strokeWidth="2.5" />
        <circle cx="310" cy="240" r="9" fill="#FF9500" stroke="white" strokeWidth="2.5" />
        {/* Destination */}
        <path d="M660 145 C660 131 650 119 637 119 C624 119 614 131 614 145 C614 159 637 170 637 170 C637 170 660 159 660 145z" fill="#1A73E8" />
        <circle cx="637" cy="145" r="6" fill="white" />
        {/* Label: Babak Prospekti */}
        <text x="360" y="190" textAnchor="middle" fontSize="9" fill="#8A8A8A" fontFamily="Inter,sans-serif" fontWeight="600" opacity="0.7">BABAK PROSPEKTİ</text>
      </svg>

      {/* UI overlays */}
      {/* Search bar */}
      <div style={{
        position: 'absolute', top: 10, left: 10, right: 10,
        background: 'rgba(255,255,255,0.94)',
        backdropFilter: 'blur(12px)',
        borderRadius: 18, height: 34,
        display: 'flex', alignItems: 'center',
        padding: '0 10px', gap: 6,
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
      }}>
        <svg width={12} height={12} viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="#8A8A8A" strokeLinecap="round"><circle cx="10" cy="10" r="6"/><path d="M15 15L19 19"/></svg>
        <span style={{ fontSize: 11, color: '#101828', fontFamily: 'Inter,sans-serif', flex: 1, fontWeight: 500 }}>Ичери Шехер, Баку</span>
        <div style={{ background: '#101828', color: 'white', borderRadius: 10, padding: '2px 8px', fontSize: 9, fontWeight: 700 }}>Найти</div>
      </div>

      {/* FAB column */}
      <div style={{ position: 'absolute', right: 10, top: 52, display: 'flex', flexDirection: 'column', gap: 5 }}>
        {['＋','－','◎','！'].map((ic, i) => (
          <div key={i} style={{
            width: 28, height: 28, borderRadius: 7,
            background: i === 2 ? '#1A73E8' : i === 3 ? '#FF3B30' : 'rgba(255,255,255,0.95)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 13, fontWeight: 700, color: i >= 2 ? 'white' : '#101828',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}>{ic}</div>
        ))}
      </div>

      {/* Nav sheet */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'rgba(255,255,255,0.96)',
        backdropFilter: 'blur(12px)',
        borderRadius: '12px 12px 0 0',
        padding: '10px 12px 12px',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.07)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ background: '#1A73E8', borderRadius: 6, padding: '4px 6px' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M12 2L4 22l8-4 8 4-8-20z"/></svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#101828', fontFamily: 'Inter,sans-serif' }}>По Babak prospekti на север</div>
            <div style={{ fontSize: 9, color: '#8A8A8A', fontFamily: 'Fragment Mono,monospace', marginTop: 1 }}>2.4 КМ · 8 МИН</div>
          </div>
          <div style={{ background: '#101828', color: 'white', borderRadius: 7, padding: '4px 8px', fontSize: 9, fontWeight: 700 }}>Стоп</div>
        </div>
      </div>
    </div>
  )
}
