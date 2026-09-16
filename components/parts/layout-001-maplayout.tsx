'use client'
import React from 'react'

interface MapLayoutProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function MapLayout({ children, style, onClick, className }: MapLayoutProps) {
  return (
    <div
      className={className}
      data-component='MapLayout'
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

export default MapLayout