'use client'
import React from 'react'

interface LoadMoreSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function LoadMoreSection({ children, style, className }: LoadMoreSectionProps) {
  return (
    <section
      className={className}
      data-section='LoadMoreSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default LoadMoreSection