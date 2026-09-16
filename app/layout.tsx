import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Baku Safe Map — Навигация по Баку как в Waze',
  description: 'Безопасная навигация по Баку в реальном времени. Репорты об авариях, полиции и дорожных работах.',
  manifest: '/manifest.json',
  icons: { icon: '/svgs/icon-shield.svg' },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
