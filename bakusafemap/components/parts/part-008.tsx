'use client'
import React from 'react'

interface RouteChipProps {
  step: number; total: number
}

export function RouteChip({step}: RouteChipProps) {
  return (
  return (
    <div style={{display:'flex',alignItems:'center',gap:6,fontSize:11,color:'#8A8A8A',fontFamily:'Fragment Mono,monospace'}}>
      <span style={{background:'#1A73E8',color:'white',borderRadius:8,padding:'2px 7px',fontWeight:700}}>{step}</span>
      <span>/</span>
      <span>{total}</span>
    </div>
  )
  )
}

export default RouteChip
