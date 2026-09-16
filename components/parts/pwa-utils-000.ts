'use client'
// PWA service worker registration

export function registerSW() {
  if (typeof window === 'undefined') return
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(reg => {
          reg.addEventListener('updatefound', () => {
            const worker = reg.installing
            worker?.addEventListener('statechange', () => {
              if (worker.state === 'installed' && navigator.serviceWorker.controller) {
                worker.postMessage({ type: 'SKIP_WAITING' })
              }
            })
          })
        })
        .catch(console.error)
    })
  }
}

export function isStandalone() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(display-mode: standalone)').matches
    || (window.navigator as any).standalone === true
}

export function getPWADisplayMode() {
  if (typeof window === 'undefined') return 'browser'
  if (isStandalone()) return 'standalone'
  return 'browser'
}
