'use client'
import React from 'react'

interface TimeSinceProps {
  timestamp: number
}

export function TimeSince({ timestamp }: TimeSinceProps) {
  const s = Math.round((Date.now()-timestamp)/1000); const t = s<60?s+'с':s<3600?Math.round(s/60)+'м':Math.round(s/3600)+'ч'; return <span style={{fontSize:11,color:'#8A8A8A',fontFamily:'Fragment Mono,monospace'}}>{t} назад</span>
}

export default TimeSince