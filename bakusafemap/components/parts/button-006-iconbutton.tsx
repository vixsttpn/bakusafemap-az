'use client'
import React from 'react'

interface IconButtonProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function IconButton({ children, style, onClick, className }: IconButtonProps) {
  return (
    <div
      className={className}
      data-component='IconButton'
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

export default IconButton