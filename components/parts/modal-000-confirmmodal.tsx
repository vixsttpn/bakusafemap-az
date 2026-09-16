'use client'
import React from 'react'

interface ConfirmModalProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function ConfirmModal({ children, style, onClick, className }: ConfirmModalProps) {
  return (
    <div
      className={className}
      data-component='ConfirmModal'
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

export default ConfirmModal