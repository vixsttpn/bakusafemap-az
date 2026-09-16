'use client'
import React from 'react'

interface HotBadgeProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function HotBadge({ children, style, onClick, className }: HotBadgeProps) {
  return (
    <div
      className={className}
      data-component='HotBadge'
      data-category='badge'
      onClick={onClick}
      style={{
        cursor: onClick ? 'pointer' : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default HotBadge