'use client'
import React from 'react'

interface TextareaInputProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function TextareaInput({ children, style, onClick, className }: TextareaInputProps) {
  return (
    <div
      className={className}
      data-component='TextareaInput'
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

export default TextareaInput