'use client'
import React from 'react'

interface TeamCardProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function TeamCard({ children, style, onClick, className }: TeamCardProps) {
  return (
    <div
      className={className}
      data-component='TeamCard'
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

export default TeamCard