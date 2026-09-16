
'use client'
import React, { createContext, useContext, useRef, useState } from 'react'

interface MapCtx {
  mapRef: React.RefObject<any>
  loaded: boolean
  setLoaded: (v: boolean) => void
}

const Ctx = createContext<MapCtx | null>(null)

export function MapProvider({ children }: { children: React.ReactNode }) {
  const mapRef = useRef<any>(null)
  const [loaded, setLoaded] = useState(false)
  return <Ctx.Provider value={{ mapRef, loaded, setLoaded }}>{children}</Ctx.Provider>
}

export const useMap = () => { const ctx = useContext(Ctx); if (!ctx) throw new Error('useMap outside MapProvider'); return ctx }
