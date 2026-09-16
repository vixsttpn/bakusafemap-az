'use client'
import React from 'react'

export function MaidenTowerMarker({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      title="Maiden Tower (Qız Qalası) — XII век"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '4px 10px', borderRadius: 12,
        background: '#8B691415',
        border: '1px solid #8B691430',
        cursor: 'pointer',
        fontSize: 11, fontWeight: 600,
        color: '#8B6914',
        fontFamily: 'Fragment Mono,monospace',
        whiteSpace: 'nowrap',
      }}
    >
      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#8B6914', flexShrink: 0 }}/>
      MaidenTower
    </div>
  )
}

export default MaidenTowerMarker
