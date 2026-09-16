'use client'
import React from 'react'

interface AccidentToastProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function AccidentToast({ children, style, onClick, className }: AccidentToastProps) {
  return (
    <div
      className={className}
      data-component='AccidentToast'
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

export default AccidentToast