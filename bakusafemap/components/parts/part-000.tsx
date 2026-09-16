'use client'
import React from 'react'

interface SpeedometerProps {
  speed: number
}

export function Speedometer({speed}: SpeedometerProps) {
  return (
  const deg = Math.min(speed / 120 * 180, 180)
  return (
    <div style={{position:'relative',width:80,height:44}}>
      <svg width={80} height={44} viewBox="0 0 80 44">
        <path d="M8 40 A32 32 0 0 1 72 40" stroke="#e5e7eb" strokeWidth={6} fill="none" strokeLinecap="round"/>
        <path d="M8 40 A32 32 0 0 1 72 40" stroke="#1A73E8" strokeWidth={6} fill="none" strokeLinecap="round"
          strokeDasharray={`${(deg/180)*100.5} 100.5`}/>
        <text x="40" y="42" textAnchor="middle" fontSize={10} fontWeight={700} fill="#101828">{speed}</text>
      </svg>
    </div>
  )
  )
}

export default Speedometer
