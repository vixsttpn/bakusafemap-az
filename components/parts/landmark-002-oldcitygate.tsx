'use client'
import React from 'react'

export function OldCityGateMarker({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      title="Ворота Ичери Шехер"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '4px 10px', borderRadius: 12,
        background: '#9B8B6E15',
        border: '1px solid #9B8B6E30',
        cursor: 'pointer',
        fontSize: 11, fontWeight: 600,
        color: '#9B8B6E',
        fontFamily: 'Fragment Mono,monospace',
        whiteSpace: 'nowrap',
      }}
    >
      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#9B8B6E', flexShrink: 0 }}/>
      OldCityGate
    </div>
  )
}

export default OldCityGateMarker
