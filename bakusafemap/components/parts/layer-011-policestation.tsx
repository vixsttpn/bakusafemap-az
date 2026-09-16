'use client'
import React from 'react'

export function PoliceStation({ visible = true }: { visible?: boolean }) {
  if (!visible) return null
  return <div data-layer="PoliceStation" data-color="#007AFF" style={{display:'none'}}/>
}

export default PoliceStation
