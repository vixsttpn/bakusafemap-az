'use client'
import React from 'react'

export function RiskHeatmap({ visible = true }: { visible?: boolean }) {
  if (!visible) return null
  return <div data-layer="RiskHeatmap" data-color="#FF3B30" style={{display:'none'}}/>
}

export default RiskHeatmap
