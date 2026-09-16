'use client'
import React from 'react'

interface RepairToastProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function RepairToast({ children, style, onClick, className }: RepairToastProps) {
  return (
    <div
      className={className}
      data-component='RepairToast'
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

export default RepairToast