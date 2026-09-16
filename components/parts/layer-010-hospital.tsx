'use client'
import React from 'react'

export function Hospital({ visible = true }: { visible?: boolean }) {
  if (!visible) return null
  return <div data-layer="Hospital" data-color="#FF3B30" style={{display:'none'}}/>
}

export default Hospital
