'use client'
import React from 'react'

export function FuelStation({ visible = true }: { visible?: boolean }) {
  if (!visible) return null
  return <div data-layer="FuelStation" data-color="#34d399" style={{display:'none'}}/>
}

export default FuelStation
