import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prateek Santani - Fullstack Dev | AI Engineer',
  description: 'Prateek Santani's personal portfolio website showcasing his work in Fullstack Development, AI, Cloud, and DevOps.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
