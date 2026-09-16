'use client'
import React from 'react'

interface CuttingMatProps {
  children: React.ReactNode
  style?: React.CSSProperties
  gridColor?: string
  bgColor?: string
  showRuler?: boolean
  showTape?: boolean
}

export function CuttingMat({
  children,
  style,
  gridColor = 'rgba(66,81,69,0.22)',
  bgColor = '#D9DFCC',
  showRuler = true,
  showTape = false,
}: CuttingMatProps) {
  return (
    <div style={{
      position: 'relative',
      background: bgColor,
      backgroundImage: `
        linear-gradient(${gridColor} 1px, transparent 1px),
        linear-gradient(90deg, ${gridColor} 1px, transparent 1px),
        radial-gradient(circle, ${gridColor.replace('0.22','0.15')} 1px, transparent 1px)
      `,
      backgroundSize: '28px 28px, 28px 28px, 28px 28px',
      backgroundPosition: '0 0, 0 0, 14px 14px',
      overflow: 'hidden',
      ...style,
    }}>
      {/* Top ruler */}
      {showRuler && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: 20,
          background: 'rgba(66,81,69,0.08)',
          borderBottom: `1px solid ${gridColor}`,
          display: 'flex',
          zIndex: 2,
        }}>
          {Array.from({ length: 60 }, (_, i) => (
            <div key={i} style={{
              flex: 1,
              borderRight: `1px solid ${gridColor}`,
              display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
              paddingBottom: 2,
              fontSize: i % 5 === 0 ? 7 : 0,
              color: 'rgba(66,81,69,0.5)',
              fontFamily: 'Fragment Mono,monospace',
            }}>
              {i % 5 === 0 ? i * 5 : ''}
            </div>
          ))}
        </div>
      )}

      {/* Left ruler */}
      {showRuler && (
        <div style={{
          position: 'absolute', top: 20, left: 0, bottom: 0,
          width: 20,
          background: 'rgba(66,81,69,0.08)',
          borderRight: `1px solid ${gridColor}`,
          display: 'flex', flexDirection: 'column',
          zIndex: 2,
        }}>
          {Array.from({ length: 40 }, (_, i) => (
            <div key={i} style={{
              flex: 1,
              borderBottom: `1px solid ${gridColor}`,
              display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
              paddingRight: 2,
              fontSize: i % 5 === 0 ? 7 : 0,
              color: 'rgba(66,81,69,0.5)',
              fontFamily: 'Fragment Mono,monospace',
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
            }}>
              {i % 5 === 0 ? i * 5 : ''}
            </div>
          ))}
        </div>
      )}

      {/* Tape piece decoration */}
      {showTape && (
        <>
          <div style={{
            position: 'absolute', top: 40, right: 60,
            width: 80, height: 20,
            background: 'rgba(255,255,200,0.5)',
            transform: 'rotate(12deg)',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            zIndex: 5,
          }} />
          <div style={{
            position: 'absolute', bottom: 60, left: 40,
            width: 60, height: 18,
            background: 'rgba(255,255,200,0.5)',
            transform: 'rotate(-8deg)',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            zIndex: 5,
          }} />
        </>
      )}

      {/* Content offset for rulers */}
      <div style={{ paddingTop: showRuler ? 20 : 0, paddingLeft: showRuler ? 20 : 0 }}>
        {children}
      </div>
    </div>
  )
}

/* Corner marks */
export function CornerMark({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) {
  const pos: Record<string, React.CSSProperties> = {
    tl: { top: 24, left: 24 },
    tr: { top: 24, right: 24, transform: 'scaleX(-1)' },
    bl: { bottom: 24, left: 24, transform: 'scaleY(-1)' },
    br: { bottom: 24, right: 24, transform: 'scale(-1)' },
  }

  return (
    <div style={{ position: 'absolute', ...pos[position], opacity: 0.4, zIndex: 3 }}>
      <svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="rgba(66,81,69,0.6)" strokeWidth={1.5}>
        <path d="M0 8V0h8" />
      </svg>
    </div>
  )
}
