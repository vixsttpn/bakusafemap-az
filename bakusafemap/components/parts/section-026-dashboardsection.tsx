'use client'
import React from 'react'

interface DashboardSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function DashboardSection({ children, style, className }: DashboardSectionProps) {
  return (
    <section
      className={className}
      data-section='DashboardSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default DashboardSection