'use client'
import React from 'react'

interface FAQSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function FAQSection({ children, style, className }: FAQSectionProps) {
  return (
    <section
      className={className}
      data-section='FAQSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default FAQSection