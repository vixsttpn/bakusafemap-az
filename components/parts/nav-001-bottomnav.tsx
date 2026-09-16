'use client'
import React from 'react'

interface BottomNavProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function BottomNav({ children, style, onClick, className }: BottomNavProps) {
  return (
    <div
      className={className}
      data-component='BottomNav'
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

export default BottomNav