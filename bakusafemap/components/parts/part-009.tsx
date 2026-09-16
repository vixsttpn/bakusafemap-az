'use client'
import React from 'react'

interface VoiceWaveformProps {
  active: boolean
}

export function VoiceWaveform({active}: VoiceWaveformProps) {
  return (
  return (
    <div style={{display:'flex',gap:3,alignItems:'center',height:20}}>
      {[1,2,3,4].map(i => (
        <div key={i} style={{
          width:3,height:14,background:active?'#1A73E8':'#e0e0e0',borderRadius:2,
          transformOrigin:'bottom',
          animation:active?`waveform 0.6s ease-in-out ${(i-1)*0.12}s infinite`:'none',
          transform:active?undefined:'scaleY(0.3)',
        }}/>
      ))}
    </div>
  )
  )
}

export default VoiceWaveform
