'use client'
import React from 'react'

interface ShareModalProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function ShareModal({ children, style, onClick, className }: ShareModalProps) {
  return (
    <div
      className={className}
      data-component='ShareModal'
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

export default ShareModal