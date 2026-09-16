'use client'
import React from 'react'

interface EmptySectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function EmptySection({ children, style, className }: EmptySectionProps) {
  return (
    <section
      className={className}
      data-section='EmptySection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default EmptySection