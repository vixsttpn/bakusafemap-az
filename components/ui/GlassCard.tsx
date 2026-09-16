'use client'
import React, { useEffect, useRef } from 'react'

/* ── GlassCard ── */
interface GlassCardProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
  hover?: boolean
  dark?: boolean
}

export function GlassCard({ children, style, onClick, hover = true, dark = false }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={ref}
      onClick={onClick}
      style={{
        background: dark ? 'rgba(10,10,10,0.75)' : 'rgba(255,255,255,0.72)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        border: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(255,255,255,0.5)',
        borderRadius: 16,
        boxShadow: dark
          ? '0 8px 32px rgba(0,0,0,0.3)'
          : '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)',
        cursor: onClick ? 'pointer' : undefined,
        transition: hover ? 'transform 150ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 150ms ease' : undefined,
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
      onMouseEnter={hover && ref.current ? () => {
        if (ref.current) {
          ref.current.style.transform = 'translateY(-2px)'
          ref.current.style.boxShadow = dark
            ? '0 16px 48px rgba(0,0,0,0.4)'
            : '0 16px 48px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.5)'
        }
      } : undefined}
      onMouseLeave={hover && ref.current ? () => {
        if (ref.current) {
          ref.current.style.transform = ''
          ref.current.style.boxShadow = dark
            ? '0 8px 32px rgba(0,0,0,0.3)'
            : '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)'
        }
      } : undefined}
    >
      {/* Inner gradient sheen */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '50%',
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)',
        borderRadius: '16px 16px 0 0',
        pointerEvents: 'none',
      }} />
      {children}
    </div>
  )
}

/* ── BottomSheet ── */
interface BottomSheetProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
  maxHeight?: string | number
}

export function BottomSheet({ open, onClose, children, title, maxHeight = '85vh' }: BottomSheetProps) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 50,
        background: 'rgba(0,0,0,0.45)',
        backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'flex-end',
        animation: 'fadeIn 200ms ease',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxHeight,
          background: 'white',
          borderRadius: '24px 24px 0 0',
          padding: '0 0 env(safe-area-inset-bottom)',
          boxShadow: '0 -8px 40px rgba(0,0,0,0.15)',
          animation: 'springIn 0.4s cubic-bezier(0.34,1.56,0.64,1)',
          overflowY: 'auto',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Handle */}
        <div style={{ padding: '12px 0 0', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: 36, height: 4, background: '#e0e0e0',
            borderRadius: 2,
          }} />
        </div>

        {title && (
          <div style={{
            padding: '16px 20px 0',
            fontFamily: 'Syne,sans-serif', fontWeight: 800,
            fontSize: 18, color: '#101828', letterSpacing: -0.5,
          }}>{title}</div>
        )}

        <div style={{ padding: '16px 20px 24px' }}>
          {children}
        </div>
      </div>
    </div>
  )
}

/* ── ObsidianPanel ── */
interface ObsidianPanelProps {
  children: React.ReactNode
  style?: React.CSSProperties
}

export function ObsidianPanel({ children, style }: ObsidianPanelProps) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: 20,
      position: 'relative',
      overflow: 'hidden',
      ...style,
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
      }} />
      {children}
    </div>
  )
}

/* ── MagneticCard ── */
interface MagneticCardProps {
  children: React.ReactNode
  style?: React.CSSProperties
  strength?: number
}

export function MagneticCard({ children, style, strength = 10 }: MagneticCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width * strength
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height * strength
    ref.current.style.transform = `translate(${x}px, ${y}px) scale(1.02)`
  }

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  return (
    <div
      ref={ref}
      style={{
        transition: 'transform 300ms cubic-bezier(0.16,1,0.3,1)',
        ...style,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  )
}

/* ── OryzoButton ── */
interface OryzoButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  variant?: 'white' | 'dark' | 'outline' | 'gradient'
  size?: 'sm' | 'md' | 'lg'
}

export function OryzoButton({ children, onClick, href, variant = 'dark', size = 'md' }: OryzoButtonProps) {
  const padding = { sm: '8px 18px', md: '12px 26px', lg: '16px 36px' }[size]
  const fontSize = { sm: 12, md: 14, lg: 16 }[size]
  const radius = { sm: 16, md: 20, lg: 24 }[size]

  const styles: Record<string, React.CSSProperties> = {
    white: { background: 'white', color: '#101828' },
    dark: { background: '#101828', color: 'white' },
    outline: {
      background: 'transparent',
      color: '#101828',
      border: '1.5px solid rgba(0,0,0,0.15)',
    },
    gradient: {
      background: 'linear-gradient(135deg, #1A73E8, #0052cc)',
      color: 'white',
      boxShadow: '0 4px 20px rgba(26,115,232,0.35)',
    },
  }

  const base: React.CSSProperties = {
    padding,
    borderRadius: radius,
    fontSize,
    fontWeight: 700,
    fontFamily: 'Inter,sans-serif',
    cursor: 'pointer',
    border: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    textDecoration: 'none',
    transition: 'transform 150ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 150ms ease',
    ...styles[variant],
  }

  const handlers = {
    onMouseEnter: (e: React.MouseEvent<any>) => {
      e.currentTarget.style.transform = 'translateY(-1px) scale(1.02)'
    },
    onMouseLeave: (e: React.MouseEvent<any>) => {
      e.currentTarget.style.transform = ''
    },
    onMouseDown: (e: React.MouseEvent<any>) => {
      e.currentTarget.style.transform = 'scale(0.97)'
    },
    onMouseUp: (e: React.MouseEvent<any>) => {
      e.currentTarget.style.transform = ''
    },
  }

  if (href) {
    return <a href={href} style={base} {...handlers}>{children}</a>
  }

  return (
    <button onClick={onClick} style={base} {...handlers}>
      {children}
    </button>
  )
}
