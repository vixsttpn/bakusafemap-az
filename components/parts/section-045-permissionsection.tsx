'use client'
import React from 'react'

interface PermissionSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function PermissionSection({ children, style, className }: PermissionSectionProps) {
  return (
    <section
      className={className}
      data-section='PermissionSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default PermissionSection