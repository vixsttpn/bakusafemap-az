'use client'
import React from 'react'

interface TutorialSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function TutorialSection({ children, style, className }: TutorialSectionProps) {
  return (
    <section
      className={className}
      data-section='TutorialSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default TutorialSection