'use client'
import React from 'react'

interface VideoSectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function VideoSection({ children, style, className }: VideoSectionProps) {
  return (
    <section
      className={className}
      data-section='VideoSection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default VideoSection