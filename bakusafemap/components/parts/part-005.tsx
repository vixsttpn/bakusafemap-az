'use client'
import React from 'react'

interface PulseIndicatorProps {
  color?: string; size?: number
}

export function PulseIndicator({color}: PulseIndicatorProps) {
  return (
  const c = color || '#1A73E8'
  const s = size || 12
  return (
    <div style={{position:'relative',width:s,height:s,display:'inline-block'}}>
      <div style={{position:'absolute',inset:0,borderRadius:'50%',background:c,opacity:0.25,animation:'pulseRing 2s ease infinite'}}/>
      <div style={{position:'absolute',inset:'20%',borderRadius:'50%',background:c}}/>
    </div>
  )
  )
}

export default PulseIndicator
