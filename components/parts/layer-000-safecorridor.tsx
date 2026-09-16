'use client'
import React from 'react'

export function SafeCorridor({ visible = true }: { visible?: boolean }) {
  if (!visible) return null
  return <div data-layer="SafeCorridor" data-color="#34d399" style={{display:'none'}}/>
}

export default SafeCorridor
