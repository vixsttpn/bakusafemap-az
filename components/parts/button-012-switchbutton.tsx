'use client'
import React from 'react'

interface SwitchButtonProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function SwitchButton({ children, style, onClick, className }: SwitchButtonProps) {
  return (
    <div
      className={className}
      data-component='SwitchButton'
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

export default SwitchButton