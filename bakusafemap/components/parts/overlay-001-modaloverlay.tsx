'use client'
import React from 'react'

interface ModalOverlayProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function ModalOverlay({ children, style, onClick, className }: ModalOverlayProps) {
  return (
    <div
      className={className}
      data-component='ModalOverlay'
      data-category='overlay'
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

export default ModalOverlay