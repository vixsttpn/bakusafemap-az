'use client'
import React from 'react'

interface KhataiChipProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function KhataiChip({ children, style, onClick, className }: KhataiChipProps) {
  return (
    <div
      className={className}
      data-component='KhataiChip'
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

export default KhataiChip