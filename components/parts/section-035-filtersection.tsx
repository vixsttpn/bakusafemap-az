'use client'
import React from 'react'

interface FilterSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function FilterSection({ children, style, className }: FilterSectionProps) {
  return (
    <section
      className={className}
      data-section='FilterSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default FilterSection