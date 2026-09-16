'use client'
import React from 'react'

interface PhoneInputProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function PhoneInput({ children, style, onClick, className }: PhoneInputProps) {
  return (
    <div
      className={className}
      data-component='PhoneInput'
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

export default PhoneInput