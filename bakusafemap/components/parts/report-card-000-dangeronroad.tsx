'use client'
import React from 'react'

interface Props { time?: number; verified?: boolean; onVerify?: ()=>void; onDismiss?: ()=>void }

export function DangerOnRoadCard({ time, verified, onVerify, onDismiss }: Props) {
  const t = time ? new Date(time).toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'}) : ''
  return (
    <div style={{background:'white',borderRadius:12,border:'1px solid rgba(0,0,0,0.05)',overflow:'hidden',marginBottom:8}}>
      <div style={{height:3,background:'#FF3B30'}}/>
      <div style={{padding:'12px 14px',display:'flex',alignItems:'flex-start',gap:10}}>
        <div style={{width:10,height:10,borderRadius:'50%',background:'#FF3B30',flexShrink:0,marginTop:3}}/>
        <div style={{flex:1}}>
          <div style={{fontSize:13,fontWeight:700,color:'#101828',fontFamily:'Inter,sans-serif'}}>Опасность</div>
          <div style={{fontSize:11,color:'#8A8A8A',marginTop:2}}>Яма или обломки</div>
          <div style={{display:'flex',gap:8,marginTop:6}}>
            {t && <span style={{fontSize:10,color:'#8A8A8A',fontFamily:'Fragment Mono,monospace'}}>{t}</span>}
            {verified && <span style={{fontSize:10,color:'#FF3B30',fontWeight:600}}>✓ ОК</span>}
          </div>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:4}}>
          {onVerify && <button onClick={onVerify} style={{background:'#fee2e2',border:'none',borderRadius:6,padding:'3px 8px',fontSize:10,fontWeight:600,color:'#FF3B30',cursor:'pointer'}}>+1</button>}
          {onDismiss && <button onClick={onDismiss} style={{background:'#f3f4f6',border:'none',borderRadius:6,padding:'3px 8px',fontSize:10,color:'#8A8A8A',cursor:'pointer'}}>✗</button>}
        </div>
      </div>
    </div>
  )
}
export default DangerOnRoadCard