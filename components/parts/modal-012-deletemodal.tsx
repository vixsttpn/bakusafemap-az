'use client'
import React from 'react'

interface DeleteModalProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function DeleteModal({ children, style, onClick, className }: DeleteModalProps) {
  return (
    <div
      className={className}
      data-component='DeleteModal'
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

export default DeleteModal