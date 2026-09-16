'use client'
import React from 'react'

export function ParkingLayer({ visible = true }: { visible?: boolean }) {
  if (!visible) return null
  return <div data-layer="ParkingLayer" data-color="#8E8E93" style={{display:'none'}}/>
}

export default ParkingLayer
