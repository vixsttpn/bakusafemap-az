'use client'
import React from 'react'

interface CenteredLayoutProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function CenteredLayout({ children, style, onClick, className }: CenteredLayoutProps) {
  return (
    <div
      className={className}
      data-component='CenteredLayout'
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

export default CenteredLayout