'use client'
import React from 'react'

interface TimeChipProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function TimeChip({ children, style, onClick, className }: TimeChipProps) {
  return (
    <div
      className={className}
      data-component='TimeChip'
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

export default TimeChip