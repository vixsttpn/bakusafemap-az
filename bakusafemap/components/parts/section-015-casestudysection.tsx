'use client'
import React from 'react'

interface CaseStudySectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function CaseStudySection({ children, style, className }: CaseStudySectionProps) {
  return (
    <section
      className={className}
      data-section='CaseStudySection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default CaseStudySection