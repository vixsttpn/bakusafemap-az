'use client'
import React from 'react'

interface FABProps {
  onClick?: () => void
  variant?: 'white' | 'primary' | 'danger' | 'glass'
  children: React.ReactNode
  label?: string
  active?: boolean
  className?: string
}

export function FAB({ onClick, variant = 'white', children, label, active, className = '' }: FABProps) {
  const base = 'fab focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2'
  const variants: Record<string, string> = {
    white: 'bg-white shadow-soft border border-gray-100',
    glass: 'glass shadow-glass',
    primary: 'bg-primary text-white shadow-glow-blue',
    danger: 'bg-danger text-white shadow-glow-red',
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${active ? 'ring-2 ring-primary ring-offset-1' : ''} ${className}`}
      onClick={onClick}
      aria-label={label}
      title={label}
    >
      {children}
    </button>
  )
}

export function FABZoomIn({ onClick }: { onClick: () => void }) {
  return (
    <FAB onClick={onClick} label="Приблизить">
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" stroke="#101828">
        <path d="M12 5v14M5 12h14" />
      </svg>
    </FAB>
  )
}

export function FABZoomOut({ onClick }: { onClick: () => void }) {
  return (
    <FAB onClick={onClick} label="Отдалить">
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" stroke="#101828">
        <path d="M5 12h14" />
      </svg>
    </FAB>
  )
}

export function FABLocate({ onClick, active }: { onClick: () => void; active?: boolean }) {
  return (
    <FAB onClick={onClick} label="Моя позиция" active={active}>
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" stroke={active ? '#1A73E8' : '#101828'}>
        <circle cx="12" cy="12" r="3" fill={active ? '#1A73E8' : 'none'} />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        <circle cx="12" cy="12" r="8" />
      </svg>
    </FAB>
  )
}

export function FABReport({ onClick }: { onClick: () => void }) {
  return (
    <FAB onClick={onClick} variant="danger" label="Добавить репорт">
      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" stroke="white">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        <path d="M12 9v4M12 17h.01" />
      </svg>
    </FAB>
  )
}

export function FABVoice({ onClick, active }: { onClick: () => void; active?: boolean }) {
  return (
    <FAB onClick={onClick} variant={active ? 'primary' : 'white'} label="Голосовые инструкции" active={active}>
      {active ? (
        <div style={{ display: 'flex', gap: 3, alignItems: 'center', height: 20 }}>
          {[1,2,3,4].map(i => (
            <div key={i} className="wave-bar" style={{
              width: 3,
              height: 14,
              background: 'white',
              borderRadius: 2,
              transformOrigin: 'bottom',
              animationDelay: `${(i-1)*0.12}s`
            }} />
          ))}
        </div>
      ) : (
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" stroke="#101828">
          <rect x="9" y="2" width="6" height="11" rx="3" />
          <path d="M5 10a7 7 0 0014 0M12 19v3M9 22h6" />
        </svg>
      )}
    </FAB>
  )
}
