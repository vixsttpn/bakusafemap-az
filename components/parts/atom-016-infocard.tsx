'use client'
import React from 'react'

interface InfoCardProps {
  message?: string
}

export function InfoCard({ message }: InfoCardProps) {
  const m = message || 'Информация'; return <div style={{padding:'16px',borderRadius:12,background:'#dbeafe',border:'1px solid #93c5fd',display:'flex',gap:10,alignItems:'flex-start'}}><div style={{color:'#1A73E8',fontSize:16,flexShrink:0}}>ℹ</div><div style={{fontSize:13,color:'#1e3a5f',fontFamily:'Inter,sans-serif'}}>{m}</div></div>
}

export default InfoCard