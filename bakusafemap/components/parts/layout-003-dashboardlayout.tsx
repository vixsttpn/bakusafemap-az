'use client'
import React from 'react'

interface DashboardLayoutProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function DashboardLayout({ children, style, onClick, className }: DashboardLayoutProps) {
  return (
    <div
      className={className}
      data-component='DashboardLayout'
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

export default DashboardLayout