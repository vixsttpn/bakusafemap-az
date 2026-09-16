'use client'
import React from 'react'

interface PermissionModalProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function PermissionModal({ children, style, onClick, className }: PermissionModalProps) {
  return (
    <div
      className={className}
      data-component='PermissionModal'
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

export default PermissionModal