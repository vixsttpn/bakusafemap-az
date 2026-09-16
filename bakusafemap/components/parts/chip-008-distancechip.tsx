'use client'
import React from 'react'

interface DistanceChipProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function DistanceChip({ children, style, onClick, className }: DistanceChipProps) {
  return (
    <div
      className={className}
      data-component='DistanceChip'
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

export default DistanceChip