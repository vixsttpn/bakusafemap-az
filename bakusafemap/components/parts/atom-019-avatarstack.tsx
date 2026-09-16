'use client'
import React from 'react'

interface AvatarStackProps {
  count?: number
}

export function AvatarStack({ count }: AvatarStackProps) {
  const n = count || 3; const colors = ['#1A73E8','#FF3B30','#34d399','#FF9500']; return <div style={{display:'flex'}}>{Array.from({length:Math.min(n,4)},(_,i)=><div key={i} style={{width:28,height:28,borderRadius:'50%',background:colors[i],border:'2px solid white',marginLeft:i>0?-8:0,display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,color:'white',fontWeight:700,zIndex:4-i}}>{i<3?String.fromCharCode(65+i):'+'}</div>)}</div>
}

export default AvatarStack