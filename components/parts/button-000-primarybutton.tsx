'use client'
import React from 'react'

interface PrimaryButtonProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function PrimaryButton({ children, style, onClick, className }: PrimaryButtonProps) {
  return (
    <div
      className={className}
      data-component='PrimaryButton'
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

export default PrimaryButton