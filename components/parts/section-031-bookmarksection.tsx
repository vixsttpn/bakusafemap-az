'use client'
import React from 'react'

interface BookmarkSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function BookmarkSection({ children, style, className }: BookmarkSectionProps) {
  return (
    <section
      className={className}
      data-section='BookmarkSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default BookmarkSection