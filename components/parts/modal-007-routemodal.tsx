'use client'
import React from 'react'

interface RouteModalProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function RouteModal({ children, style, onClick, className }: RouteModalProps) {
  return (
    <div
      className={className}
      data-component='RouteModal'
      data-category='modal'
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

export default RouteModal