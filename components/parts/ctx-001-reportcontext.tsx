
'use client'
import React, { createContext, useContext, useState, useCallback } from 'react'
import { Report, loadReports, saveReports } from '@/lib/mapUtils'

interface ReportCtx {
  reports: Report[]
  addReport: (r: Omit<Report,'id'|'time'>) => void
  clearReports: () => void
}

const Ctx = createContext<ReportCtx | null>(null)

export function ReportProvider({ children }: { children: React.ReactNode }) {
  const [reports, setReports] = useState<Report[]>(() => loadReports())
  const addReport = useCallback((r: Omit<Report,'id'|'time'>) => {
    const full: Report = { ...r, id: Date.now(), time: Date.now() }
    setReports(prev => { const next = [...prev, full]; saveReports(next); return next })
  }, [])
  const clearReports = useCallback(() => { setReports([]); saveReports([]) }, [])
  return <Ctx.Provider value={{ reports, addReport, clearReports }}>{children}</Ctx.Provider>
}

export const useReports = () => { const ctx = useContext(Ctx); if (!ctx) throw new Error('useReports outside ReportProvider'); return ctx }
