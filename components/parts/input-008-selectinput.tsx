'use client'
import React from 'react'

interface SelectInputProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function SelectInput({ children, style, onClick, className }: SelectInputProps) {
  return (
    <div
      className={className}
      data-component='SelectInput'
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

export default SelectInput