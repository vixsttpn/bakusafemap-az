'use client'
import React from 'react'

interface UpdateToastProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function UpdateToast({ children, style, onClick, className }: UpdateToastProps) {
  return (
    <div
      className={className}
      data-component='UpdateToast'
      data-category='toast'
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

export default UpdateToast