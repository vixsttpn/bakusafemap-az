'use client'
import React from 'react'

interface ListSkeletonProps {
  count?: number
}

export function ListSkeleton({ count }: ListSkeletonProps) {
  const n = count || 3; return <div style={{display:'flex',flexDirection:'column',gap:8}}>{Array.from({length:n},(_,i)=><div key={i} style={{height:52,borderRadius:10,background:'linear-gradient(90deg,#f0f0f0 25%,#e8e8e8 50%,#f0f0f0 75%)',backgroundSize:'200% 100%',animation:'shimmer 1.2s ease-in-out infinite',animationDelay:i*0.1+'s'}}/>)}</div>
}

export default ListSkeleton