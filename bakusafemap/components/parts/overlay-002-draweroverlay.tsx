'use client'
import React from 'react'

interface DrawerOverlayProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function DrawerOverlay({ children, style, onClick, className }: DrawerOverlayProps) {
  return (
    <div
      className={className}
      data-component='DrawerOverlay'
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

export default DrawerOverlay