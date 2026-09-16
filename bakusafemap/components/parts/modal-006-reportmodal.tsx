'use client'
import React from 'react'

interface ReportModalProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function ReportModal({ children, style, onClick, className }: ReportModalProps) {
  return (
    <div
      className={className}
      data-component='ReportModal'
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

export default ReportModal