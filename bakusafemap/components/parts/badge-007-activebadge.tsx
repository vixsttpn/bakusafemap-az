'use client'
import React from 'react'

interface ActiveBadgeProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function ActiveBadge({ children, style, onClick, className }: ActiveBadgeProps) {
  return (
    <div
      className={className}
      data-component='ActiveBadge'
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

export default ActiveBadge