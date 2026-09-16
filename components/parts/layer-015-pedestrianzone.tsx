'use client'
import React from 'react'

export function PedestrianZone({ visible = true }: { visible?: boolean }) {
  if (!visible) return null
  return <div data-layer="PedestrianZone" data-color="#34d399" style={{display:'none'}}/>
}

export default PedestrianZone
