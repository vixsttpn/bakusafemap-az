'use client'
import React from 'react'

interface BlogCardProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function BlogCard({ children, style, onClick, className }: BlogCardProps) {
  return (
    <div
      className={className}
      data-component='BlogCard'
      data-category='card'
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

export default BlogCard