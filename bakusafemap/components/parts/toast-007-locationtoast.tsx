'use client'
import React from 'react'

interface LocationToastProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function LocationToast({ children, style, onClick, className }: LocationToastProps) {
  return (
    <div
      className={className}
      data-component='LocationToast'
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

export default LocationToast