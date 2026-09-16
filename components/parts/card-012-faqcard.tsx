'use client'
import React from 'react'

interface FAQCardProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function FAQCard({ children, style, onClick, className }: FAQCardProps) {
  return (
    <div
      className={className}
      data-component='FAQCard'
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

export default FAQCard