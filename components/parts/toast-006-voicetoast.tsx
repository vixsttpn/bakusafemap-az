'use client'
import React from 'react'

interface VoiceToastProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function VoiceToast({ children, style, onClick, className }: VoiceToastProps) {
  return (
    <div
      className={className}
      data-component='VoiceToast'
      data-category='toast'
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

export default VoiceToast