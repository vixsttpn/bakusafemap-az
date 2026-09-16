'use client'
import React from 'react'

interface GallerySectionProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export function GallerySection({ children, style, className }: GallerySectionProps) {
  return (
    <section
      className={className}
      data-section='GallerySection'
      style={{ position: 'relative', ...style }}
    >
      {children}
    </section>
  )
}

export default GallerySection