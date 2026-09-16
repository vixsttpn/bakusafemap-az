'use client'
import React from 'react'

interface OfflineToastProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function OfflineToast({ children, style, onClick, className }: OfflineToastProps) {
  return (
    <div
      className={className}
      data-component='OfflineToast'
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

export default OfflineToast