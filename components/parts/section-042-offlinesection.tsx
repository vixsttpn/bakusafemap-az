'use client'
import React from 'react'

interface OfflineSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function OfflineSection({ children, style, className }: OfflineSectionProps) {
  return (
    <section
      className={className}
      data-section='OfflineSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default OfflineSection