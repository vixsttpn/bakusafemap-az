// Baku Safe Map Analytics
type EvtName = 'map_view'|'route_start'|'route_end'|'report_add'|'search'|'voice_toggle'|'geo_update'|'error'

const events: Array<{name:EvtName;props?:any;t:number}> = []

export function track(name: EvtName, props?: Record<string, unknown>) {
  events.push({ name, props, t: Date.now() })
  if (process.env.NODE_ENV === 'development') {
    console.debug('[BSM Analytics]', name, props)
  }
}

export function getEvents() { return [...events] }
export function clearEvents() { events.splice(0) }
