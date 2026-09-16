'use client'
import React from 'react'

interface LinkButtonProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function LinkButton({ children, style, onClick, className }: LinkButtonProps) {
  return (
    <div
      className={className}
      data-component='LinkButton'
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

export default LinkButton