'use client'
import React from 'react'

interface TabNavProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function TabNav({ children, style, onClick, className }: TabNavProps) {
  return (
    <div
      className={className}
      data-component='TabNav'
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

export default TabNav