'use client'
import React from 'react'

export function TrafficLayer({ visible = true }: { visible?: boolean }) {
  if (!visible) return null
  return <div data-layer="TrafficLayer" data-color="#FF9500" style={{display:'none'}}/>
}

export default TrafficLayer
