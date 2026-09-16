'use client'
import React from 'react'

interface NasamiChipProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function NasamiChip({ children, style, onClick, className }: NasamiChipProps) {
  return (
    <div
      className={className}
      data-component='NasamiChip'
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

export default NasamiChip