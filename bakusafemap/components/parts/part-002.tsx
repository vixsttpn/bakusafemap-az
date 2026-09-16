'use client'
import React from 'react'

interface TimePillProps {
  seconds: number
}

export function TimePill({seconds}: TimePillProps) {
  return (
  const m = Math.round(seconds/60)
  const txt = m < 60 ? `${m} мин` : `${Math.floor(m/60)}ч ${m%60}м`
  return <span style={{background:'#f3f4f6',color:'#6b7280',borderRadius:12,padding:'2px 10px',fontSize:12,fontFamily:'Fragment Mono,monospace'}}>{txt}</span>
  )
}

export default TimePill
