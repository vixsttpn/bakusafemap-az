'use client'
import React from 'react'

interface LiveBadgeProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function LiveBadge({ children, style, onClick, className }: LiveBadgeProps) {
  return (
    <div
      className={className}
      data-component='LiveBadge'
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

export default LiveBadge