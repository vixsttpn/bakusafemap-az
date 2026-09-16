# Architecture

Baku Safe Map v8 uses Next.js 14 static export.

## Data Flow
1. User opens /map
2. MapLibre GL renders Voyager tiles
3. Geolocation watchPosition starts
4. Reports loaded from localStorage

## Components
- `/app/page.tsx` — Landing ORYZO
- `/app/map/page.tsx` — Waze map
- `/components/ui/` — Atoms
- `/components/landing/` — Sections
- `/components/map/` — Map layers
- `/components/safety/` — Safety
- `/lib/` — Utilities
