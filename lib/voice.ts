let voiceEnabled = false

export function setVoice(on: boolean) {
  voiceEnabled = on
}

export function getVoice() {
  return voiceEnabled
}

export function speak(text: string) {
  if (!voiceEnabled) return
  if (typeof window === 'undefined') return
  window.speechSynthesis.cancel()
  const utt = new SpeechSynthesisUtterance(text)
  utt.lang = 'ru-RU'
  utt.rate = 1
  utt.pitch = 0.85
  const voices = window.speechSynthesis.getVoices()
  const male = voices.find(v => v.lang.startsWith('ru') && /Pavel|Dmitry|Alex/i.test(v.name))
  const ru = voices.find(v => v.lang.startsWith('ru'))
  utt.voice = male || ru || null
  window.speechSynthesis.speak(utt)
}

export function stopSpeaking() {
  if (typeof window === 'undefined') return
  window.speechSynthesis.cancel()
}
