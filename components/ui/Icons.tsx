import React from 'react'

const iconProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export const IconSearch = ({ color = '#8A8A8A', size = 24 }: { color?: string; size?: number }) => (
  <svg {...iconProps} width={size} height={size} stroke={color}>
    <circle cx="10.5" cy="10.5" r="6" />
    <path d="M15.5 15.5L20 20" />
  </svg>
)

export const IconLocate = ({ color = '#101828', size = 24 }: { color?: string; size?: number }) => (
  <svg {...iconProps} width={size} height={size} stroke={color}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    <circle cx="12" cy="12" r="9" strokeDasharray="2 4" />
  </svg>
)

export const IconLocateActive = ({ size = 24 }: { size?: number }) => (
  <svg {...iconProps} width={size} height={size} stroke="#1A73E8">
    <circle cx="12" cy="12" r="3" fill="#1A73E8" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    <circle cx="12" cy="12" r="8" />
  </svg>
)

export const IconPlus = ({ color = '#101828', size = 24 }: { color?: string; size?: number }) => (
  <svg {...iconProps} width={size} height={size} stroke={color}>
    <path d="M12 5v14M5 12h14" />
  </svg>
)

export const IconMinus = ({ color = '#101828', size = 24 }: { color?: string; size?: number }) => (
  <svg {...iconProps} width={size} height={size} stroke={color}>
    <path d="M5 12h14" />
  </svg>
)

export const IconVoice = ({ active = false, size = 24 }: { active?: boolean; size?: number }) => (
  <svg {...iconProps} width={size} height={size} stroke={active ? '#1A73E8' : '#101828'}>
    <rect x="9" y="2" width="6" height="11" rx="3" />
    <path d="M5 10a7 7 0 0014 0M12 19v3M9 22h6" />
  </svg>
)

export const IconDanger = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" stroke="#FF3B30">
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    <path d="M12 9v4M12 17h.01" />
  </svg>
)

export const IconPolice = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" stroke="#007AFF">
    <path d="M12 2L8 6H4l1 4-3 2 3 2-1 4h4l4 4 4-4h4l-1-4 3-2-3-2 1-4h-4l-4-4z" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

export const IconAccident = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" stroke="#FF9500">
    <rect x="2" y="7" width="20" height="10" rx="2" />
    <path d="M7 7l3-4h4l3 4" />
    <circle cx="7" cy="15" r="1.5" />
    <circle cx="17" cy="15" r="1.5" />
    <path d="M2 11h20" />
  </svg>
)

export const IconRepair = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" stroke="#8E8E93">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
  </svg>
)

export const IconNavigation = ({ color = '#1A73E8', size = 24 }: { color?: string; size?: number }) => (
  <svg {...iconProps} width={size} height={size} stroke={color}>
    <path d="M12 2L4 22l8-4 8 4-8-20z" />
  </svg>
)

export const IconCar = ({ color = '#101828', size = 24 }: { color?: string; size?: number }) => (
  <svg {...iconProps} width={size} height={size} stroke={color}>
    <rect x="2" y="8" width="20" height="10" rx="2" />
    <path d="M6 8l3-5h6l3 5" />
    <circle cx="7" cy="16" r="2" />
    <circle cx="17" cy="16" r="2" />
  </svg>
)

export const IconPin = ({ color = '#1A73E8', size = 24 }: { color?: string; size?: number }) => (
  <svg {...iconProps} width={size} height={size} stroke={color}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

export const IconShield = ({ color = '#1A73E8', size = 24 }: { color?: string; size?: number }) => (
  <svg {...iconProps} width={size} height={size} stroke={color}>
    <path d="M12 2l8 3v6c0 5-4 9-8 11C8 20 4 16 4 11V5l8-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)

export const IconClose = ({ color = '#101828', size = 24 }: { color?: string; size?: number }) => (
  <svg {...iconProps} width={size} height={size} stroke={color}>
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
)

export const IconArrow = ({ color = '#101828', size = 24, dir = 'right' }: { color?: string; size?: number; dir?: 'right' | 'left' | 'up' | 'down' }) => {
  const rotate = { right: 0, down: 90, left: 180, up: 270 }
  return (
    <svg {...iconProps} width={size} height={size} stroke={color} style={{ transform: `rotate(${rotate[dir]}deg)` }}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export const IconStop = ({ color = '#101828', size = 24 }: { color?: string; size?: number }) => (
  <svg {...iconProps} width={size} height={size} stroke={color}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 9h6v6H9z" fill={color} />
  </svg>
)

export const IconSpeed = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" stroke="#1A73E8">
    <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" />
    <path d="M12 8v4l3 3" />
    <path d="M12 6v2" />
    <path d="M18 12h2M4 12h2" />
  </svg>
)

export const IconStar = ({ color = '#FF6A00', size = 24, filled = false }: { color?: string; size?: number; filled?: boolean }) => (
  <svg {...iconProps} width={size} height={size} stroke={color} fill={filled ? color : 'none'}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

export const Starburst = ({ size = 120 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" className="starburst-spin">
    <polygon
      points="60,2 64,44 80,8 70,48 94,22 72,54 104,40 74,62 108,68 76,72 102,86 72,82 88,104 66,88 72,116 60,94 48,116 54,88 32,104 48,82 18,86 44,72 12,68 46,62 16,40 48,54 26,22 50,48 40,8 56,44"
      fill="#FF6A00"
      stroke="none"
    />
  </svg>
)

export const IconMenu = ({ color = '#101828', size = 24 }: { color?: string; size?: number }) => (
  <svg {...iconProps} width={size} height={size} stroke={color}>
    <path d="M3 12h18M3 6h18M3 18h18" />
  </svg>
)

export const IconCheck = ({ color = '#1A73E8', size = 24 }: { color?: string; size?: number }) => (
  <svg {...iconProps} width={size} height={size} stroke={color}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

export const IconInfo = ({ color = '#8A8A8A', size = 24 }: { color?: string; size?: number }) => (
  <svg {...iconProps} width={size} height={size} stroke={color}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4M12 16h.01" />
  </svg>
)

export const IconRoute = ({ color = '#1A73E8', size = 24 }: { color?: string; size?: number }) => (
  <svg {...iconProps} width={size} height={size} stroke={color}>
    <path d="M3 12C3 6 6 3 12 3s9 3 9 9-3 9-9 9" />
    <path d="M12 3v18M3 12h18" strokeDasharray="4 2" />
  </svg>
)

export const IconLive = ({ size = 8 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 8 8">
    <circle cx="4" cy="4" r="4" fill="#FF3B30" />
  </svg>
)
