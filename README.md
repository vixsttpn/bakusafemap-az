# Baku Safe Map v8

Waze-like safety navigation for Baku, Azerbaijan.

## Tech Stack
- **Next.js 14** — App Router, static export
- **MapLibre GL** — Vector maps with Voyager tiles
- **OSRM** — Open Source Routing Machine
- **Nominatim** — OpenStreetMap geocoding
- **TypeScript** — Full type safety
- **Tailwind CSS** — Utility-first styling

## Features
- Live reports: Danger, Police, Accident, Repair
- Turn-by-turn navigation (Russian voice: Pavel/Dmitry)
- Geolocation with noise filtering (±35m accuracy)
- Search with autocomplete (debounced 280ms)
- 12 Baku districts
- PWA installable
- 60 FPS MapLibre GL rendering

## Design
- ORYZO-level premium UI
- Glassmorphism + Cutting Mat aesthetic
- Syne 800 + Instrument Serif + Fragment Mono
- Dark #0A0A0A + Beige #F5F1E8 + Mint #D9DFCC
- Animated laptop mockup with mouse-lerp 0.08

## Deploy
```bash
npm run build
npx wrangler pages deploy out --project-name bakusafemap-az
```

## Colors
| Name | Hex | Usage |
|------|-----|-------|
| Primary | `#1A73E8` | Routes, CTAs |
| Danger | `#FF3B30` | Danger reports |
| Police | `#007AFF` | Police reports |
| Accident | `#FF9500` | Accident reports |
| Repair | `#8E8E93` | Road repair |
| Yellow | `#E8FF59` | Accents, Waze word |
| Orange | `#FF6A00` | Starburst |
