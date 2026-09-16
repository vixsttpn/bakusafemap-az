'use client'
import React from 'react'

interface PendingBadgeProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function PendingBadge({ children, style, onClick, className }: PendingBadgeProps) {
  return (
    <div
      className={className}
      data-component='PendingBadge'
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

export default PendingBadge