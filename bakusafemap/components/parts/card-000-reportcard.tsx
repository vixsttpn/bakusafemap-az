'use client'
import React from 'react'

interface ReportCardProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function ReportCard({ children, style, onClick, className }: ReportCardProps) {
  return (
    <div
      className={className}
      data-component='ReportCard'
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

export default ReportCard