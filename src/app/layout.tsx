import React from 'react'
import type { Metadata } from 'next'
import { Outfit, DM_Sans } from 'next/font/google'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import './globals.css'

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans',
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
    <html lang="en" className="bg-neutral">
      <body className={`${outfit.variable} ${dmSans.variable} font-body antialiased bg-neutral text-background`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 