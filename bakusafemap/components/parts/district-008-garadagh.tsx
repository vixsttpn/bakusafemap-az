'use client'
import React from 'react'

export function District_GaradaghCard({ reports = 0, onClick }: { reports?: number; onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: '12px 16px',
        borderRadius: 12,
        background: '#14b8a612',
        border: '1px solid #14b8a625',
        cursor: 'pointer',
        transition: 'transform 150ms ease',
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
      onMouseLeave={e => (e.currentTarget.style.transform = '')}
    >
      <div style={{ fontSize: 13, fontWeight: 700, color: '#101828', fontFamily: 'Syne,sans-serif' }}>
        Garadagh
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#14b8a6' }}/>
        <span style={{ fontSize: 11, color: '#8A8A8A', fontFamily: 'Fragment Mono,monospace' }}>
          {reports} репортов
        </span>
      </div>
    </div>
  )
}

export default District_GaradaghCard
