'use client'
import React from 'react'

interface MapSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function MapSection({ children, style, className }: MapSectionProps) {
  return (
    <section
      className={className}
      data-section='MapSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default MapSection