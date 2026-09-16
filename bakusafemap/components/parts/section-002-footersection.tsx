'use client'
import React from 'react'

interface FooterSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function FooterSection({ children, style, className }: FooterSectionProps) {
  return (
    <section
      className={className}
      data-section='FooterSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default FooterSection