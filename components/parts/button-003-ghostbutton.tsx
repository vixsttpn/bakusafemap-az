'use client'
import React from 'react'

interface GhostButtonProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function GhostButton({ children, style, onClick, className }: GhostButtonProps) {
  return (
    <div
      className={className}
      data-component='GhostButton'
      data-category='button'
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

export default GhostButton