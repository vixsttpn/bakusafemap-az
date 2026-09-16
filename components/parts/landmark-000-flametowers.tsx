'use client'
import React from 'react'

export function FlameTowersMarker({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      title="Flame Towers — символ современного Баку"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '4px 10px', borderRadius: 12,
        background: '#0A0A0B15',
        border: '1px solid #0A0A0B30',
        cursor: 'pointer',
        fontSize: 11, fontWeight: 600,
        color: '#0A0A0B',
        fontFamily: 'Fragment Mono,monospace',
        whiteSpace: 'nowrap',
      }}
    >
      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#0A0A0B', flexShrink: 0 }}/>
      FlameTowers
    </div>
  )
}

export default FlameTowersMarker
