'use client'
import React from 'react'

interface WifiIconProps {
  connected: boolean
}

export function WifiIcon({ connected }: WifiIconProps) {
  return <svg width={18} height={18} viewBox='0 0 24 24' fill='none' stroke={connected?'#34d399':'#e0e0e0'} strokeWidth={1.75} strokeLinecap='round'><path d='M1.42 9a16 16 0 0121.16 0'/><path d='M5 12.55a11 11 0 0114.08 0'/><path d='M10.54 16.1a6 6 0 012.92 0'/><circle cx='12' cy='20' r='1' fill={connected?'#34d399':'#e0e0e0'}/></svg>
}

export default WifiIcon