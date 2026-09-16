'use client'
import React from 'react'

interface PopoverOverlayProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function PopoverOverlay({ children, style, onClick, className }: PopoverOverlayProps) {
  return (
    <div
      className={className}
      data-component='PopoverOverlay'
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

export default PopoverOverlay