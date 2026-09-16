'use client'

import { useEffect, useRef, useState } from 'react'

export function useMapLibre(containerRef: React.RefObject<HTMLDivElement>, center: [number,number] = [49.854,40.376], zoom = 14.5) {
  const mapRef = useRef<any>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return
    import('maplibre-gl').then(({ default: ml }) => {
      const map = new ml.Map({
        container: containerRef.current!,
        style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
        center,
        zoom,
        attributionControl: false,
        antialias: true,
      })
      mapRef.current = map
      map.on('load', () => setLoaded(true))
    })
    return () => { mapRef.current?.remove() }
  }, [])

  return { mapRef, loaded }
}

