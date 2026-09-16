'use client'
import React from 'react'

interface ShareSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function ShareSection({ children, style, className }: ShareSectionProps) {
  return (
    <section
      className={className}
      data-section='ShareSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default ShareSection