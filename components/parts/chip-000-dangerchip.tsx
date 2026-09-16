'use client'
import React from 'react'

interface DangerChipProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function DangerChip({ children, style, onClick, className }: DangerChipProps) {
  return (
    <div
      className={className}
      data-component='DangerChip'
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

export default DangerChip