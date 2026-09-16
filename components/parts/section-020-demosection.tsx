'use client'
import React from 'react'

interface DemoSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function DemoSection({ children, style, className }: DemoSectionProps) {
  return (
    <section
      className={className}
      data-section='DemoSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default DemoSection