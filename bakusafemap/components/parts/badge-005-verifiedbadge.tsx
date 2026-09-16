'use client'
import React from 'react'

interface VerifiedBadgeProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function VerifiedBadge({ children, style, onClick, className }: VerifiedBadgeProps) {
  return (
    <div
      className={className}
      data-component='VerifiedBadge'
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

export default VerifiedBadge