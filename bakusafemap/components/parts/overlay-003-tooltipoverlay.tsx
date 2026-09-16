'use client'
import React from 'react'

interface TooltipOverlayProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function TooltipOverlay({ children, style, onClick, className }: TooltipOverlayProps) {
  return (
    <div
      className={className}
      data-component='TooltipOverlay'
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

export default TooltipOverlay