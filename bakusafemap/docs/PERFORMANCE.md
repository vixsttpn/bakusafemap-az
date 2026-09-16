# Performance

## Targets
- 60 FPS MapLibre rendering
- <35m GPS accuracy
- LCP < 2.5s
- CLS < 0.1
- FID < 100ms

## Techniques
- transform-only animations
- will-change: transform
- translate3d for GPU layer
- backface-visibility: hidden
- content-visibility: auto
- IntersectionObserver for reveals
- RAF throttle 16.67ms
- AbortController for fetch
- debounce 280ms search
- Trail filter dist < 2m
- accuracy > 35m skip
