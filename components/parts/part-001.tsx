'use client'
import React from 'react'

interface DistancePillProps {
  meters: number
}

export function DistancePill({meters}: DistancePillProps) {
  return (
  const txt = meters < 1000 ? `${Math.round(meters)}м` : `${(meters/1000).toFixed(1)}км`
  return <span style={{background:'#dbeafe',color:'#1A73E8',borderRadius:12,padding:'2px 10px',fontSize:12,fontWeight:700,fontFamily:'Fragment Mono,monospace'}}>{txt}</span>
  )
}

export default DistancePill
