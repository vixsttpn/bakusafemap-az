'use client'
import React from 'react'

interface TopNavProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function TopNav({ children, style, onClick, className }: TopNavProps) {
  return (
    <div
      className={className}
      data-component='TopNav'
      data-category='nav'
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

export default TopNav