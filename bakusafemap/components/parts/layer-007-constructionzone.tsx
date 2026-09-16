'use client'
import React from 'react'

export function ConstructionZone({ visible = true }: { visible?: boolean }) {
  if (!visible) return null
  return <div data-layer="ConstructionZone" data-color="#FF9500" style={{display:'none'}}/>
}

export default ConstructionZone
