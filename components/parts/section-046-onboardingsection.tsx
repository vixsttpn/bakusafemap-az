'use client'
import React from 'react'

interface OnboardingSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function OnboardingSection({ children, style, className }: OnboardingSectionProps) {
  return (
    <section
      className={className}
      data-section='OnboardingSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default OnboardingSection