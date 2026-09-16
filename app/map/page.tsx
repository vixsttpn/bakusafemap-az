'use client'
import { useEffect, useRef, useState, useCallback } from 'react'
import 'maplibre-gl/dist/maplibre-gl.css'
import { FABZoomIn, FABZoomOut, FABLocate, FABReport, FABVoice } from '@/components/ui/FAB'
import { IconSearch, IconClose, IconShield, IconDanger, IconPolice, IconAccident, IconRepair, IconNavigation, IconStop, IconCar } from '@/components/ui/Icons'
import { Report, ReportType, REPORT_COLORS, REPORT_LABELS, REPORT_BG, dist2, formatDist, formatDur, loadReports, saveReports, BAKU_CENTER, RouteStep } from '@/lib/mapUtils'
import { speak, setVoice, getVoice } from '@/lib/voice'

interface UserPos {
  lng: number
  lat: number
  speed?: number
  accuracy?: number
  heading?: number
}

interface Suggestion {
  lon: string
  lat: string
  display_name: string
}

export default function MapPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<any>(null)
  const userMarkerRef = useRef<any>(null)
  const destMarkerRef = useRef<any>(null)
  const reportMarkersRef = useRef<Map<number, any>>(new Map())
  const watchRef = useRef<number | null>(null)
  const trail = useRef<[number,number][]>([])
  const abortRef = useRef<AbortController | null>(null)

  const [pos, setPos] = useState<UserPos | null>(null)
  const [info, setInfo] = useState({ speed: 0, accuracy: 0 })
  const [reports, setReports] = useState<Report[]>([])
  const [showReport, setShowReport] = useState(false)
  const [navActive, setNavActive] = useState(false)
  const [routeSteps, setRouteSteps] = useState<RouteStep[]>([])
  const [curStep, setCurStep] = useState(0)
  const [voiceOn, setVoiceOn] = useState(false)
  const [q, setQ] = useState('')
  const [sug, setSug] = useState<Suggestion[]>([])
  const [searching, setSearching] = useState(false)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [following, setFollowing] = useState(false)
  const [coord, setCoord] = useState({ lat: 40.4093, lng: 49.8671 })

  // --- MAP INIT ---
  useEffect(() => {
    if (!containerRef.current) return
    let ml: any = null

    import('maplibre-gl').then(mod => {
      ml = mod.default
      if (!containerRef.current) return

      const map = new ml.Map({
        container: containerRef.current,
        style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
        center: BAKU_CENTER,
        zoom: 14.5,
        attributionControl: false,
        antialias: true,
        pitch: 0,
        bearing: 0,
      })

      mapRef.current = map

      map.on('load', () => {
        setMapLoaded(true)

        // Route source
        map.addSource('route', {
          type: 'geojson',
          data: { type: 'FeatureCollection', features: [] }
        })
        map.addLayer({
          id: 'route-line',
          type: 'line',
          source: 'route',
          layout: { 'line-cap': 'round', 'line-join': 'round' },
          paint: {
            'line-color': '#1A73E8',
            'line-width': 6,
            'line-opacity': 0.92,
            'line-dasharray': [12, 0]
          }
        })
        map.addLayer({
          id: 'route-glow',
          type: 'line',
          source: 'route',
          layout: { 'line-cap': 'round', 'line-join': 'round' },
          paint: {
            'line-color': '#1A73E8',
            'line-width': 14,
            'line-opacity': 0.12,
            'line-blur': 6
          }
        })

        // Load saved reports
        const saved = loadReports()
        setReports(saved)
        saved.forEach(r => addReportMarker(r, ml, map))
      })

      map.on('move', () => {
        const c = map.getCenter()
        setCoord({ lat: +c.lat.toFixed(4), lng: +c.lng.toFixed(4) })
      })

      // Geolocation
      if (navigator.geolocation) {
        watchRef.current = navigator.geolocation.watchPosition(
          geoSuccess(ml, map),
          () => {},
          { enableHighAccuracy: true, maximumAge: 0, timeout: 10000 }
        )
      }
    })

    return () => {
      if (watchRef.current !== null) navigator.geolocation.clearWatch(watchRef.current)
      if (mapRef.current) mapRef.current.remove()
    }
  }, [])

  const geoSuccess = (ml: any, map: any) => (p: GeolocationPosition) => {
    const { longitude: lng, latitude: lat, speed, accuracy, heading } = p.coords
    if (accuracy > 35) return

    // Trail / heading calc
    const last = trail.current[trail.current.length - 1]
    if (last && dist2([lng, lat], last) < 2) return
    trail.current = [...trail.current.slice(-5), [lng, lat]]

    const hdg = heading !== null && heading !== undefined
      ? heading
      : trail.current.length >= 2
        ? Math.atan2(
            lng - trail.current[trail.current.length-2][0],
            lat - trail.current[trail.current.length-2][1]
          ) * 180 / Math.PI
        : 0

    const newPos = { lng, lat, speed: speed || 0, accuracy, heading: hdg }
    setPos(newPos)
    setInfo({ speed: Math.round((speed || 0) * 3.6), accuracy: Math.round(accuracy) })

    // User marker
    if (!userMarkerRef.current) {
      const el = document.createElement('div')
      el.style.cssText = `
        width:28px;height:28px;border-radius:50%;
        background:#1A73E8;border:3px solid white;
        box-shadow:0 2px 12px rgba(26,115,232,0.5);
        position:relative;
      `
      // Pulse rings
      const ring1 = document.createElement('div')
      ring1.className = 'pulse-ring'
      ring1.style.cssText = `
        position:absolute;inset:-10px;border-radius:50%;
        background:rgba(26,115,232,0.25);pointer-events:none;
      `
      const ring2 = document.createElement('div')
      ring2.className = 'pulse-ring-2'
      ring2.style.cssText = `
        position:absolute;inset:-16px;border-radius:50%;
        background:rgba(26,115,232,0.12);pointer-events:none;
      `
      el.appendChild(ring1)
      el.appendChild(ring2)
      userMarkerRef.current = new ml.Marker({ element: el, anchor: 'center' })
        .setLngLat([lng, lat])
        .addTo(map)
    } else {
      userMarkerRef.current.setLngLat([lng, lat])
    }

    // Follow if nav
    if (following || navActive) {
      map.easeTo({
        center: [lng, lat],
        zoom: 18,
        pitch: 65,
        bearing: hdg,
        duration: 800,
      })
    }
  }

  const addReportMarker = (r: Report, ml: any, map: any) => {
    if (reportMarkersRef.current.has(r.id)) return
    const el = document.createElement('div')
    el.style.cssText = `
      width:14px;height:14px;border-radius:50%;
      background:${REPORT_COLORS[r.type]};border:2px solid white;
      box-shadow:0 2px 8px rgba(0,0,0,0.2);cursor:pointer;
    `
    const m = new ml.Marker({ element: el, anchor: 'center' })
      .setLngLat([r.lng, r.lat])
      .addTo(map)
    reportMarkersRef.current.set(r.id, m)
  }

  // --- SEARCH ---
  const doSearch = useCallback(async (val: string) => {
    if (val.length < 3) { setSug([]); return }
    if (abortRef.current) abortRef.current.abort()
    abortRef.current = new AbortController()
    setSearching(true)
    try {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(val+' Baku')}&limit=5&viewbox=49.52,40.26,50.12,40.57&bounded=0&accept-language=az,ru`
      const res = await fetch(url, { signal: abortRef.current.signal })
      const data = await res.json()
      setSug(data)
    } catch {}
    setSearching(false)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => doSearch(q), 280)
    return () => clearTimeout(timer)
  }, [q, doSearch])

  // --- ROUTE ---
  const goRoute = async (to: { lng: number; lat: number; name: string }) => {
    if (!pos || !mapRef.current) return
    setSug([])
    setQ(to.name)

    // Destination marker
    if (typeof window !== 'undefined') {
      import('maplibre-gl').then(mod => {
        const ml = mod.default
        if (destMarkerRef.current) destMarkerRef.current.remove()
        const el = document.createElement('div')
        el.innerHTML = `<svg width="32" height="40" viewBox="0 0 32 40" fill="none">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 10.512 14.222 23.186 15.282 24.122a1 1 0 001.436 0C17.778 39.186 32 26.512 32 16 32 7.163 24.837 0 16 0z" fill="#1A73E8"/>
          <circle cx="16" cy="16" r="6" fill="white"/>
        </svg>`
        destMarkerRef.current = new ml.Marker({ element: el, anchor: 'bottom' })
          .setLngLat([to.lng, to.lat])
          .addTo(mapRef.current)
      })
    }

    try {
      const url = `https://router.project-osrm.org/route/v1/driving/${pos.lng},${pos.lat};${to.lng},${to.lat}?overview=full&geometries=geojson&steps=true`
      const res = await fetch(url)
      const data = await res.json()
      const route = data.routes[0]
      if (!route) return

      // Set route on map
      const src = mapRef.current.getSource('route')
      if (src) {
        src.setData({
          type: 'FeatureCollection',
          features: [{
            type: 'Feature',
            properties: {},
            geometry: route.geometry
          }]
        })
      }

      // Steps
      const steps: RouteStep[] = route.legs[0].steps.map((s: any) => ({
        text: s.name
          ? `Двигайтесь по ${s.name}`
          : s.maneuver?.instruction || 'Продолжайте',
        dist: s.distance,
        location: s.maneuver.location,
      }))
      setRouteSteps(steps)
      setCurStep(0)
      setNavActive(true)

      const distKm = (route.distance / 1000).toFixed(1)
      const durMin = Math.round(route.duration / 60)
      speak(`Маршрут ${distKm} километров, ${durMin} минут`)

      // Fit bounds
      const coords = route.geometry.coordinates
      const lngs = coords.map((c: number[]) => c[0])
      const lats = coords.map((c: number[]) => c[1])
      mapRef.current.fitBounds(
        [[Math.min(...lngs)-0.002, Math.min(...lats)-0.002], [Math.max(...lngs)+0.002, Math.max(...lats)+0.002]],
        { padding: 60, duration: 1000 }
      )
    } catch (e) {
      console.error('Route error', e)
    }
  }

  const stopNav = () => {
    setNavActive(false)
    setRouteSteps([])
    setCurStep(0)
    if (destMarkerRef.current) { destMarkerRef.current.remove(); destMarkerRef.current = null }
    const src = mapRef.current?.getSource('route')
    if (src) src.setData({ type: 'FeatureCollection', features: [] })
    if (mapRef.current) {
      mapRef.current.easeTo({ pitch: 0, bearing: 0, zoom: 14.5, center: BAKU_CENTER, duration: 800 })
    }
  }

  // --- REPORTS ---
  const addReport = (type: ReportType) => {
    import('maplibre-gl').then(mod => {
      const ml = mod.default
      const center = pos
        ? { lng: pos.lng, lat: pos.lat }
        : { lng: BAKU_CENTER[0], lat: BAKU_CENTER[1] }
      const r: Report = {
        id: Date.now(),
        lng: center.lng,
        lat: center.lat,
        type,
        time: Date.now(),
      }
      const updated = [...reports, r]
      setReports(updated)
      saveReports(updated)
      if (mapRef.current) addReportMarker(r, ml, mapRef.current)
      setShowReport(false)
    })
  }

  const locateUser = () => {
    if (pos && mapRef.current) {
      mapRef.current.easeTo({ center: [pos.lng, pos.lat], zoom: 16, pitch: 0, duration: 600 })
      setFollowing(true)
    }
  }

  const toggleVoice = () => {
    const next = !voiceOn
    setVoiceOn(next)
    setVoice(next)
    if (next) speak('Голосовые подсказки включены')
  }

  return (
    <div style={{ position: 'fixed', inset: 0, background: '#e8e0d8' }}>

      {/* MAP CANVAS */}
      <div ref={containerRef} style={{ position: 'absolute', inset: 0 }} />

      {/* TOP BAR */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 16px',
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
        zIndex: 20,
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <IconShield color="#1A73E8" size={22} />
          <span style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 16, color: '#101828', letterSpacing: -0.5 }}>
            BAKU SAFE
          </span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 4,
            padding: '3px 10px', borderRadius: 20,
            background: '#fee2e2', fontSize: 11, fontWeight: 600, color: '#FF3B30',
            fontFamily: 'Fragment Mono,monospace',
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF3B30', animation: 'pulseRing 2s ease infinite' }} />
            LIVE
          </div>
          <span style={{ fontFamily: 'Fragment Mono,monospace', fontSize: 11, color: '#8A8A8A' }}>
            {coord.lat}°N / {coord.lng}°E
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {info.speed > 0 && (
            <div style={{ padding: '3px 10px', borderRadius: 20, background: '#dbeafe', fontSize: 11, fontWeight: 700, color: '#1A73E8' }}>
              {info.speed} км/ч
            </div>
          )}
          {info.accuracy > 0 && (
            <div style={{ padding: '3px 10px', borderRadius: 20, background: '#f3f4f6', fontSize: 11, color: '#8A8A8A', fontFamily: 'Fragment Mono,monospace' }}>
              ±{info.accuracy}м
            </div>
          )}
        </div>
      </div>

      {/* SEARCH BAR */}
      <div style={{ position: 'absolute', top: 64, left: 12, right: 12, zIndex: 15 }}>
        <div className="search-container" style={{
          background: 'white',
          borderRadius: 24,
          display: 'flex',
          alignItems: 'center',
          padding: '0 8px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.10)',
          height: 48,
        }}>
          <IconSearch color="#8A8A8A" size={20} />
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Escape') { setQ(''); setSug([]) }
              if (e.key === 'Enter' && sug.length > 0) {
                const s = sug[0]
                goRoute({ lng: +s.lon, lat: +s.lat, name: s.display_name.split(',')[0] })
              }
            }}
            placeholder="Куда едем?"
            style={{
              flex: 1, border: 'none', outline: 'none',
              padding: '0 12px', fontSize: 14, color: '#101828',
              background: 'transparent', fontFamily: 'Inter,sans-serif',
            }}
          />
          {searching && (
            <div style={{ width: 16, height: 16, borderRadius: '50%', border: '2px solid #1A73E8', borderTopColor: 'transparent', animation: 'spin 0.6s linear infinite' }} />
          )}
          {q && (
            <button
              onClick={() => { setQ(''); setSug([]) }}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex' }}
            >
              <IconClose color="#8A8A8A" size={16} />
            </button>
          )}
          {!navActive && (
            <button
              onClick={() => sug.length > 0 && goRoute({ lng: +sug[0].lon, lat: +sug[0].lat, name: sug[0].display_name.split(',')[0] })}
              style={{
                background: '#101828', color: 'white', border: 'none',
                borderRadius: 16, padding: '6px 14px', fontSize: 12,
                fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap',
                fontFamily: 'Inter,sans-serif',
              }}
            >
              Найти
            </button>
          )}
        </div>

        {/* SUGGESTIONS */}
        {sug.length > 0 && (
          <div style={{
            marginTop: 4,
            background: 'white',
            borderRadius: 16,
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
            overflow: 'hidden',
            backdropFilter: 'blur(32px)',
            animation: 'fadeUp 0.3s cubic-bezier(0.16,1,0.3,1)',
          }}>
            {sug.map((s, i) => (
              <button
                key={i}
                onClick={() => goRoute({ lng: +s.lon, lat: +s.lat, name: s.display_name.split(',')[0] })}
                style={{
                  width: '100%', textAlign: 'left',
                  padding: '12px 16px', border: 'none',
                  background: 'none', cursor: 'pointer',
                  borderBottom: i < sug.length-1 ? '1px solid #f0f0f0' : 'none',
                  fontSize: 13, color: '#101828',
                  fontFamily: 'Inter,sans-serif',
                  display: 'flex', alignItems: 'center', gap: 10,
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#f8f9fa')}
                onMouseLeave={e => (e.currentTarget.style.background = 'none')}
              >
                <IconPin color="#1A73E8" size={16} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: 13 }}>{s.display_name.split(',')[0]}</div>
                  <div style={{ fontSize: 11, color: '#8A8A8A', marginTop: 1 }}>
                    {s.display_name.split(',').slice(1,3).join(',')}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* FAB STACK */}
      <div style={{
        position: 'absolute', right: 12, top: 120,
        display: 'flex', flexDirection: 'column', gap: 10, zIndex: 15,
      }}>
        <FABZoomIn onClick={() => mapRef.current?.zoomIn({ duration: 200 })} />
        <FABZoomOut onClick={() => mapRef.current?.zoomOut({ duration: 200 })} />
        <div style={{ height: 6 }} />
        <FABLocate onClick={locateUser} active={following} />
        <FABReport onClick={() => setShowReport(true)} />
        <FABVoice onClick={toggleVoice} active={voiceOn} />
      </div>

      {/* NAVIGATION SHEET */}
      {navActive && routeSteps.length > 0 && (
        <div style={{
          position: 'absolute', bottom: 12, left: 12, right: 12,
          background: 'white',
          borderRadius: 20,
          padding: '16px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
          zIndex: 20,
          animation: 'springIn 0.5s cubic-bezier(0.34,1.56,0.64,1)',
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <div style={{ background: '#1A73E8', borderRadius: 8, padding: '4px 8px' }}>
                  <IconNavigation color="white" size={16} />
                </div>
                <span style={{ fontSize: 11, color: '#8A8A8A', fontFamily: 'Fragment Mono,monospace' }}>
                  МАРШРУТ АКТИВЕН
                </span>
              </div>
              <p style={{
                fontSize: 16, fontWeight: 700, color: '#101828',
                fontFamily: 'Inter,sans-serif', margin: 0, lineHeight: 1.3,
              }}>
                {routeSteps[curStep]?.text}
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                <span style={{
                  fontSize: 13, color: '#1A73E8', fontWeight: 600,
                  background: '#dbeafe', borderRadius: 8, padding: '2px 8px',
                }}>
                  {formatDist(routeSteps[curStep]?.dist || 0)}
                </span>
                <span style={{ fontSize: 12, color: '#8A8A8A', fontFamily: 'Fragment Mono,monospace', display: 'flex', alignItems: 'center' }}>
                  {formatDur(routeSteps.slice(curStep).reduce((s, x) => s + x.dist / 10, 0))}
                </span>
              </div>
            </div>
            <button
              onClick={stopNav}
              style={{
                background: '#101828', color: 'white', border: 'none',
                borderRadius: 8, padding: '8px 14px', fontSize: 12,
                fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
                fontFamily: 'Inter,sans-serif',
              }}
            >
              <IconStop color="white" size={14} />
              Стоп
            </button>
          </div>

          {/* Steps preview */}
          {routeSteps.length > curStep + 1 && (
            <div style={{
              marginTop: 12,
              padding: '8px 12px',
              background: '#f8f9fa',
              borderRadius: 10,
              fontSize: 12,
              color: '#8A8A8A',
              fontFamily: 'Inter,sans-serif',
            }}>
              Затем: {routeSteps[curStep + 1]?.text}
            </div>
          )}
        </div>
      )}

      {/* REPORT MODAL */}
      {showReport && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(4px)',
          zIndex: 30,
          display: 'flex',
          alignItems: 'flex-end',
        }}
          onClick={() => setShowReport(false)}
        >
          <div
            style={{
              width: '100%',
              background: 'white',
              borderRadius: '24px 24px 0 0',
              padding: '24px 16px',
              animation: 'springIn 0.4s cubic-bezier(0.34,1.56,0.64,1)',
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Sheet handle */}
            <div style={{ width: 36, height: 4, background: '#e0e0e0', borderRadius: 2, margin: '0 auto 20px' }} />
            <h3 style={{
              fontSize: 17, fontWeight: 700, color: '#101828',
              fontFamily: 'Inter,sans-serif', margin: '0 0 16px',
            }}>
              Что сообщить?
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
              {(['danger','police','accident','repair'] as ReportType[]).map(type => (
                <button
                  key={type}
                  onClick={() => addReport(type)}
                  style={{
                    background: REPORT_BG[type],
                    border: 'none',
                    borderRadius: 12,
                    padding: '16px',
                    display: 'flex', alignItems: 'center', gap: 10,
                    cursor: 'pointer',
                    height: 64,
                    fontFamily: 'Inter,sans-serif',
                    transition: 'transform 150ms cubic-bezier(0.34,1.56,0.64,1)',
                  }}
                  onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.96)')}
                  onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  {type === 'danger' && <IconDanger size={22} />}
                  {type === 'police' && <IconPolice size={22} />}
                  {type === 'accident' && <IconAccident size={22} />}
                  {type === 'repair' && <IconRepair size={22} />}
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#101828' }}>
                    {REPORT_LABELS[type]}
                  </span>
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowReport(false)}
              style={{
                width: '100%', background: '#101828', color: 'white',
                border: 'none', borderRadius: 24, height: 44,
                fontSize: 14, fontWeight: 600, cursor: 'pointer',
                fontFamily: 'Inter,sans-serif',
              }}
            >
              Отмена
            </button>
          </div>
        </div>
      )}

      {/* BOTTOM STATUS */}
      {!navActive && (
        <div style={{
          position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', alignItems: 'center', gap: 10, zIndex: 10,
          background: 'rgba(255,255,255,0.88)',
          backdropFilter: 'blur(16px)',
          borderRadius: 20,
          padding: '8px 16px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          fontSize: 11, color: '#8A8A8A',
          fontFamily: 'Fragment Mono,monospace',
          whiteSpace: 'nowrap',
        }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#34d399' }} />
          MapLibre GL · Voyager
          <span style={{ color: '#1A73E8' }}>{reports.length} репортов</span>
          <span>60 FPS</span>
        </div>
      )}
    </div>
  )
}

// missing pin icon
function IconPin({ color = '#1A73E8', size = 24 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" stroke={color}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
