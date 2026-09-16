'use client'
import { useState, useCallback, useRef } from 'react'
export function useSearch() {
  const [q, setQ] = useState('')
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const abort = useRef<AbortController>()
  const search = useCallback(async (query: string) => {
    if (query.length < 3) { setResults([]); return }
    abort.current?.abort()
    abort.current = new AbortController()
    setLoading(true)
    try {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query+' Baku')}&limit=5&viewbox=49.52,40.26,50.12,40.57&bounded=0&accept-language=az,ru`
      const res = await fetch(url, { signal: abort.current.signal })
      setResults(await res.json())
    } catch {}
    setLoading(false)
  }, [])
  return { q, setQ, results, loading, search }
}
