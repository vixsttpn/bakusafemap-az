'use client'
import React from 'react'

interface YasamalChipProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function YasamalChip({ children, style, onClick, className }: YasamalChipProps) {
  return (
    <div
      className={className}
      data-component='YasamalChip'
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

export default YasamalChip