'use client'
import React from 'react'

interface SettingsModalProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function SettingsModal({ children, style, onClick, className }: SettingsModalProps) {
  return (
    <div
      className={className}
      data-component='SettingsModal'
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

export default SettingsModal