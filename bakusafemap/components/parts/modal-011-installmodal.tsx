'use client'
import React from 'react'

interface InstallModalProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function InstallModal({ children, style, onClick, className }: InstallModalProps) {
  return (
    <div
      className={className}
      data-component='InstallModal'
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

export default InstallModal