'use client'
import React from 'react'

interface LiveChipProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function LiveChip({ children, style, onClick, className }: LiveChipProps) {
  return (
    <div
      className={className}
      data-component='LiveChip'
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

export default LiveChip