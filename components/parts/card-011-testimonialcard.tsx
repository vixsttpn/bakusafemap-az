'use client'
import React from 'react'

interface TestimonialCardProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function TestimonialCard({ children, style, onClick, className }: TestimonialCardProps) {
  return (
    <div
      className={className}
      data-component='TestimonialCard'
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

export default TestimonialCard