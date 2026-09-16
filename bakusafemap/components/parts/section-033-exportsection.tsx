'use client'
import React from 'react'

interface ExportSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function ExportSection({ children, style, className }: ExportSectionProps) {
  return (
    <section
      className={className}
      data-section='ExportSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default ExportSection