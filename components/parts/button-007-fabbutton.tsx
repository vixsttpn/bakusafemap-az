'use client'
import React from 'react'

interface FABButtonProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function FABButton({ children, style, onClick, className }: FABButtonProps) {
  return (
    <div
      className={className}
      data-component='FABButton'
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

export default FABButton