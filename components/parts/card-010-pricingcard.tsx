'use client'
import React from 'react'

interface PricingCardProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function PricingCard({ children, style, onClick, className }: PricingCardProps) {
  return (
    <div
      className={className}
      data-component='PricingCard'
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

export default PricingCard