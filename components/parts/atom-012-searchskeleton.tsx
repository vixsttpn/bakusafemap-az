'use client'
import React from 'react'

interface SearchSkeletonProps {
  children?: React.ReactNode
}

export function SearchSkeleton({ children }: SearchSkeletonProps) {
  return <div style={{height:48,borderRadius:24,background:'linear-gradient(90deg,#f0f0f0 25%,#e8e8e8 50%,#f0f0f0 75%)',backgroundSize:'200% 100%',animation:'shimmer 1.2s ease-in-out infinite'}}/>
}

export default SearchSkeleton