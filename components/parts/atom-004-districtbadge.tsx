'use client'
import React from 'react'

interface DistrictBadgeProps {
  name: string; color?: string
}

export function DistrictBadge({ name }: DistrictBadgeProps) {
  const c = '#1A73E8'; return <span style={{background:c+'12',border:'1px solid '+c+'25',borderRadius:20,padding:'3px 10px',fontSize:11,fontWeight:600,color:c,fontFamily:'Fragment Mono,monospace'}}>{name}</span>
}

export default DistrictBadge