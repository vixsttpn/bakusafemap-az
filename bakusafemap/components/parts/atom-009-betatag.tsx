'use client'
import React from 'react'

interface BetaTagProps {
  children?: React.ReactNode
}

export function BetaTag({ children }: BetaTagProps) {
  return <span style={{background:'#FF9500',color:'white',borderRadius:8,padding:'2px 8px',fontSize:10,fontWeight:600}}>BETA</span>
}

export default BetaTag