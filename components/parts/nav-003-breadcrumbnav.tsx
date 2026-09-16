'use client'
import React from 'react'

interface BreadcrumbNavProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function BreadcrumbNav({ children, style, onClick, className }: BreadcrumbNavProps) {
  return (
    <div
      className={className}
      data-component='BreadcrumbNav'
      data-category='nav'
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

export default BreadcrumbNav