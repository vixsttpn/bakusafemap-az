'use client'
import React from 'react'

interface TimeInputProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function TimeInput({ children, style, onClick, className }: TimeInputProps) {
  return (
    <div
      className={className}
      data-component='TimeInput'
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

export default TimeInput