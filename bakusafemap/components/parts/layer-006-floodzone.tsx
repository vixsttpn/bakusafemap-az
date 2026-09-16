'use client'
import React from 'react'

export function FloodZone({ visible = true }: { visible?: boolean }) {
  if (!visible) return null
  return <div data-layer="FloodZone" data-color="#007AFF" style={{display:'none'}}/>
}

export default FloodZone
