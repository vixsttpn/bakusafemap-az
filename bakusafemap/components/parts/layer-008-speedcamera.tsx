'use client'
import React from 'react'

export function SpeedCamera({ visible = true }: { visible?: boolean }) {
  if (!visible) return null
  return <div data-layer="SpeedCamera" data-color="#FF3B30" style={{display:'none'}}/>
}

export default SpeedCamera
