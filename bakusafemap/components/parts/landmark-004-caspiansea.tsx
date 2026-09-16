'use client'
import React from 'react'

export function CaspianSeaMarker({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      title="Каспийское море — крупнейшее озеро"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '4px 10px', borderRadius: 12,
        background: '#1A73E815',
        border: '1px solid #1A73E830',
        cursor: 'pointer',
        fontSize: 11, fontWeight: 600,
        color: '#1A73E8',
        fontFamily: 'Fragment Mono,monospace',
        whiteSpace: 'nowrap',
      }}
    >
      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#1A73E8', flexShrink: 0 }}/>
      CaspianSea
    </div>
  )
}

export default CaspianSeaMarker
