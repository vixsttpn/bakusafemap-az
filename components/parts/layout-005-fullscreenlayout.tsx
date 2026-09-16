'use client'
import React from 'react'

interface FullscreenLayoutProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function FullscreenLayout({ children, style, onClick, className }: FullscreenLayoutProps) {
  return (
    <div
      className={className}
      data-component='FullscreenLayout'
      data-category='layout'
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

export default FullscreenLayout