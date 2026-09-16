'use client'
import { useEffect, useRef, useState } from 'react'
import { IconShield, IconDanger, IconPolice, IconAccident, IconRepair, IconNavigation, IconCar, IconSearch, IconLocate, IconCheck, Starburst } from '@/components/ui/Icons'

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)
  const statsRef = useRef<HTMLDivElement>(null)
  const statsTriggered = useRef(false)
  const laptopRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouseX((e.clientX / window.innerWidth - 0.5) * 2)
      setMouseY((e.clientY / window.innerHeight - 0.5) * 2)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !statsTriggered.current) {
        statsTriggered.current = true
        countUp(setCount1, 580, 1400)
        countUp(setCount2, 60, 1000)
        countUp(setCount3, 35, 1200)
      }
    }, { threshold: 0.4 })
    if (statsRef.current) obs.observe(statsRef.current)
    return () => obs.disconnect()
  }, [])

  // Reveal on scroll
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { rootMargin: '0px 0px -60px 0px' })
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const laptopRotX = -mouseY * 4
  const laptopRotY = mouseX * 6

  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* ===== HEADER ===== */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 24px', height: 60,
        background: 'rgba(10,10,10,0.85)',
        backdropFilter: 'blur(24px) saturate(180%)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <IconShield color="#1A73E8" size={22} />
          <span style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 15, color: 'white', letterSpacing: -0.5 }}>
            BAKU SAFE
          </span>
        </div>

        <nav style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          {['Карта', 'Как работает', 'Репорты'].map(item => (
            <a key={item} href={item === 'Карта' ? '/map' : '#'} style={{
              color: 'rgba(255,255,255,0.6)', fontSize: 13, textDecoration: 'none',
              fontFamily: 'Inter,sans-serif',
              transition: 'color 150ms',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'white')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
            >{item}</a>
          ))}
        </nav>

        <a href="/map" style={{
          background: 'white', color: '#0A0A0A',
          padding: '8px 18px', borderRadius: 20, fontSize: 13, fontWeight: 600,
          textDecoration: 'none', fontFamily: 'Inter,sans-serif',
          transition: 'background 150ms',
        }}>
          Открыть карту
        </a>
      </header>

      {/* ===== HERO ===== */}
      <section style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '80px 24px 60px',
        overflow: 'hidden',
      }}>
        {/* Video BG / Mesh */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `
            radial-gradient(ellipse 70% 60% at 20% 30%, rgba(26,115,232,0.18) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 70%, rgba(255,107,0,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 80% 80% at 50% 50%, rgba(0,0,0,0) 0%, rgba(10,10,10,1) 100%)
          `,
          animation: 'gradientShift 12s ease infinite',
          backgroundSize: '200% 200%',
        }} />

        {/* Cutting mat grid overlay (dark) */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '28px 28px',
          animation: 'videoDrift 18s ease-in-out infinite',
        }} />

        {/* Noise */}
        <div className="noise-overlay" />

        {/* Starburst */}
        <div style={{
          position: 'absolute', top: '10%', right: '8%',
          opacity: 0.7,
        }}>
          <Starburst size={140} />
        </div>

        {/* BADGE */}
        <div className="chip-stagger" style={{ marginBottom: 32, zIndex: 2 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(26,115,232,0.15)',
            border: '1px solid rgba(26,115,232,0.3)',
            borderRadius: 20, padding: '6px 16px',
          }}>
            <div style={{ position: 'relative', width: 8, height: 8 }}>
              <div style={{
                position: 'absolute', inset: 0, borderRadius: '50%',
                background: '#FF3B30',
                animation: 'pulseRing 1.5s ease infinite',
              }} />
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF3B30', position: 'absolute' }} />
            </div>
            <span style={{
              fontSize: 12, fontWeight: 600, color: '#6BAAFF',
              fontFamily: 'Fragment Mono,monospace', letterSpacing: 0.5,
            }}>
              v8 · WAZE-LIKE BAKU · LIVE
            </span>
          </div>
        </div>

        {/* HERO TEXT - HUGE */}
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 900 }}>
          <h1 style={{ margin: 0 }}>
            {/* Ghost huge text behind */}
            <div style={{
              position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Syne,sans-serif', fontWeight: 800,
              fontSize: 'clamp(80px, 18vw, 220px)',
              color: 'transparent',
              WebkitTextStroke: '1.6px rgba(255,255,255,0.04)',
              letterSpacing: -6,
              lineHeight: 0.85,
              userSelect: 'none',
              whiteSpace: 'nowrap',
            }}>
              BAKU
            </div>

            {/* Main text */}
            <div style={{
              fontFamily: 'Syne,sans-serif', fontWeight: 800,
              fontSize: 'clamp(48px, 9vw, 110px)',
              color: 'white',
              letterSpacing: -3,
              lineHeight: 0.92,
              position: 'relative',
            }}>
              <span>Безопасный</span>
              <br />
              <span style={{
                fontFamily: 'Instrument Serif,serif',
                fontStyle: 'italic',
                fontWeight: 400,
                color: '#1A73E8',
                WebkitTextStroke: '0px',
              }}>Баку</span>
              <span style={{ color: 'white' }}> как</span>
              <br />
              <span style={{ color: 'white' }}>в </span>
              <span style={{ color: '#E8FF59' }}>Waze</span>
            </div>
          </h1>

          <p style={{
            marginTop: 28, fontSize: 17, color: 'rgba(255,255,255,0.55)',
            fontFamily: 'Inter,sans-serif', lineHeight: 1.6, maxWidth: 520, margin: '28px auto 0',
          }}>
            Репорты об авариях, полиции и ремонте дорог в реальном времени.
            Навигация с голосом по-русски. Геолокация ±35м точность.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 36, flexWrap: 'wrap' }}>
            <a href="/map" style={{
              background: 'white', color: '#0A0A0A',
              padding: '14px 32px', borderRadius: 24, fontSize: 15, fontWeight: 700,
              textDecoration: 'none', fontFamily: 'Inter,sans-serif',
              transition: 'transform 150ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 150ms ease',
              display: 'inline-block',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(255,255,255,0.2)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
            >
              Открыть карту
            </a>
            <a href="#how" style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'white',
              padding: '14px 28px', borderRadius: 24, fontSize: 15, fontWeight: 600,
              textDecoration: 'none', fontFamily: 'Inter,sans-serif',
              transition: 'background 150ms',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.13)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
            >
              Как работает
            </a>
          </div>
        </div>

        {/* LAPTOP FLOATING MOCKUP */}
        <div
          ref={laptopRef}
          style={{
            marginTop: 80, position: 'relative', zIndex: 2,
            transform: `perspective(1400px) rotateX(${laptopRotX + 6}deg) rotateY(${laptopRotY}deg)`,
            transition: 'transform 0.1s ease',
            animation: 'float 6s ease-in-out infinite',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Laptop body */}
          <div style={{
            width: 'min(760px, 90vw)',
            background: '#1a1a1a',
            borderRadius: '16px 16px 4px 4px',
            padding: '12px 12px 0',
            boxShadow: '0 40px 120px rgba(0,0,0,0.8), 0 0 60px rgba(26,115,232,0.15)',
          }}>
            {/* Screen bezel */}
            <div style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', background: '#0A0A0A' }}>
              {/* Camera dot */}
              <div style={{
                position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)',
                width: 6, height: 6, borderRadius: '50%', background: '#333', zIndex: 10,
              }} />

              {/* MAP PREVIEW */}
              <div style={{ height: 'min(420px, 55vw)', background: '#e8e0d8', position: 'relative', overflow: 'hidden' }}>
                {/* Voyager map simulation */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: '#F5F1E8',
                }}>
                  {/* Roads simulation */}
                  <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 760 420">
                    {/* Major roads - Babak prospekti */}
                    <path d="M0 210 Q190 200 380 210 Q570 220 760 210" stroke="#8A8A8A" strokeWidth="18" fill="none" opacity="0.6" />
                    <path d="M0 210 Q190 200 380 210 Q570 220 760 210" stroke="#F5F1E8" strokeWidth="12" fill="none" />
                    {/* Cross streets */}
                    <path d="M380 0 L380 420" stroke="#8A8A8A" strokeWidth="12" fill="none" opacity="0.5" />
                    <path d="M380 0 L380 420" stroke="#F5F1E8" strokeWidth="7" fill="none" />
                    <path d="M190 0 L190 420" stroke="#8A8A8A" strokeWidth="8" fill="none" opacity="0.3" />
                    <path d="M570 0 L570 420" stroke="#8A8A8A" strokeWidth="8" fill="none" opacity="0.3" />
                    {/* Green parks */}
                    <rect x="60" y="80" width="100" height="80" rx="8" fill="#D9DFCC" opacity="0.8" />
                    <rect x="580" y="270" width="120" height="90" rx="8" fill="#C8E6C9" opacity="0.7" />
                    <rect x="420" y="60" width="80" height="60" rx="6" fill="#D9DFCC" opacity="0.6" />
                    {/* Blue route */}
                    <path d="M60 340 Q150 300 250 240 Q340 190 450 170 Q560 150 680 140"
                      stroke="#1A73E8" strokeWidth="6" fill="none"
                      strokeLinecap="round"
                      style={{ filter: 'drop-shadow(0 0 8px rgba(26,115,232,0.6))' }}
                    />
                    {/* Route glow */}
                    <path d="M60 340 Q150 300 250 240 Q340 190 450 170 Q560 150 680 140"
                      stroke="#1A73E8" strokeWidth="14" fill="none" opacity="0.12" strokeLinecap="round"
                    />
                    {/* User dot */}
                    <circle cx="250" cy="240" r="14" fill="#1A73E8" />
                    <circle cx="250" cy="240" r="14" fill="#1A73E8" opacity="0.3" r="24">
                      <animate attributeName="r" values="14;28" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.3;0" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="250" cy="240" r="8" fill="white" />
                    {/* Danger marker */}
                    <circle cx="450" cy="170" r="8" fill="#FF3B30" stroke="white" strokeWidth="2" />
                    {/* Police marker */}
                    <circle cx="150" cy="310" r="8" fill="#007AFF" stroke="white" strokeWidth="2" />
                    {/* Destination pin */}
                    <path d="M680 140 C680 128 672 118 660 118 C648 118 640 128 640 140 C640 152 660 164 660 164 C660 164 680 152 680 140z"
                      fill="#1A73E8" />
                    <circle cx="660" cy="140" r="5" fill="white" />
                  </svg>

                  {/* Search UI overlay */}
                  <div style={{
                    position: 'absolute', top: 12, left: 12, right: 12,
                    background: 'rgba(255,255,255,0.92)',
                    backdropFilter: 'blur(16px)',
                    borderRadius: 20, height: 36,
                    display: 'flex', alignItems: 'center',
                    padding: '0 12px', gap: 8,
                    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                  }}>
                    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="#8A8A8A" strokeLinecap="round">
                      <circle cx="10" cy="10" r="6" />
                      <path d="M15 15L19 19" />
                    </svg>
                    <span style={{ fontSize: 12, color: '#101828', fontFamily: 'Inter,sans-serif', flex: 1 }}>
                      Старый город, Баку
                    </span>
                    <div style={{
                      background: '#101828', color: 'white',
                      borderRadius: 12, padding: '3px 10px', fontSize: 10, fontWeight: 600,
                    }}>Найти</div>
                  </div>

                  {/* FAB stack */}
                  <div style={{
                    position: 'absolute', right: 12, top: 56,
                    display: 'flex', flexDirection: 'column', gap: 6,
                  }}>
                    {['+','−','◎','!'].map((icon, i) => (
                      <div key={i} style={{
                        width: 32, height: 32, borderRadius: 8,
                        background: i === 2 ? '#1A73E8' : i === 3 ? '#FF3B30' : 'white',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                        fontSize: 14, fontWeight: 700,
                        color: i >= 2 ? 'white' : '#101828',
                      }}>{icon}</div>
                    ))}
                  </div>

                  {/* Nav sheet */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    background: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(16px)',
                    borderRadius: '14px 14px 0 0',
                    padding: '10px 14px',
                    boxShadow: '0 -4px 20px rgba(0,0,0,0.08)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ background: '#1A73E8', borderRadius: 6, padding: '3px 6px' }}>
                        <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round">
                          <path d="M12 2L4 22l8-4 8 4-8-20z" />
                        </svg>
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: '#101828', fontFamily: 'Inter,sans-serif' }}>Двигайтесь по Babak prospekti</div>
                        <div style={{ fontSize: 10, color: '#8A8A8A', fontFamily: 'Fragment Mono,monospace' }}>2.4 км · 8 мин</div>
                      </div>
                      <div style={{
                        background: '#101828', color: 'white',
                        borderRadius: 8, padding: '4px 10px', fontSize: 10, fontWeight: 600,
                      }}>Стоп</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Laptop base */}
          <div style={{
            background: '#111', height: 12, borderRadius: '4px 4px 16px 16px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
          }}>
            <div style={{
              width: '40%', height: 6, background: '#0d0d0d',
              borderRadius: '0 0 8px 8px', margin: '0 auto',
            }} />
          </div>

          {/* Shadow */}
          <div style={{
            position: 'absolute', bottom: -30, left: '10%', right: '10%', height: 30,
            background: 'radial-gradient(ellipse, rgba(26,115,232,0.3) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }} />
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
          animation: 'float 2s ease-in-out infinite',
        }}>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.3))' }} />
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <div style={{
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '14px 0',
        background: 'rgba(255,255,255,0.02)',
      }}>
        <div className="marquee-inner" style={{ display: 'flex', gap: 48, whiteSpace: 'nowrap', width: 'max-content' }}>
          {Array(2).fill(0).flatMap(() =>
            ['LIVE REPORTS', 'WAZE-LIKE NAVIGATION', 'BAKU SAFE MAP', 'ГОЛОСОВОЙ ГАЙДИНГ', 'GEOLOCATION ±35M', '60 FPS MAPLIBRE', 'DANGER ALERTS', 'POLICE RADAR', 'ROUTE OSRM', 'REAL-TIME BAKU'].map((t, i) => (
              <span key={t+i} style={{
                fontSize: 12, fontWeight: 600, letterSpacing: 2,
                color: i % 2 === 0 ? 'rgba(255,255,255,0.4)' : '#1A73E8',
                fontFamily: 'Fragment Mono,monospace',
                textTransform: 'uppercase',
                paddingRight: 48,
              }}>
                {t} ·
              </span>
            ))
          )}
        </div>
      </div>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how" style={{ padding: '120px 24px', background: '#0A0A0A' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: 80 }}>
            <p style={{
              fontSize: 11, fontWeight: 600, color: '#1A73E8',
              fontFamily: 'Fragment Mono,monospace', letterSpacing: 3,
              textTransform: 'uppercase', marginBottom: 16,
            }}>КАК РАБОТАЕТ</p>
            <h2 style={{
              fontFamily: 'Syne,sans-serif', fontWeight: 800,
              fontSize: 'clamp(36px, 5vw, 64px)',
              color: 'white', letterSpacing: -2,
              lineHeight: 1,
              margin: 0,
            }}>
              BAKU ISN'T{' '}
              <span style={{
                fontFamily: 'Instrument Serif,serif',
                fontStyle: 'italic',
                fontWeight: 400,
                WebkitTextStroke: '1.2px white',
                color: 'transparent',
              }}>JUST A MAP</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 2 }}>
            {[
              {
                n: '01', title: 'Репорты в реальном времени',
                desc: 'Добавляйте и видите репорты об авариях, полиции, ремонте дорог. Все данные хранятся 24 часа, затем исчезают автоматически.',
                color: '#FF3B30', icon: <IconDanger size={28} />, bg: '#1a0a0a',
              },
              {
                n: '02', title: 'Навигация как Waze',
                desc: 'Прокладка маршрута через OSRM с пошаговыми инструкциями. Голосовой гайдинг на русском языке (Pavel/Dmitry).',
                color: '#1A73E8', icon: <IconNavigation color="#1A73E8" size={28} />, bg: '#0a0f1a',
              },
              {
                n: '03', title: 'Геолокация ±35м',
                desc: 'Слежение за позицией через GPS с фильтрацией шума. Автоматическое следование за маршрутом с 3D-видом pitch 65°.',
                color: '#E8FF59', icon: <IconLocate color="#E8FF59" size={28} />, bg: '#0d0d0a',
              },
            ].map((item, i) => (
              <div key={i} className="reveal" style={{
                background: item.bg,
                border: '1px solid rgba(255,255,255,0.06)',
                padding: '48px 40px',
                transition: 'border-color 200ms',
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = item.color+'50')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
              >
                <div style={{
                  fontSize: 11, fontFamily: 'Fragment Mono,monospace',
                  color: item.color, marginBottom: 32, letterSpacing: 2,
                }}>{item.n}</div>
                <div style={{ marginBottom: 20 }}>{item.icon}</div>
                <h3 style={{
                  fontFamily: 'Syne,sans-serif', fontWeight: 800,
                  fontSize: 22, color: 'white', letterSpacing: -0.5,
                  margin: '0 0 12px',
                }}>{item.title}</h3>
                <p style={{
                  fontSize: 14, color: 'rgba(255,255,255,0.5)',
                  fontFamily: 'Inter,sans-serif', lineHeight: 1.7, margin: 0,
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CUTTING MAT FEATURES ===== */}
      <section style={{ background: '#D9DFCC', padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(66,81,69,0.22) 1px, transparent 1px),
            linear-gradient(90deg, rgba(66,81,69,0.22) 1px, transparent 1px),
            radial-gradient(circle, rgba(66,81,69,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '28px 28px, 28px 28px, 28px 28px',
          backgroundPosition: '0 0, 0 0, 14px 14px',
        }} />

        {/* Ruler */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 24,
          background: 'rgba(66,81,69,0.1)',
          borderBottom: '1px solid rgba(66,81,69,0.15)',
          display: 'flex', alignItems: 'center',
          fontFamily: 'Fragment Mono,monospace', fontSize: 9, color: 'rgba(66,81,69,0.4)',
        }}>
          {Array.from({ length: 40 }, (_, i) => (
            <div key={i} style={{
              flex: 1, textAlign: 'center',
              borderRight: '1px solid rgba(66,81,69,0.1)',
              fontSize: i % 5 === 0 ? 8 : 0,
            }}>
              {i % 5 === 0 ? i*5 : ''}
            </div>
          ))}
        </div>

        <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: 64 }}>
            <h2 style={{
              fontFamily: 'Syne,sans-serif', fontWeight: 800,
              fontSize: 'clamp(40px, 7vw, 90px)',
              color: '#101828', letterSpacing: -3,
              lineHeight: 0.92, margin: 0,
            }}>
              ФИЧИ
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {[
              { icon: <IconDanger size={22} />, label: 'Danger', desc: 'Мгновенные репорты об опасностях', color: '#FF3B30', bg: '#fff' },
              { icon: <IconPolice size={22} />, label: 'Police', desc: 'Радар полиции обновляется в реальном времени', color: '#007AFF', bg: '#fff' },
              { icon: <IconAccident size={22} />, label: 'Accident', desc: 'Сообщения об авариях от других водителей', color: '#FF9500', bg: '#fff' },
              { icon: <IconRepair size={22} />, label: 'Repair', desc: 'Дорожные работы и объезды', color: '#8E8E93', bg: '#fff' },
              { icon: <IconSearch color="#1A73E8" size={22} />, label: 'Search', desc: 'Nominatim geocoding для Баку', color: '#1A73E8', bg: '#fff' },
              { icon: <IconCar color="#101828" size={22} />, label: 'Route', desc: 'OSRM маршруты с пошаговым гайдингом', color: '#101828', bg: '#fff' },
            ].map((f, i) => (
              <div key={i} className="reveal" style={{
                background: 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(16px)',
                borderRadius: 16,
                padding: '20px',
                border: '1px solid rgba(255,255,255,0.5)',
                transition: 'transform 150ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 150ms ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{ marginBottom: 12 }}>{f.icon}</div>
                <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 16, color: f.color, marginBottom: 4 }}>
                  {f.label}
                </div>
                <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: '#6b7280', lineHeight: 1.5 }}>
                  {f.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section ref={statsRef} style={{ padding: '120px 24px', background: '#0A0A0A', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <p className="reveal" style={{
            fontSize: 11, fontWeight: 600, color: '#1A73E8',
            fontFamily: 'Fragment Mono,monospace', letterSpacing: 3,
            textTransform: 'uppercase', marginBottom: 16,
          }}>ПОКРЫТИЕ</p>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }}>
            {[
              { val: count1, unit: '+', label: 'улиц Баку', color: '#1A73E8' },
              { val: count2, unit: 'FPS', label: 'плавность карты', color: '#E8FF59' },
              { val: count3, unit: 'м', label: 'точность GPS', color: '#FF3B30', prefix: '<' },
            ].map((s, i) => (
              <div key={i} style={{
                padding: '48px 32px',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}>
                <div style={{
                  fontFamily: 'Syne,sans-serif', fontWeight: 800,
                  fontSize: 'clamp(48px, 7vw, 80px)',
                  color: s.color, letterSpacing: -3,
                  lineHeight: 1,
                }}>
                  {s.prefix}{s.val}{s.unit}
                </div>
                <div style={{
                  fontSize: 14, color: 'rgba(255,255,255,0.4)',
                  fontFamily: 'Inter,sans-serif', marginTop: 8,
                }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VIDEO SHOWCASE (CSS animation) ===== */}
      <section style={{ padding: '120px 24px', background: '#F5F1E8', overflow: 'hidden', position: 'relative' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="reveal" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, gap: 24, flexWrap: 'wrap' }}>
            <h2 style={{
              fontFamily: 'Syne,sans-serif', fontWeight: 800,
              fontSize: 'clamp(40px, 6vw, 80px)',
              color: '#101828', letterSpacing: -3,
              lineHeight: 0.92, margin: 0,
            }}>
              ДВИЖЕНИЕ
              <br />
              <span style={{ color: '#8A8A8A' }}>ПО БАКУ</span>
            </h2>
            <a href="/map" style={{
              background: '#101828', color: 'white',
              padding: '14px 28px', borderRadius: 24,
              fontSize: 14, fontWeight: 600, textDecoration: 'none',
              fontFamily: 'Inter,sans-serif',
              flexShrink: 0,
            }}>
              Открыть карту →
            </a>
          </div>

          {/* Car animation mockup */}
          <div style={{
            background: '#F5F1E8',
            border: '1px solid rgba(0,0,0,0.08)',
            borderRadius: 24,
            overflow: 'hidden',
            height: 320,
            position: 'relative',
          }}>
            {/* Road */}
            <div style={{
              position: 'absolute', top: '50%', left: 0, right: 0,
              transform: 'translateY(-50%)',
              height: 80, background: '#8A8A8A',
            }}>
              {/* Center dashes */}
              <div style={{
                position: 'absolute', top: '50%', left: 0, right: 0,
                height: 3, transform: 'translateY(-50%)',
                background: 'repeating-linear-gradient(90deg, #E8FF59 0, #E8FF59 40px, transparent 40px, transparent 80px)',
                animation: 'dashFlow 0.9s linear infinite',
                backgroundSize: '80px 3px',
              }} />
              {/* Moving car */}
              <div className="car-drive" style={{
                position: 'absolute', top: '50%', transform: 'translateY(-50%)',
                display: 'flex', alignItems: 'center', gap: 4,
              }}>
                <div style={{
                  background: '#1A73E8', borderRadius: 20,
                  padding: '6px 16px',
                  boxShadow: '0 0 20px rgba(26,115,232,0.6), 0 0 40px rgba(26,115,232,0.3)',
                  display: 'flex', alignItems: 'center', gap: 6,
                }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'white' }} />
                  <div style={{ width: 24, height: 6, background: 'rgba(255,255,255,0.8)', borderRadius: 3 }} />
                </div>
              </div>
            </div>

            {/* Landmarks */}
            <div style={{ position: 'absolute', top: 20, left: 40 }}>
              <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 11, color: '#101828', opacity: 0.5 }}>BABAK PROSPEKTI</div>
            </div>
            <div style={{ position: 'absolute', bottom: 20, right: 40 }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 6,
                background: 'rgba(255,59,48,0.1)', borderRadius: 12, padding: '4px 12px',
              }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF3B30', animation: 'pulseRing 1.5s ease infinite' }} />
                <span style={{ fontSize: 11, fontWeight: 600, color: '#FF3B30', fontFamily: 'Fragment Mono,monospace' }}>DANGER AHEAD</span>
              </div>
            </div>
            <div style={{ position: 'absolute', top: 20, right: 40 }}>
              <div style={{
                background: 'rgba(26,115,232,0.08)',
                border: '1px solid rgba(26,115,232,0.2)',
                borderRadius: 12, padding: '4px 12px',
                fontSize: 11, fontWeight: 600, color: '#1A73E8',
                fontFamily: 'Fragment Mono,monospace',
              }}>2.4 КМ · 8 МИН</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{
        padding: '140px 24px',
        background: '#101828',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(26,115,232,0.15) 0%, transparent 60%)',
        }} />
        <div className="noise-overlay" />

        <div style={{ position: 'relative', textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
          <div className="reveal">
            <h2 style={{
              fontFamily: 'Syne,sans-serif', fontWeight: 800,
              fontSize: 'clamp(40px, 7vw, 88px)',
              color: 'white', letterSpacing: -3,
              lineHeight: 0.9, margin: '0 0 24px',
            }}>
              Готов ехать<br />безопасно?
            </h2>
            <p style={{
              fontSize: 17, color: 'rgba(255,255,255,0.5)',
              fontFamily: 'Inter,sans-serif', lineHeight: 1.6,
              maxWidth: 480, margin: '0 auto 40px',
            }}>
              Открой карту прямо сейчас. Ноль установок — работает в браузере.
            </p>
          </div>

          <div className="reveal" style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
            <div style={{ position: 'relative' }}>
              {/* Spinning border */}
              <div style={{
                position: 'absolute', inset: -2,
                borderRadius: 28,
                background: 'conic-gradient(from 0deg, #1A73E8, #E8FF59, #FF3B30, #1A73E8)',
                animation: 'borderSpin 3s linear infinite',
              }} />
              <a href="/map" style={{
                position: 'relative',
                background: 'white', color: '#101828',
                padding: '16px 40px', borderRadius: 26,
                fontSize: 16, fontWeight: 700,
                textDecoration: 'none', fontFamily: 'Inter,sans-serif',
                display: 'inline-block',
                zIndex: 1,
              }}>
                Открыть Baku Safe Map
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{
        padding: '32px 24px',
        background: '#0A0A0A',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <IconShield color="#1A73E8" size={18} />
          <span style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
            BAKU SAFE MAP v8
          </span>
        </div>
        <div style={{ display: 'flex', gap: 24 }}>
          {['Карта', 'Репорты', 'GitHub'].map(t => (
            <a key={t} href={t === 'Карта' ? '/map' : t === 'GitHub' ? 'https://github.com/vixsttpn/bakusafemap-az' : '#'} style={{
              fontSize: 12, color: 'rgba(255,255,255,0.3)', textDecoration: 'none',
              fontFamily: 'Inter,sans-serif',
            }}>{t}</a>
          ))}
        </div>
        <div style={{
          fontFamily: 'Fragment Mono,monospace', fontSize: 10,
          color: 'rgba(255,255,255,0.2)',
        }}>
          MapLibre GL · Voyager · OSRM · Nominatim
        </div>
      </footer>
    </div>
  )
}

function countUp(set: (n: number) => void, target: number, duration: number) {
  const start = Date.now()
  const tick = () => {
    const p = Math.min(1, (Date.now() - start) / duration)
    const ease = 1 - Math.pow(1 - p, 3)
    set(Math.round(ease * target))
    if (p < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}
