'use client'
import React from 'react'

interface RouteChipProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function RouteChip({ children, style, onClick, className }: RouteChipProps) {
  return (
    <div
      className={className}
      data-component='RouteChip'
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

export default RouteChip