'use client'
import React from 'react'

interface SectionLabelProps {
  text: string; count?: number
}

export function SectionLabel({ text }: SectionLabelProps) {
  return <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12}}><span style={{fontSize:11,fontWeight:600,color:'#8A8A8A',fontFamily:'Fragment Mono,monospace',letterSpacing:1,textTransform:'uppercase'}}>{text}</span>{count!==undefined && <span style={{fontSize:11,color:'#8A8A8A',fontFamily:'Fragment Mono,monospace'}}>{count}</span>}</div>
}

export default SectionLabel