'use client'
import React from 'react'

interface SettingsSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function SettingsSection({ children, style, className }: SettingsSectionProps) {
  return (
    <section
      className={className}
      data-section='SettingsSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default SettingsSection