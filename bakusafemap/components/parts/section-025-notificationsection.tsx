'use client'
import React from 'react'

interface NotificationSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function NotificationSection({ children, style, className }: NotificationSectionProps) {
  return (
    <section
      className={className}
      data-section='NotificationSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default NotificationSection