'use client'
import React from 'react'

interface RadioButtonProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function RadioButton({ children, style, onClick, className }: RadioButtonProps) {
  return (
    <div
      className={className}
      data-component='RadioButton'
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

export default RadioButton