'use client'
import React from 'react'

interface MapOverlayProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function MapOverlay({ children, style, onClick, className }: MapOverlayProps) {
  return (
    <div
      className={className}
      data-component='MapOverlay'
      data-category='overlay'
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

export default MapOverlay