'use client'
import React from 'react'

interface OnboardingModalProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function OnboardingModal({ children, style, onClick, className }: OnboardingModalProps) {
  return (
    <div
      className={className}
      data-component='OnboardingModal'
      data-category='modal'
      onClick={onClick}
      style={{
        cursor: onClick ? 'pointer' : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default OnboardingModal