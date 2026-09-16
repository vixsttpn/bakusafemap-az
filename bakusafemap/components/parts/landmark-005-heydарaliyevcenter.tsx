'use client'
import React from 'react'

export function HeydарAliyevCenterMarker({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      title="Центр Гейдара Алиева — Заха Хадид"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '4px 10px', borderRadius: 12,
        background: '#F5F1E815',
        border: '1px solid #F5F1E830',
        cursor: 'pointer',
        fontSize: 11, fontWeight: 600,
        color: '#F5F1E8',
        fontFamily: 'Fragment Mono,monospace',
        whiteSpace: 'nowrap',
      }}
    >
      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#F5F1E8', flexShrink: 0 }}/>
      HeydарAliyevCenter
    </div>
  )
}

export default HeydарAliyevCenterMarker
