'use client'
import React from 'react'

interface PaginationNavProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function PaginationNav({ children, style, onClick, className }: PaginationNavProps) {
  return (
    <div
      className={className}
      data-component='PaginationNav'
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

export default PaginationNav