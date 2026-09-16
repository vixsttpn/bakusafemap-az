'use client'
import React from 'react'

interface HeroSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function HeroSection({ children, style, className }: HeroSectionProps) {
  return (
    <section
      className={className}
      data-section='HeroSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default HeroSection