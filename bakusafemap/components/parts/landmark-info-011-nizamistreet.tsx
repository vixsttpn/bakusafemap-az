'use client'
import React from 'react'

export function NizamiStreetCard({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} style={{borderRadius:12,border:'1px solid rgba(0,0,0,0.06)',overflow:'hidden',cursor:'pointer',background:'white',transition:'transform 150ms'}} onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform='translateY(-2px)' }} onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform='' }}>
      <div style={{height:72,background:'linear-gradient(135deg,#F5F1E8,#D9DFCC)',position:'relative'}}>
        <span style={{position:'absolute',bottom:6,left:10,fontSize:9,fontFamily:'Fragment Mono,monospace',color:'#8A8A8A'}}>40.3714N / 49.8382E</span>
      </div>
      <div style={{padding:'10px 12px'}}>
        <div style={{fontSize:13,fontWeight:700,color:'#101828',fontFamily:'Syne,sans-serif',marginBottom:3}}>Улица Низами</div>
        <div style={{fontSize:11,color:'#8A8A8A',fontFamily:'Inter,sans-serif'}}>Пешеходная зона</div>
      </div>
    </div>
  )
}
export default NizamiStreetCard