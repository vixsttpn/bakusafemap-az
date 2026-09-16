'use client'
import React from 'react'

interface MapSkeletonProps {
  children?: React.ReactNode
}

export function MapSkeleton({ children }: MapSkeletonProps) {
  return <div style={{width:'100%',height:'100%',background:'linear-gradient(135deg,#e8e0d8,#ddd8d0)',position:'relative',overflow:'hidden'}}><div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.3) 50%,transparent 100%)',backgroundSize:'200% 100%',animation:'shimmer 2s ease-in-out infinite'}}/></div>
}

export default MapSkeleton