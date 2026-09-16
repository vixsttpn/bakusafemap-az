'use client'
import React from 'react'

interface AlertSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function AlertSection({ children, style, className }: AlertSectionProps) {
  return (
    <section
      className={className}
      data-section='AlertSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default AlertSection