'use client'
import React from 'react'

interface GridLayoutProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function GridLayout({ children, style, onClick, className }: GridLayoutProps) {
  return (
    <div
      className={className}
      data-component='GridLayout'
      data-category='layout'
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

export default GridLayout