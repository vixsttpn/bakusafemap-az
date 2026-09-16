'use client'
import React from 'react'

interface SearchToastProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function SearchToast({ children, style, onClick, className }: SearchToastProps) {
  return (
    <div
      className={className}
      data-component='SearchToast'
      data-category='toast'
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

export default SearchToast