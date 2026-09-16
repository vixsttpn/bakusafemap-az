'use client'
import React from 'react'

interface NewsCardProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function NewsCard({ children, style, onClick, className }: NewsCardProps) {
  return (
    <div
      className={className}
      data-component='NewsCard'
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

export default NewsCard