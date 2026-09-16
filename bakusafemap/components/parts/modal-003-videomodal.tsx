'use client'
import React from 'react'

interface VideoModalProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function VideoModal({ children, style, onClick, className }: VideoModalProps) {
  return (
    <div
      className={className}
      data-component='VideoModal'
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

export default VideoModal