export type ReportType = 'danger' | 'police' | 'accident' | 'repair'

export interface Report {
  id: number
  lng: number
  lat: number
  type: ReportType
  time: number
}

export interface RouteStep {
  text: string
  dist: number
  location: [number, number]
}

export const REPORT_COLORS: Record<ReportType, string> = {
  danger: '#FF3B30',
  police: '#007AFF',
  accident: '#FF9500',
  repair: '#8E8E93',
}

export const REPORT_LABELS: Record<ReportType, string> = {
  danger: 'Опасность',
  police: 'Полиция',
  accident: 'Авария',
  repair: 'Ремонт',
}

export const REPORT_BG: Record<ReportType, string> = {
  danger: '#fee2e2',
  police: '#dbeafe',
  accident: '#fef3c7',
  repair: '#f3f4f6',
}

export function dist2(a: [number,number], b: [number,number]): number {
  const R = 6371000
  const lat1 = a[1] * Math.PI/180
  const lat2 = b[1] * Math.PI/180
  const dLat = (b[1]-a[1]) * Math.PI/180
  const dLng = (b[0]-a[0]) * Math.PI/180
  const aa = Math.sin(dLat/2)**2 + Math.cos(lat1)*Math.cos(lat2)*Math.sin(dLng/2)**2
  return R * 2 * Math.atan2(Math.sqrt(aa), Math.sqrt(1-aa))
}

export function formatDist(m: number): string {
  if (m < 1000) return `${Math.round(m)} м`
  return `${(m/1000).toFixed(1)} км`
}

export function formatDur(s: number): string {
  const m = Math.round(s/60)
  if (m < 60) return `${m} мин`
  const h = Math.floor(m/60)
  return `${h} ч ${m%60} мин`
}

export function loadReports(): Report[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem('bsm_rep')
    if (!raw) return []
    const arr = JSON.parse(raw) as Report[]
    // keep only last 24 hrs
    const now = Date.now()
    return arr.filter(r => now - r.time < 24*60*60*1000)
  } catch { return [] }
}

export function saveReports(reports: Report[]) {
  if (typeof window === 'undefined') return
  try { localStorage.setItem('bsm_rep', JSON.stringify(reports)) } catch {}
}

export const BAKU_CENTER: [number,number] = [49.854, 40.376]
