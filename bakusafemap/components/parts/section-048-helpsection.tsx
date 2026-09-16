'use client'
import React from 'react'

interface HelpSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function HelpSection({ children, style, className }: HelpSectionProps) {
  return (
    <section
      className={className}
      data-section='HelpSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default HelpSection