'use client'
import React from 'react'

interface TextInputProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function TextInput({ children, style, onClick, className }: TextInputProps) {
  return (
    <div
      className={className}
      data-component='TextInput'
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

export default TextInput