'use client'
import React from 'react'

interface DropdownOverlayProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function DropdownOverlay({ children, style, onClick, className }: DropdownOverlayProps) {
  return (
    <div
      className={className}
      data-component='DropdownOverlay'
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

export default DropdownOverlay