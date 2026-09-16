'use client'
import React from 'react'

interface HotTagProps {
  children?: React.ReactNode
}

export function HotTag({ children }: HotTagProps) {
  return <span style={{background:'#FF3B30',color:'white',borderRadius:8,padding:'2px 8px',fontSize:10,fontWeight:600}}>HOT</span>
}

export default HotTag