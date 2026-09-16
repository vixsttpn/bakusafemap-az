'use client'
import React from 'react'

interface InactiveBadgeProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function InactiveBadge({ children, style, onClick, className }: InactiveBadgeProps) {
  return (
    <div
      className={className}
      data-component='InactiveBadge'
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

export default InactiveBadge