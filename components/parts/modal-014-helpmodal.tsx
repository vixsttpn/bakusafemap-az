'use client'
import React from 'react'

interface HelpModalProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function HelpModal({ children, style, onClick, className }: HelpModalProps) {
  return (
    <div
      className={className}
      data-component='HelpModal'
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

export default HelpModal