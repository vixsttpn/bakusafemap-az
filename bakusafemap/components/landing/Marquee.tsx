'use client'
import React from 'react'

interface MarqueeProps {
  items: string[]
  speed?: number
  separator?: string
  color?: string
  accentColor?: string
  dark?: boolean
  fontSize?: number
}

export function Marquee({
  items,
  speed = 20,
  separator = '·',
  color,
  accentColor,
  dark = false,
  fontSize = 12,
}: MarqueeProps) {
  const defaultColor = dark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.35)'
  const defaultAccent = dark ? '#1A73E8' : '#1A73E8'

  // Duplicate for seamless loop
  const doubled = [...items, ...items]

  return (
    <div style={{
      overflow: 'hidden',
      borderTop: dark ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.06)',
      borderBottom: dark ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.06)',
      padding: '13px 0',
      background: dark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.01)',
      userSelect: 'none',
    }}>
      <div
        className="marquee-inner"
        style={{
          display: 'flex',
          gap: 40,
          whiteSpace: 'nowrap',
          width: 'max-content',
          animationDuration: `${speed}s`,
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontSize,
              fontWeight: 600,
              letterSpacing: 2,
              color: i % 3 === 1 ? (accentColor || defaultAccent) : (color || defaultColor),
              fontFamily: 'Fragment Mono,monospace',
              textTransform: 'uppercase',
            }}
          >
            {item} {separator}
          </span>
        ))}
      </div>
    </div>
  )
}
