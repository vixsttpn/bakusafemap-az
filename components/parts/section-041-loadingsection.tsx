'use client'
import React from 'react'

interface LoadingSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function LoadingSection({ children, style, className }: LoadingSectionProps) {
  return (
    <section
      className={className}
      data-section='LoadingSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default LoadingSection