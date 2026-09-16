'use client'
import React from 'react'

interface EventCardProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function EventCard({ children, style, onClick, className }: EventCardProps) {
  return (
    <div
      className={className}
      data-component='EventCard'
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

export default EventCard