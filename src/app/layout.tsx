import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import Navigation from '@/shared/ui/Navigation'
import Footer from '@/shared/ui/Footer'
import FloatingActionBar from '@/shared/ui/FloatingActionBar'

export const metadata: Metadata = {
  title: 'Gentle Plant Dental',
  description: 'Restorative dental care with gentle precision',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/sun-typeface/SUIT@2/fonts/variable/woff2/SUIT-Variable.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <Navigation />
          <FloatingActionBar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
