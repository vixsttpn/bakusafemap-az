'use client'
import React from 'react'

interface ReportCountProps {
  count: number; type: string
}

export function ReportCount({count}: ReportCountProps) {
  return (
  const colors:any = {danger:'#FF3B30',police:'#007AFF',accident:'#FF9500',repair:'#8E8E93'}
  const c = colors[type] || '#8E8E93'
  return (
    <div style={{display:'flex',alignItems:'center',gap:4,background:c+'15',borderRadius:10,padding:'3px 10px'}}>
      <div style={{width:5,height:5,borderRadius:'50%',background:c}}/>
      <span style={{fontSize:11,fontWeight:600,color:c,fontFamily:'Fragment Mono,monospace'}}>{count}</span>
    </div>
  )
  )
}

export default ReportCount
