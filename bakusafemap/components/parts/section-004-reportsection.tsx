'use client'
import React from 'react'

interface ReportSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function ReportSection({ children, style, className }: ReportSectionProps) {
  return (
    <section
      className={className}
      data-section='ReportSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default ReportSection