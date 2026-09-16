'use client'
import React from 'react'

interface BatteryIconProps {
  level: number
}

export function BatteryIcon({ level }: BatteryIconProps) {
  return <svg width={20} height={20} viewBox='0 0 24 24' fill='none' stroke={level < 20 ? '#FF3B30' : '#34d399'} strokeWidth={1.75}><rect x='2' y='7' width='18' height='11' rx='2'/><path d='M22 11v3'/><rect x='4' y='9' width={level/100*14} height='7' rx='1' fill={level < 20 ? '#FF3B30' : '#34d399'} stroke='none'/></svg>
}

export default BatteryIcon