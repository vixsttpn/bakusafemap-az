'use client'
import React from 'react'

interface StarburstProps {
  size?: number
  color?: string
  spikes?: number
  className?: string
  style?: React.CSSProperties
  spin?: boolean
}

export function Starburst({ size = 120, color = '#FF6A00', spikes = 15, className, style, spin = true }: StarburstProps) {
  // Generate n-pointed starburst polygon
  const pts: string[] = []
  const outerR = size / 2
  const innerR = size * 0.34

  for (let i = 0; i < spikes * 2; i++) {
    const angle = (i * Math.PI) / spikes - Math.PI / 2
    const r = i % 2 === 0 ? outerR : innerR
    pts.push(`${(outerR + r * Math.cos(angle)).toFixed(2)},${(outerR + r * Math.sin(angle)).toFixed(2)}`)
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={`${spin ? 'starburst-spin' : ''} ${className || ''}`}
      style={style}
      aria-hidden
    >
      <polygon points={pts.join(' ')} fill={color} />
    </svg>
  )
}

/* Badge with pulsing dot */
export function LiveBadge({ text = 'LIVE', color = '#FF3B30' }: { text?: string; color?: string }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: `${color}18`,
      border: `1px solid ${color}30`,
      borderRadius: 20, padding: '4px 12px',
    }}>
      <div style={{ position: 'relative', width: 8, height: 8 }}>
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          background: color, opacity: 0.3,
          animation: 'pulseRing 1.5s ease infinite',
        }} />
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: color, position: 'absolute' }} />
      </div>
      <span style={{
        fontSize: 11, fontWeight: 600,
        color: color === '#FF3B30' ? '#ff6b6b' : color,
        fontFamily: 'Fragment Mono,monospace', letterSpacing: 1,
      }}>{text}</span>
    </div>
  )
}

/* Version badge */
export function VersionBadge({ version = 'v8', subtitle = 'WAZE-LIKE BAKU' }: { version?: string; subtitle?: string }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      background: 'rgba(26,115,232,0.1)',
      border: '1px solid rgba(26,115,232,0.25)',
      borderRadius: 20, padding: '5px 14px',
    }}>
      <LiveBadge text="LIVE" color="#FF3B30" />
      <span style={{
        width: 1, height: 12,
        background: 'rgba(255,255,255,0.15)',
        display: 'inline-block',
      }} />
      <span style={{
        fontSize: 11, fontWeight: 600,
        color: 'rgba(255,255,255,0.6)',
        fontFamily: 'Fragment Mono,monospace',
      }}>
        {version} · {subtitle}
      </span>
    </div>
  )
}
