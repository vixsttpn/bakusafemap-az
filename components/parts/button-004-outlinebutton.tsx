'use client'
import React from 'react'

interface OutlineButtonProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function OutlineButton({ children, style, onClick, className }: OutlineButtonProps) {
  return (
    <div
      className={className}
      data-component='OutlineButton'
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

export default OutlineButton