// debounce utility
export function debounce<T extends(...a:any[])=>any>(fn:T,ms:number) { let t:any; return (...a:Parameters<T>) => { clearTimeout(t); t=setTimeout(()=>fn(...a),ms) } }
