'use client'
import React from 'react'

interface UpdateModalProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function UpdateModal({ children, style, onClick, className }: UpdateModalProps) {
  return (
    <div
      className={className}
      data-component='UpdateModal'
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

export default UpdateModal