'use client'

import { useState, useEffect, useRef } from 'react'

export interface GeoPos { lng: number; lat: number; accuracy: number; speed?: number; heading?: number }

export function useGeoposition(enabled = true) {
  const [pos, setPos] = useState<GeoPos | null>(null)
  const [error, setError] = useState<string | null>(null)
  const watchRef = useRef<number | null>(null)

  useEffect(() => {
    if (!enabled || typeof navigator === 'undefined') return
    watchRef.current = navigator.geolocation.watchPosition(
      ({ coords }) => {
        if (coords.accuracy > 35) return
        setPos({ lng: coords.longitude, lat: coords.latitude, accuracy: coords.accuracy, speed: coords.speed ?? undefined, heading: coords.heading ?? undefined })
      },
      (err) => setError(err.message),
      { enableHighAccuracy: true, maximumAge: 0, timeout: 10000 }
    )
    return () => { if (watchRef.current !== null) navigator.geolocation.clearWatch(watchRef.current) }
  }, [enabled])

  return { pos, error }
}

