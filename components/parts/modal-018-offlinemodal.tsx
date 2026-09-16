'use client'
import React from 'react'

interface OfflineModalProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function OfflineModal({ children, style, onClick, className }: OfflineModalProps) {
  return (
    <div
      className={className}
      data-component='OfflineModal'
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

export default OfflineModal