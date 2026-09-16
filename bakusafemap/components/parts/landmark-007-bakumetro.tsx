'use client'
import React from 'react'

export function BakuMetroMarker({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      title="Бакинский метрополитен — 3 линии"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '4px 10px', borderRadius: 12,
        background: '#0052CC15',
        border: '1px solid #0052CC30',
        cursor: 'pointer',
        fontSize: 11, fontWeight: 600,
        color: '#0052CC',
        fontFamily: 'Fragment Mono,monospace',
        whiteSpace: 'nowrap',
      }}
    >
      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#0052CC', flexShrink: 0 }}/>
      BakuMetro
    </div>
  )
}

export default BakuMetroMarker
