'use client'
import React from 'react'

interface PaginationSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function PaginationSection({ children, style, className }: PaginationSectionProps) {
  return (
    <section
      className={className}
      data-section='PaginationSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default PaginationSection