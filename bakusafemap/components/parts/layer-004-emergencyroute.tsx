'use client'
import React from 'react'

export function EmergencyRoute({ visible = true }: { visible?: boolean }) {
  if (!visible) return null
  return <div data-layer="EmergencyRoute" data-color="#FF3B30" style={{display:'none'}}/>
}

export default EmergencyRoute
