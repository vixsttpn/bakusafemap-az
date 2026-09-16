'use client'
import React from 'react'

interface UpdateSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function UpdateSection({ children, style, className }: UpdateSectionProps) {
  return (
    <section
      className={className}
      data-section='UpdateSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default UpdateSection