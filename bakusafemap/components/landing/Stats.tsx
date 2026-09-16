'use client'
import React, { useEffect, useRef, useState } from 'react'

interface Stat {
  value: number
  unit: string
  prefix?: string
  label: string
  color: string
  desc?: string
}

const STATS: Stat[] = [
  { value: 580, unit: '+', label: 'улиц Баку', color: '#1A73E8', desc: 'Полное покрытие всей сети дорог' },
  { value: 60, unit: 'FPS', label: 'MapLibre GL', color: '#E8FF59', desc: 'Плавная анимация без лагов' },
  { value: 35, unit: 'м', prefix: '<', label: 'точность GPS', color: '#FF3B30', desc: 'Фильтрация шума, watchPosition' },
  { value: 12, unit: '', label: 'районов Баку', color: '#34d399', desc: 'Насими, Ясамал, Сабаил и ещё 9' },
  { value: 24, unit: 'ч', label: 'жизнь репортов', color: '#FF9500', desc: 'Автоматическое удаление старых' },
  { value: 4, unit: '', label: 'типа репортов', color: '#8E8E93', desc: 'Danger, Police, Accident, Repair' },
]

function useCountUp(target: number, duration = 1400, active = false) {
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!active) return
    const start = Date.now()
    const tick = () => {
      const p = Math.min(1, (Date.now() - start) / duration)
      const ease = 1 - (1 - p) ** 3
      setVal(Math.round(ease * target))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, target, duration])

  return val
}

function StatCard({ stat, active, index }: { stat: Stat; active: boolean; index: number }) {
  const val = useCountUp(stat.value, 1200 + index * 100, active)

  return (
    <div style={{
      padding: '40px 32px',
      borderRight: index % 3 < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none',
      borderBottom: index < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none',
      transition: 'background 200ms',
      cursor: 'default',
    }}
      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.02)')}
      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
    >
      <div style={{
        fontFamily: 'Syne,sans-serif',
        fontWeight: 800,
        fontSize: 'clamp(40px, 5vw, 64px)',
        color: stat.color,
        letterSpacing: -2,
        lineHeight: 1,
        fontVariantNumeric: 'tabular-nums',
      }}>
        {stat.prefix}{val}{stat.unit}
      </div>
      <div style={{
        marginTop: 8,
        fontSize: 14,
        color: 'rgba(255,255,255,0.55)',
        fontFamily: 'Inter,sans-serif',
        fontWeight: 500,
      }}>
        {stat.label}
      </div>
      {stat.desc && (
        <div style={{
          marginTop: 6,
          fontSize: 11,
          color: 'rgba(255,255,255,0.25)',
          fontFamily: 'Inter,sans-serif',
          lineHeight: 1.5,
        }}>
          {stat.desc}
        </div>
      )}
    </div>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => { if (entries[0].isIntersecting && !active) setActive(true) },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [active])

  return (
    <section style={{
      padding: '100px 0',
      background: '#0A0A0A',
      borderTop: '1px solid rgba(255,255,255,0.04)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ marginBottom: 60 }}>
          <p style={{
            fontSize: 11, fontWeight: 600, color: '#1A73E8',
            fontFamily: 'Fragment Mono,monospace', letterSpacing: 3,
            textTransform: 'uppercase', margin: '0 0 16px',
          }}>ЦИФРЫ</p>
          <h2 style={{
            fontFamily: 'Syne,sans-serif', fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 60px)',
            color: 'white', letterSpacing: -2,
            lineHeight: 1, margin: 0,
          }}>
            Данные о системе
          </h2>
        </div>

        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 20,
            overflow: 'hidden',
          }}
        >
          {STATS.map((s, i) => <StatCard key={i} stat={s} active={active} index={i} />)}
        </div>
      </div>
    </section>
  )
}
