'use client'
import React from 'react'

interface SupportSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function SupportSection({ children, style, className }: SupportSectionProps) {
  return (
    <section
      className={className}
      data-section='SupportSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default SupportSection