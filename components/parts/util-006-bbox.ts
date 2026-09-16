// bbox utility
export function bbox(coords:[number,number][]) { const lngs=coords.map(c=>c[0]); const lats=coords.map(c=>c[1]); return [[Math.min(...lngs),Math.min(...lats)],[Math.max(...lngs),Math.max(...lats)]] as [[number,number],[number,number]] }
