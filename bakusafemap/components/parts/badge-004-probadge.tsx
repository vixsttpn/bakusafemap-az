'use client'
import React from 'react'

interface ProBadgeProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function ProBadge({ children, style, onClick, className }: ProBadgeProps) {
  return (
    <div
      className={className}
      data-component='ProBadge'
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

export default ProBadge