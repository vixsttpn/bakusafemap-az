'use client'
import React from 'react'

interface ContactSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function ContactSection({ children, style, className }: ContactSectionProps) {
  return (
    <section
      className={className}
      data-section='ContactSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default ContactSection