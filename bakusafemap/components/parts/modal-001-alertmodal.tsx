'use client'
import React from 'react'

interface AlertModalProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function AlertModal({ children, style, onClick, className }: AlertModalProps) {
  return (
    <div
      className={className}
      data-component='AlertModal'
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

export default AlertModal