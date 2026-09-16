'use client'
import React from 'react'

interface ErrorCardProps {
  message?: string
}

export function ErrorCard({ message }: ErrorCardProps) {
  const m = message || 'Что-то пошло не так'; return <div style={{padding:'20px',borderRadius:12,background:'#fee2e2',border:'1px solid #fca5a5',display:'flex',gap:10,alignItems:'flex-start'}}><div style={{color:'#FF3B30',fontSize:16,flexShrink:0}}>⚠</div><div><div style={{fontSize:13,fontWeight:700,color:'#991b1b',fontFamily:'Inter,sans-serif'}}>Ошибка</div><div style={{fontSize:12,color:'#7f1d1d',marginTop:4}}>{m}</div></div></div>
}

export default ErrorCard