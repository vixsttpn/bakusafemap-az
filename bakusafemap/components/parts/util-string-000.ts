// util-string-000
export const cap = (s:string) => s.charAt(0).toUpperCase() + s.slice(1)
export const trunc = (s:string, n=40) => s.length > n ? s.slice(0,n) + '...' : s
export const slugify = (s:string) => s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')
