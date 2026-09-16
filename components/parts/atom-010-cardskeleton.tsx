'use client'
import React from 'react'

interface CardSkeletonProps {
  children?: React.ReactNode
}

export function CardSkeleton({ children }: CardSkeletonProps) {
  return <div style={{borderRadius:12,overflow:'hidden',background:'#f3f4f6'}}><div style={{height:80,background:'linear-gradient(90deg,#f0f0f0 25%,#e8e8e8 50%,#f0f0f0 75%)',backgroundSize:'200% 100%',animation:'shimmer 1.2s ease-in-out infinite'}}/><div style={{padding:'12px',display:'flex',flexDirection:'column',gap:8}}><div style={{height:12,borderRadius:6,background:'#e8e8e8',width:'70%'}}/><div style={{height:10,borderRadius:6,background:'#e8e8e8',width:'50%'}}/></div></div>
}

export default CardSkeleton