'use client'
import React from 'react'

interface ContextMenuOverlayProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function ContextMenuOverlay({ children, style, onClick, className }: ContextMenuOverlayProps) {
  return (
    <div
      className={className}
      data-component='ContextMenuOverlay'
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

export default ContextMenuOverlay