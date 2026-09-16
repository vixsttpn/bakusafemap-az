// util-array-000
export const last = <T>(a:T[]) => a[a.length-1]
export const first = <T>(a:T[]) => a[0]
export const uniq = <T>(a:T[]) => [...new Set(a)]
export const chunk = <T>(a:T[], n:number) => Array.from({length:Math.ceil(a.length/n)},(_,i)=>a.slice(i*n,(i+1)*n))
export const sortBy = <T>(a:T[], key:keyof T) => [...a].sort((x,y)=>x[key]>y[key]?1:-1)
