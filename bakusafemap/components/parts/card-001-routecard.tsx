'use client'
import React from 'react'

interface RouteCardProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function RouteCard({ children, style, onClick, className }: RouteCardProps) {
  return (
    <div
      className={className}
      data-component='RouteCard'
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

export default RouteCard