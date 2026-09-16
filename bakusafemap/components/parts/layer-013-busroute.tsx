'use client'
import React from 'react'

export function BusRoute({ visible = true }: { visible?: boolean }) {
  if (!visible) return null
  return <div data-layer="BusRoute" data-color="#FF9500" style={{display:'none'}}/>
}

export default BusRoute
