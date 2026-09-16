'use client'
import React from 'react'

interface PhotoModalProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function PhotoModal({ children, style, onClick, className }: PhotoModalProps) {
  return (
    <div
      className={className}
      data-component='PhotoModal'
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

export default PhotoModal