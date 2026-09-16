'use client'
import React from 'react'

interface SearchSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function SearchSection({ children, style, className }: SearchSectionProps) {
  return (
    <section
      className={className}
      data-section='SearchSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default SearchSection