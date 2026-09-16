'use client'
import React from 'react'

interface Props { street?: string; dist?: number; active?: boolean }

export function OnRampInstruction({ street, dist, active = false }: Props) {
  const d = dist ? (dist < 1000 ? Math.round(dist) + 'м' : (dist/1000).toFixed(1) + 'км') : ''
  return (
    <div style={{display:'flex',alignItems:'center',gap:12,padding:'10px 16px',background:active?'#dbeafe':'transparent',borderRadius:10}}>
      <div style={{width:32,height:32,borderRadius:8,background:active?'#1A73E8':'#f3f4f6',display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,flexShrink:0,color:active?'white':'#6b7280',fontWeight:700}}>
        ON
      </div>
      <div style={{flex:1}}>
        <div style={{fontSize:13,fontWeight:active?700:500,color:active?'#101828':'#6b7280',fontFamily:'Inter,sans-serif'}}>
          {street ? 'На магистраль: ' + street : 'На магистраль'}
        </div>
        {d && <div style={{fontSize:11,color:'#8A8A8A',fontFamily:'Fragment Mono,monospace',marginTop:2}}>через {d}</div>}
      </div>
    </div>
  )
}
export default OnRampInstruction