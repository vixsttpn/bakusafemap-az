'use client'
import React from 'react'

interface TabButtonProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function TabButton({ children, style, onClick, className }: TabButtonProps) {
  return (
    <div
      className={className}
      data-component='TabButton'
      data-category='button'
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

export default TabButton