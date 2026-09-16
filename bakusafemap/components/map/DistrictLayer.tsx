'use client'
// 12 Baku Districts data - approximate polygon centers
export const BAKU_DISTRICTS = [
  { id: 'nasimi', name: 'Насими', center: [49.845, 40.378], color: '#1A73E8' },
  { id: 'yasamal', name: 'Ясамал', center: [49.823, 40.374], color: '#007AFF' },
  { id: 'narimanov', name: 'Нариманов', center: [49.838, 40.390], color: '#34d399' },
  { id: 'sabail', name: 'Сабаил', center: [49.855, 40.369], color: '#FF9500' },
  { id: 'nizami', name: 'Низами', center: [49.862, 40.379], color: '#8E8E93' },
  { id: 'khatai', name: 'Хатаи', center: [49.887, 40.382], color: '#FF3B30' },
  { id: 'surakhani', name: 'Сураханы', center: [49.944, 40.392], color: '#6366f1' },
  { id: 'binagadi', name: 'Бинагади', center: [49.821, 40.417], color: '#ec4899' },
  { id: 'garadagh', name: 'Гарадаг', center: [49.912, 40.318], color: '#14b8a6' },
  { id: 'khazar', name: 'Хазар', center: [50.025, 40.428], color: '#f59e0b' },
  { id: 'sabunchu', name: 'Сабунчу', center: [49.936, 40.431], color: '#10b981' },
  { id: 'pirallahi', name: 'Пираллахи', center: [50.050, 40.465], color: '#3b82f6' },
] as const

export type DistrictId = typeof BAKU_DISTRICTS[number]['id']
