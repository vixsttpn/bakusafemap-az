'use client'
import React from 'react'

interface InstalledSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function InstalledSection({ children, style, className }: InstalledSectionProps) {
  return (
    <section
      className={className}
      data-section='InstalledSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default InstalledSection