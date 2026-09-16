'use client'
import React from 'react'

interface StepNavProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function StepNav({ children, style, onClick, className }: StepNavProps) {
  return (
    <div
      className={className}
      data-component='StepNav'
      data-category='nav'
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

export default StepNav