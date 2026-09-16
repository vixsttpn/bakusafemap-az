// GPU acceleration for 60fps
export const PERF_CONFIG = {
  fps: 60,
  frameBudget: 16.67,
}

export function gpuAccelerate(el: HTMLElement) {
  el.style.transform = el.style.transform || 'translateZ(0)'
  el.style.backfaceVisibility = 'hidden'
  el.style.willChange = 'transform'
}

export function demoteWillChange(el: HTMLElement, delay = 1200) {
  setTimeout(() => { el.style.willChange = 'auto' }, delay)
}

class RAFEngine {
  private callbacks = new Set<() => void>()
  private running = false
  private lastTime = 0

  add(cb: () => void) {
    this.callbacks.add(cb)
    if (!this.running) this.start()
    return () => this.callbacks.delete(cb)
  }

  private start() {
    this.running = true
    const loop = (t: number) => {
      if (t - this.lastTime >= PERF_CONFIG.frameBudget) {
        this.lastTime = t
        this.callbacks.forEach(cb => cb())
      }
      if (this.callbacks.size > 0) requestAnimationFrame(loop)
      else this.running = false
    }
    requestAnimationFrame(loop)
  }
}

export const rafEngine = new RAFEngine()

export function createRevealObserver(options = {}) {
  return new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible')
      }
    })
  }, { rootMargin: '0px 0px -60px 0px', threshold: 0.1, ...options })
}
