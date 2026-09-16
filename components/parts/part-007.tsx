'use client'
import React from 'react'

interface DividerLineProps {
  color?: string
}

export function DividerLine({color}: DividerLineProps) {
  return (
  return <div style={{height:1,background:color||'rgba(0,0,0,0.06)',margin:'0'}}/>
  )
}

export default DividerLine
