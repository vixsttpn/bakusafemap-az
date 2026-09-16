'use client'
import React from 'react'

interface EmailInputProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function EmailInput({ children, style, onClick, className }: EmailInputProps) {
  return (
    <div
      className={className}
      data-component='EmailInput'
      data-category='input'
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

export default EmailInput