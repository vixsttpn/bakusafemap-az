'use client'
import React from 'react'

interface DangerToastProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function DangerToast({ children, style, onClick, className }: DangerToastProps) {
  return (
    <div
      className={className}
      data-component='DangerToast'
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

export default DangerToast