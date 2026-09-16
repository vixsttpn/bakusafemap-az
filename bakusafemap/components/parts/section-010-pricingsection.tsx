'use client'
import React from 'react'

interface PricingSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function PricingSection({ children, style, className }: PricingSectionProps) {
  return (
    <section
      className={className}
      data-section='PricingSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default PricingSection