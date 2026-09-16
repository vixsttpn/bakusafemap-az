'use client'
import React from 'react'

interface NumberInputProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function NumberInput({ children, style, onClick, className }: NumberInputProps) {
  return (
    <div
      className={className}
      data-component='NumberInput'
      data-category='input'
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

export default NumberInput