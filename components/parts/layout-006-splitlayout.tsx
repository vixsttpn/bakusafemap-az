'use client'
import React from 'react'

interface SplitLayoutProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function SplitLayout({ children, style, onClick, className }: SplitLayoutProps) {
  return (
    <div
      className={className}
      data-component='SplitLayout'
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

export default SplitLayout