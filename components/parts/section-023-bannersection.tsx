'use client'
import React from 'react'

interface BannerSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function BannerSection({ children, style, className }: BannerSectionProps) {
  return (
    <section
      className={className}
      data-section='BannerSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default BannerSection