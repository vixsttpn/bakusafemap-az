'use client'
// Baku Safe Map Analytics

const q: any[] = []

export const trackMapView = (p?: any) => q.push({name:'trackMapView',p,t:Date.now()})
export const trackRoute = (p?: any) => q.push({name:'trackRoute',p,t:Date.now()})
export const trackReport = (p?: any) => q.push({name:'trackReport',p,t:Date.now()})
export const trackSearch = (p?: any) => q.push({name:'trackSearch',p,t:Date.now()})
export const trackVoice = (p?: any) => q.push({name:'trackVoice',p,t:Date.now()})
export const trackGeolocation = (p?: any) => q.push({name:'trackGeolocation',p,t:Date.now()})
export const trackError = (p?: any) => q.push({name:'trackError',p,t:Date.now()})
export const trackPerf = (p?: any) => q.push({name:'trackPerf',p,t:Date.now()})
export const trackShare = (p?: any) => q.push({name:'trackShare',p,t:Date.now()})
export const trackInstall = (p?: any) => q.push({name:'trackInstall',p,t:Date.now()})