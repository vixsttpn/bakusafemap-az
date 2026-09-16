'use client'
import React from 'react'

interface EventSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function EventSection({ children, style, className }: EventSectionProps) {
  return (
    <section
      className={className}
      data-section='EventSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default EventSection