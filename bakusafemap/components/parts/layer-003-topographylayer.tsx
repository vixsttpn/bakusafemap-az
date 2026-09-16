'use client'
import React from 'react'

export function TopographyLayer({ visible = true }: { visible?: boolean }) {
  if (!visible) return null
  return <div data-layer="TopographyLayer" data-color="#D9DFCC" style={{display:'none'}}/>
}

export default TopographyLayer
