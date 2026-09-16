'use client'
import React from 'react'

interface PillNavProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function PillNav({ children, style, onClick, className }: PillNavProps) {
  return (
    <div
      className={className}
      data-component='PillNav'
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

export default PillNav