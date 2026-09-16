// types-geo
export interface GeoPos { lng:number; lat:number; accuracy:number; speed?:number; heading?:number; altitude?:number }
export interface GeoBounds { north:number; south:number; east:number; west:number }
export type GeoPermission = 'granted'|'denied'|'prompt'|'unknown'
