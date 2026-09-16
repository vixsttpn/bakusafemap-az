'use client'
import React from 'react'

export function MetroStation({ visible = true }: { visible?: boolean }) {
  if (!visible) return null
  return <div data-layer="MetroStation" data-color="#0052CC" style={{display:'none'}}/>
}

export default MetroStation
