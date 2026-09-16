'use client'
import React from 'react'

interface PartnerSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function PartnerSection({ children, style, className }: PartnerSectionProps) {
  return (
    <section
      className={className}
      data-section='PartnerSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default PartnerSection