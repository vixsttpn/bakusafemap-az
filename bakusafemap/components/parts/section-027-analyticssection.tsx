'use client'
import React from 'react'

interface AnalyticsSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function AnalyticsSection({ children, style, className }: AnalyticsSectionProps) {
  return (
    <section
      className={className}
      data-section='AnalyticsSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default AnalyticsSection