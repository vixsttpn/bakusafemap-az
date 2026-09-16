'use client'
import React from 'react'

interface AboutSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function AboutSection({ children, style, className }: AboutSectionProps) {
  return (
    <section
      className={className}
      data-section='AboutSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default AboutSection