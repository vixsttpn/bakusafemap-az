'use client'
import React from 'react'

interface ToggleButtonProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function ToggleButton({ children, style, onClick, className }: ToggleButtonProps) {
  return (
    <div
      className={className}
      data-component='ToggleButton'
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

export default ToggleButton