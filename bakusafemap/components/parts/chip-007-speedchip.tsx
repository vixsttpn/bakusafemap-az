'use client'
import React from 'react'

interface SpeedChipProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function SpeedChip({ children, style, onClick, className }: SpeedChipProps) {
  return (
    <div
      className={className}
      data-component='SpeedChip'
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

export default SpeedChip