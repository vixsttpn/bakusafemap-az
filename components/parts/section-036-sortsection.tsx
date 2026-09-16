'use client'
import React from 'react'

interface SortSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function SortSection({ children, style, className }: SortSectionProps) {
  return (
    <section
      className={className}
      data-section='SortSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default SortSection