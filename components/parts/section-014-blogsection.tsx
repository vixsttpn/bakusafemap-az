'use client'
import React from 'react'

interface BlogSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function BlogSection({ children, style, className }: BlogSectionProps) {
  return (
    <section
      className={className}
      data-section='BlogSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default BlogSection