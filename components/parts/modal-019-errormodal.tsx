'use client'
import React from 'react'

interface ErrorModalProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function ErrorModal({ children, style, onClick, className }: ErrorModalProps) {
  return (
    <div
      className={className}
      data-component='ErrorModal'
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

export default ErrorModal