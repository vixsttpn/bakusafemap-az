'use client'
import React from 'react'

interface CarouselLayoutProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function CarouselLayout({ children, style, onClick, className }: CarouselLayoutProps) {
  return (
    <div
      className={className}
      data-component='CarouselLayout'
      data-category='layout'
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

export default CarouselLayout