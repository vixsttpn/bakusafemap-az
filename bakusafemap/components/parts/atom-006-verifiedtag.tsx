'use client'
import React from 'react'

interface VerifiedTagProps {
  children?: React.ReactNode
}

export function VerifiedTag({ children }: VerifiedTagProps) {
  return <span style={{background:'#d1fae5',color:'#065f46',borderRadius:8,padding:'2px 8px',fontSize:10,fontWeight:600}}>✓ Verified</span>
}

export default VerifiedTag