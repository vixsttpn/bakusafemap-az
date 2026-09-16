// util-dom-000
export const qs = (sel:string, el?:Element) => (el||document).querySelector(sel)
export const qsa = (sel:string, el?:Element) => [...(el||document).querySelectorAll(sel)]
export const addClass = (el:Element, ...cls:string[]) => el.classList.add(...cls)
export const removeClass = (el:Element, ...cls:string[]) => el.classList.remove(...cls)
export const toggleClass = (el:Element, cls:string) => el.classList.toggle(cls)
