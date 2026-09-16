'use client'
import React from 'react'

interface InfoModalProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function InfoModal({ children, style, onClick, className }: InfoModalProps) {
  return (
    <div
      className={className}
      data-component='InfoModal'
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

export default InfoModal