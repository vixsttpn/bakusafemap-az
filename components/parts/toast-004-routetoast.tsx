'use client'
import React from 'react'

interface RouteToastProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function RouteToast({ children, style, onClick, className }: RouteToastProps) {
  return (
    <div
      className={className}
      data-component='RouteToast'
      data-category='toast'
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

export default RouteToast