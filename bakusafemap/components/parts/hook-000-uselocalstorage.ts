'use client'

import { useState, useEffect } from 'react'

export function useLocalStorage<T>(key: string, init: T) {
  const [val, setVal] = useState<T>(() => {
    if (typeof window === 'undefined') return init
    try { const s = localStorage.getItem(key); return s ? JSON.parse(s) : init }
    catch { return init }
  })
  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(val)) } catch {}
  }, [key, val])
  return [val, setVal] as const
}

