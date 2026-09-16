'use client'
import React from 'react'

interface FeaturesSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function FeaturesSection({ children, style, className }: FeaturesSectionProps) {
  return (
    <section
      className={className}
      data-section='FeaturesSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default FeaturesSection