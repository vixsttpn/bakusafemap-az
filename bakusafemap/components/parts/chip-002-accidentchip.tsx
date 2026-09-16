'use client'
import React from 'react'

interface AccidentChipProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function AccidentChip({ children, style, onClick, className }: AccidentChipProps) {
  return (
    <div
      className={className}
      data-component='AccidentChip'
      data-category='chip'
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

export default AccidentChip