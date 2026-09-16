'use client'
import React from 'react'

interface BetaBadgeProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function BetaBadge({ children, style, onClick, className }: BetaBadgeProps) {
  return (
    <div
      className={className}
      data-component='BetaBadge'
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

export default BetaBadge