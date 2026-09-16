'use client'
import React from 'react'

interface SpeedBadgeProps {
  speed: number
}

export function SpeedBadge({ speed }: SpeedBadgeProps) {
  const s = speed; const c = s > 90 ? '#FF3B30' : s > 60 ? '#FF9500' : '#34d399'; return <span style={{background:c+'15',color:c,borderRadius:12,padding:'2px 10px',fontSize:12,fontWeight:700,fontFamily:'Fragment Mono,monospace'}}>{s} км/ч</span>
}

export default SpeedBadge