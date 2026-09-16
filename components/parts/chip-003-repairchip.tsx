'use client'
import React from 'react'

interface RepairChipProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function RepairChip({ children, style, onClick, className }: RepairChipProps) {
  return (
    <div
      className={className}
      data-component='RepairChip'
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

export default RepairChip