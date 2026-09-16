'use client'
import React from 'react'

interface NewTagProps {
  children?: React.ReactNode
}

export function NewTag({ children }: NewTagProps) {
  return <span style={{background:'#1A73E8',color:'white',borderRadius:8,padding:'2px 8px',fontSize:10,fontWeight:600}}>NEW</span>
}

export default NewTag