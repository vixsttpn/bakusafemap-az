'use client'
import { useState, useCallback } from 'react'
import { Report, ReportType, loadReports, saveReports } from '@/lib/mapUtils'
export function useReports() {
  const [reports, setReports] = useState<Report[]>(() => loadReports())
  const add = useCallback((type: ReportType, lng: number, lat: number) => {
    const r: Report = { id: Date.now(), type, lng, lat, time: Date.now() }
    setReports(prev => { const n = [...prev, r]; saveReports(n); return n })
  }, [])
  const remove = useCallback((id: number) => {
    setReports(prev => { const n = prev.filter(r => r.id !== id); saveReports(n); return n })
  }, [])
  return { reports, add, remove }
}
