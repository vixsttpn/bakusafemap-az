'use client'
import React from 'react'

interface ErrorSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function ErrorSection({ children, style, className }: ErrorSectionProps) {
  return (
    <section
      className={className}
      data-section='ErrorSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default ErrorSection