'use client'
import React from 'react'

interface AccuracyDotProps {
  accuracy: number
}

export function AccuracyDot({accuracy}: AccuracyDotProps) {
  return (
  const good = accuracy < 20
  const ok = accuracy < 35
  const color = good ? '#10b981' : ok ? '#f59e0b' : '#FF3B30'
  return (
    <div style={{display:'flex',alignItems:'center',gap:5}}>
      <div style={{width:8,height:8,borderRadius:'50%',background:color}}/>
      <span style={{fontFamily:'Fragment Mono,monospace',fontSize:11,color:'#8A8A8A'}}>±{Math.round(accuracy)}м</span>
    </div>
  )
  )
}

export default AccuracyDot
