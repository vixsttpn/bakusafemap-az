'use client'
import { useState, useCallback } from 'react'
export function useRoute() {
  const [active, setActive] = useState(false)
  const [steps, setSteps] = useState<any[]>([])
  const [curStep, setCurStep] = useState(0)
  const start = useCallback((s: any[]) => { setSteps(s); setCurStep(0); setActive(true) }, [])
  const stop = useCallback(() => { setActive(false); setSteps([]); setCurStep(0) }, [])
  const next = useCallback(() => setCurStep(p => Math.min(p+1, steps.length-1)), [steps.length])
  return { active, steps, curStep, start, stop, next }
}
