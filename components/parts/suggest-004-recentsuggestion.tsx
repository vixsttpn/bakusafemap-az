'use client'
import React from 'react'

interface Props { name: string; subtitle?: string; onClick?: ()=>void; isLast?: boolean }

export function RecentSuggestion({ name, subtitle, onClick, isLast }: Props) {
  return (
    <button onClick={onClick} style={{width:'100%',textAlign:'left',padding:'11px 16px',border:'none',background:'none',cursor:'pointer',borderBottom:isLast?'none':'1px solid #f0f0f0',display:'flex',alignItems:'center',gap:10,transition:'background 100ms'}}
      onMouseEnter={e=>(e.currentTarget.style.background='#f8f9fa')}
      onMouseLeave={e=>(e.currentTarget.style.background='none')}
    >
      <div style={{width:28,height:28,borderRadius:8,background:'#8E8E9318',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
        <div style={{width:6,height:6,borderRadius:'50%',background:'#8E8E93'}}/>
      </div>
      <div style={{flex:1,minWidth:0}}>
        <div style={{fontSize:13,fontWeight:600,color:'#101828',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{name}</div>
        {subtitle && <div style={{fontSize:11,color:'#8A8A8A',marginTop:1,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{subtitle}</div>}
      </div>
      <span style={{fontSize:9,color:'#8A8A8A',fontFamily:'Fragment Mono,monospace',textTransform:'uppercase',letterSpacing:1}}>recent</span>
    </button>
  )
}
export default RecentSuggestion