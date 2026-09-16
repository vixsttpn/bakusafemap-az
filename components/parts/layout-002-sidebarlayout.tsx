'use client'
import React from 'react'

interface SidebarLayoutProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function SidebarLayout({ children, style, onClick, className }: SidebarLayoutProps) {
  return (
    <div
      className={className}
      data-component='SidebarLayout'
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

export default SidebarLayout