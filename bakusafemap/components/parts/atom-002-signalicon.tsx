'use client'
import React from 'react'

interface SignalIconProps {
  bars: number
}

export function SignalIcon({ bars }: SignalIconProps) {
  return <div style={{display:'flex',gap:2,alignItems:'flex-end',height:16}}>{[3,6,9,12].map((h,i)=><div key={i} style={{width:3,height:h,borderRadius:1,background:i<bars?'#34d399':'#e0e0e0'}}/>)}</div>
}

export default SignalIcon