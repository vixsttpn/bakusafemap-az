'use client'
import { useState, useEffect } from 'react'
export function useTheme() {
  const [theme, setTheme] = useState<'light'|'dark'>('light')
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    setTheme(mq.matches ? 'dark' : 'light')
    const h = (e: MediaQueryListEvent) => setTheme(e.matches ? 'dark' : 'light')
    mq.addEventListener('change', h)
    return () => mq.removeEventListener('change', h)
  }, [])
  return { theme, setTheme }
}
