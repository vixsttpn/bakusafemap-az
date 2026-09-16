'use client'
import React from 'react'

interface NavSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function NavSection({ children, style, className }: NavSectionProps) {
  return (
    <section
      className={className}
      data-section='NavSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default NavSection