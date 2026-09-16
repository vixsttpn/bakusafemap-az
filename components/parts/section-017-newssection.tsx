'use client'
import React from 'react'

interface NewsSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function NewsSection({ children, style, className }: NewsSectionProps) {
  return (
    <section
      className={className}
      data-section='NewsSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default NewsSection