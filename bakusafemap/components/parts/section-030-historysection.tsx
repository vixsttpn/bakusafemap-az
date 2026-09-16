'use client'
import React from 'react'

interface HistorySectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function HistorySection({ children, style, className }: HistorySectionProps) {
  return (
    <section
      className={className}
      data-section='HistorySection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default HistorySection