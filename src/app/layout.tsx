import React from 'react'
import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import './globals.css'

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'OPMA - On-Demand Marketing Automation',
  description: 'Your all-in-one marketing automation subscription service',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
} 