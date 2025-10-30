import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import Navigation from '@/shared/ui/Navigation'
import Footer from '@/shared/ui/Footer'
import FloatingActionBar from '@/shared/ui/FloatingActionBar'

export const metadata: Metadata = {
  title: '안녕플란트치과 - Anyeong Plant Dental Clinic',
  description: '당신의 새로운 미소가 시작되는 곳, 정밀하고 세심한 치료를 제공합니다',
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
