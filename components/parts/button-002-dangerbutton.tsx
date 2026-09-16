'use client'
import React from 'react'

interface DangerButtonProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function DangerButton({ children, style, onClick, className }: DangerButtonProps) {
  return (
    <div
      className={className}
      data-component='DangerButton'
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

export default DangerButton