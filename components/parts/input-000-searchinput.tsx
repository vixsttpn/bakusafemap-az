'use client'
import React from 'react'

interface SearchInputProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function SearchInput({ children, style, onClick, className }: SearchInputProps) {
  return (
    <div
      className={className}
      data-component='SearchInput'
      data-category='input'
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

export default SearchInput