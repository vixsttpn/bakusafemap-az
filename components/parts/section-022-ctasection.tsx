'use client'
import React from 'react'

interface CTASectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function CTASection({ children, style, className }: CTASectionProps) {
  return (
    <section
      className={className}
      data-section='CTASection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default CTASection