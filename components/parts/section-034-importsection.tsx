'use client'
import React from 'react'

interface ImportSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function ImportSection({ children, style, className }: ImportSectionProps) {
  return (
    <section
      className={className}
      data-section='ImportSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default ImportSection