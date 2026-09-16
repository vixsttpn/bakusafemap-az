'use client'
import React from 'react'

interface NewBadgeProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function NewBadge({ children, style, onClick, className }: NewBadgeProps) {
  return (
    <div
      className={className}
      data-component='NewBadge'
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

export default NewBadge