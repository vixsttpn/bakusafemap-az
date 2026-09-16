// throttle utility
export function throttle<T extends(...a:any[])=>any>(fn:T,ms:number) { let last=0; return (...a:Parameters<T>) => { const now=Date.now(); if(now-last>=ms){last=now;fn(...a)} } }
