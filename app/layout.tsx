import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Valentine Week 2026 - A Week of Love ❤️',
  description: 'Celebrate the complete Valentine Week with beautiful moments from Rose Day to Kiss Day',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
