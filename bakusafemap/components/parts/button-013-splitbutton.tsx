'use client'
import React from 'react'

interface SplitButtonProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function SplitButton({ children, style, onClick, className }: SplitButtonProps) {
  return (
    <div
      className={className}
      data-component='SplitButton'
      data-category='button'
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

export default SplitButton