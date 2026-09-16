'use client'
import React from 'react'

interface TestimonialsSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function TestimonialsSection({ children, style, className }: TestimonialsSectionProps) {
  return (
    <section
      className={className}
      data-section='TestimonialsSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default TestimonialsSection