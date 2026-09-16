'use client'
import React from 'react'

export function AtaturkProspektiMarker({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      title="Площадь Свободы (бывш. Ленина)"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '4px 10px', borderRadius: 12,
        background: '#8A8A8A15',
        border: '1px solid #8A8A8A30',
        cursor: 'pointer',
        fontSize: 11, fontWeight: 600,
        color: '#8A8A8A',
        fontFamily: 'Fragment Mono,monospace',
        whiteSpace: 'nowrap',
      }}
    >
      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#8A8A8A', flexShrink: 0 }}/>
      AtaturkProspekti
    </div>
  )
}

export default AtaturkProspektiMarker
