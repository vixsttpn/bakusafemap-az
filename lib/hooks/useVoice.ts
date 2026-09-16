'use client'
import { useState, useCallback } from 'react'
import { speak, stopSpeaking, setVoice } from '@/lib/voice'
export function useVoice() {
  const [enabled, setEnabled] = useState(false)
  const toggle = useCallback(() => setEnabled(p => { const n=!p; setVoice(n); return n }), [])
  const say = useCallback((text: string) => speak(text), [])
  const stop = useCallback(() => stopSpeaking(), [])
  return { enabled, toggle, say, stop }
}
