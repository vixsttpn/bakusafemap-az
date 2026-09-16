'use client'
import React from 'react'

interface SafetyBadgeProps {
  level: 'safe' | 'caution' | 'danger'
  label?: string
  size?: 'sm' | 'md'
}

export function SafetyBadge({ level, label, size = 'md' }: SafetyBadgeProps) {
  const config = {
    safe: { bg: '#d1fae5', color: '#065f46', dot: '#10b981', text: label || 'Безопасно' },
    caution: { bg: '#fef3c7', color: '#92400e', dot: '#f59e0b', text: label || 'Осторожно' },
    danger: { bg: '#fee2e2', color: '#991b1b', dot: '#FF3B30', text: label || 'Опасность' },
  }
  const c = config[level]
  const padding = size === 'sm' ? '2px 8px' : '4px 12px'
  const fontSize = size === 'sm' ? 10 : 12

  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: c.bg, borderRadius: 20, padding,
    }}>
      <div style={{
        width: 6, height: 6, borderRadius: '50%',
        background: c.dot,
        boxShadow: `0 0 6px ${c.dot}`,
      }} />
      <span style={{
        fontSize, fontWeight: 600, color: c.color,
        fontFamily: 'Fragment Mono,monospace', letterSpacing: 0.5,
      }}>
        {c.text.toUpperCase()}
      </span>
    </div>
  )
}

interface RiskDialProps {
  score: number // 0-100
}

export function RiskDial({ score }: RiskDialProps) {
  const angle = (score / 100) * 180 - 90
  const color = score < 30 ? '#10b981' : score < 70 ? '#f59e0b' : '#FF3B30'

  return (
    <div style={{ position: 'relative', width: 80, height: 44 }}>
      <svg width={80} height={44} viewBox="0 0 80 44">
        {/* Background arc */}
        <path d="M8 40 A32 32 0 0 1 72 40" stroke="#e5e7eb" strokeWidth={6} fill="none" strokeLinecap="round" />
        {/* Score arc */}
        <path
          d="M8 40 A32 32 0 0 1 72 40"
          stroke={color}
          strokeWidth={6}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${(score / 100) * 100.5} 100.5`}
        />
        {/* Needle */}
        <line
          x1="40" y1="40"
          x2={40 + 28 * Math.cos((angle - 90) * Math.PI / 180)}
          y2={40 + 28 * Math.sin((angle - 90) * Math.PI / 180)}
          stroke="#101828" strokeWidth={2} strokeLinecap="round"
        />
        <circle cx="40" cy="40" r="3" fill="#101828" />
      </svg>
      <div style={{
        position: 'absolute', bottom: 0, left: '50%',
        transform: 'translateX(-50%)',
        fontSize: 11, fontWeight: 700, color,
        fontFamily: 'Fragment Mono,monospace',
      }}>
        {score}
      </div>
    </div>
  )
}

interface AlertPulseProps {
  color?: string
  size?: number
}

export function AlertPulse({ color = '#FF3B30', size = 12 }: AlertPulseProps) {
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <div style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        background: color, opacity: 0.3,
        animation: 'pulseRing 2s ease infinite',
      }} />
      <div style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        background: color, opacity: 0.15,
        animation: 'pulseRing 2s ease 0.4s infinite',
      }} />
      <div style={{
        position: 'absolute', inset: '25%', borderRadius: '50%',
        background: color,
      }} />
    </div>
  )
}
