'use client'
import React from 'react'

interface FeatureCardProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function FeatureCard({ children, style, onClick, className }: FeatureCardProps) {
  return (
    <div
      className={className}
      data-component='FeatureCard'
      data-category='card'
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

export default FeatureCard