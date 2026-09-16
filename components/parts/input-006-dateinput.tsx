'use client'
import React from 'react'

interface DateInputProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function DateInput({ children, style, onClick, className }: DateInputProps) {
  return (
    <div
      className={className}
      data-component='DateInput'
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

export default DateInput