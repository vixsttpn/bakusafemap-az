'use client'
import React from 'react'

interface DividerProps {
  label?: string
}

export function Divider({ label }: DividerProps) {
  return label ? <div style={{display:'flex',alignItems:'center',gap:12,margin:'16px 0'}}><div style={{flex:1,height:1,background:'rgba(0,0,0,0.08)'}}/><span style={{fontSize:11,color:'#8A8A8A',fontFamily:'Fragment Mono,monospace',whiteSpace:'nowrap'}}>{label}</span><div style={{flex:1,height:1,background:'rgba(0,0,0,0.08)'}}/></div> : <div style={{height:1,background:'rgba(0,0,0,0.06)',margin:'12px 0'}}/>
}

export default Divider