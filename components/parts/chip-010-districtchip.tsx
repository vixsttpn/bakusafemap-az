'use client'
import React from 'react'

interface DistrictChipProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function DistrictChip({ children, style, onClick, className }: DistrictChipProps) {
  return (
    <div
      className={className}
      data-component='DistrictChip'
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

export default DistrictChip