'use client'
import React from 'react'

export function NightLayer({ visible = true }: { visible?: boolean }) {
  if (!visible) return null
  return <div data-layer="NightLayer" data-color="#0A0A0A" style={{display:'none'}}/>
}

export default NightLayer
