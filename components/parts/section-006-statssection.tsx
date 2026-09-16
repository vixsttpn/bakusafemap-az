'use client'
import React from 'react'

interface StatsSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function StatsSection({ children, style, className }: StatsSectionProps) {
  return (
    <section
      className={className}
      data-section='StatsSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default StatsSection