'use client'
import React from 'react'

interface SuccessCardProps {
  message?: string
}

export function SuccessCard({ message }: SuccessCardProps) {
  const m = message || 'Успешно!'; return <div style={{padding:'20px',borderRadius:12,background:'#d1fae5',border:'1px solid #6ee7b7',display:'flex',gap:10,alignItems:'flex-start'}}><div style={{color:'#10b981',fontSize:16,flexShrink:0}}>✓</div><div><div style={{fontSize:13,fontWeight:700,color:'#065f46',fontFamily:'Inter,sans-serif'}}>Готово</div><div style={{fontSize:12,color:'#064e3b',marginTop:4}}>{m}</div></div></div>
}

export default SuccessCard