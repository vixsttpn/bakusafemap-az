'use client'
import React from 'react'

interface PlaceCardProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function PlaceCard({ children, style, onClick, className }: PlaceCardProps) {
  return (
    <div
      className={className}
      data-component='PlaceCard'
      data-category='card'
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

export default PlaceCard