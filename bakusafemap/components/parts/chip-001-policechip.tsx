'use client'
import React from 'react'

interface PoliceChipProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function PoliceChip({ children, style, onClick, className }: PoliceChipProps) {
  return (
    <div
      className={className}
      data-component='PoliceChip'
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

export default PoliceChip