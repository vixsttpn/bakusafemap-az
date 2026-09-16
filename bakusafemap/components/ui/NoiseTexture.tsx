'use client'
import React from 'react'

export function NoiseTexture({ opacity = 0.035 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '128px 128px',
        mixBlendMode: 'overlay',
      }}
    />
  )
}

export function GrainOverlay({ strength = 0.04 }: { strength?: number }) {
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        opacity: strength,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23grain)' opacity='1'/%3E%3C/svg%3E")`,
      }}
    />
  )
}

/* CSS animated video BG replacement */
export function VideoBackground({
  variant = 'dark',
  children,
}: {
  variant?: 'dark' | 'beige' | 'mint'
  children?: React.ReactNode
}) {
  const gradients: Record<string, string> = {
    dark: `
      radial-gradient(ellipse 70% 60% at 15% 25%, rgba(26,115,232,0.18) 0%, transparent 55%),
      radial-gradient(ellipse 55% 50% at 85% 75%, rgba(255,107,0,0.10) 0%, transparent 55%),
      radial-gradient(ellipse 60% 60% at 50% 50%, rgba(232,255,89,0.04) 0%, transparent 60%),
      radial-gradient(ellipse 100% 100% at 50% 50%, #0a0a0a 40%, #0d0d0d 100%)
    `,
    beige: `
      radial-gradient(ellipse 70% 60% at 20% 30%, rgba(26,115,232,0.08) 0%, transparent 55%),
      radial-gradient(ellipse 60% 50% at 80% 70%, rgba(255,107,0,0.06) 0%, transparent 55%),
      #F5F1E8
    `,
    mint: `
      radial-gradient(ellipse 70% 70% at 30% 40%, rgba(26,115,232,0.1) 0%, transparent 55%),
      #D9DFCC
    `,
  }

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0,
          background: gradients[variant],
          backgroundSize: '200% 200%',
          animation: 'gradientShift 12s ease infinite, videoDrift 18s ease-in-out infinite',
          transform: 'scale(1.05)',
        }}
      />
      <NoiseTexture opacity={variant === 'dark' ? 0.04 : 0.02} />
      {children}
    </div>
  )
}

/* Vignette overlay */
export function Vignette({ intensity = 0.4 }: { intensity?: number }) {
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
        background: `radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,${intensity}) 100%)`,
      }}
    />
  )
}
