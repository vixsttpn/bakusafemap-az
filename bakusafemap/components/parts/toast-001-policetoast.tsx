'use client'
import React from 'react'

interface PoliceToastProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function PoliceToast({ children, style, onClick, className }: PoliceToastProps) {
  return (
    <div
      className={className}
      data-component='PoliceToast'
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

export default PoliceToast