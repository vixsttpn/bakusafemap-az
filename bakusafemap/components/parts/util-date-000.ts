// util-date-000
export const now = () => Date.now()
export const age = (t:number) => Date.now() - t
export const expired = (t:number, ttl:number) => age(t) > ttl
export const fmtDate = (t:number) => new Date(t).toLocaleDateString('ru-RU')
export const fmtTime = (t:number) => new Date(t).toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'})
