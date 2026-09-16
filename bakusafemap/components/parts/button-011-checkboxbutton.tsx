'use client'
import React from 'react'

interface CheckboxButtonProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function CheckboxButton({ children, style, onClick, className }: CheckboxButtonProps) {
  return (
    <div
      className={className}
      data-component='CheckboxButton'
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

export default CheckboxButton