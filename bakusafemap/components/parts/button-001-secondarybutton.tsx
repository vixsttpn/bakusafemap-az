'use client'
import React from 'react'

interface SecondaryButtonProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function SecondaryButton({ children, style, onClick, className }: SecondaryButtonProps) {
  return (
    <div
      className={className}
      data-component='SecondaryButton'
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

export default SecondaryButton