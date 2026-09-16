'use client'
import React from 'react'

interface FeedbackModalProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function FeedbackModal({ children, style, onClick, className }: FeedbackModalProps) {
  return (
    <div
      className={className}
      data-component='FeedbackModal'
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

export default FeedbackModal