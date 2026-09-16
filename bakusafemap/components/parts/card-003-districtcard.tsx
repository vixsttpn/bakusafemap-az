'use client'
import React from 'react'

interface DistrictCardProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function DistrictCard({ children, style, onClick, className }: DistrictCardProps) {
  return (
    <div
      className={className}
      data-component='DistrictCard'
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

export default DistrictCard