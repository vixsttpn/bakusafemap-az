'use client'
import React from 'react'

interface ProfileSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function ProfileSection({ children, style, className }: ProfileSectionProps) {
  return (
    <section
      className={className}
      data-section='ProfileSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default ProfileSection