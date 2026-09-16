'use client'
import React from 'react'

interface SlideOverOverlayProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function SlideOverOverlay({ children, style, onClick, className }: SlideOverOverlayProps) {
  return (
    <div
      className={className}
      data-component='SlideOverOverlay'
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

export default SlideOverOverlay