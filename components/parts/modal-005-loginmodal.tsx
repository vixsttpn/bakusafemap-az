'use client'
import React from 'react'

interface LoginModalProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function LoginModal({ children, style, onClick, className }: LoginModalProps) {
  return (
    <div
      className={className}
      data-component='LoginModal'
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

export default LoginModal