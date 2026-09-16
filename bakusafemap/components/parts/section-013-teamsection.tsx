'use client'
import React from 'react'

interface TeamSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function TeamSection({ children, style, className }: TeamSectionProps) {
  return (
    <section
      className={className}
      data-section='TeamSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default TeamSection