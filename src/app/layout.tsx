import React from 'react'
import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'], 
  variable: '--font-jakarta'
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
    <html lang="en" className="bg-surface-light">
      <body className={`${inter.variable} ${jakarta.variable} font-sans text-neutral min-h-screen`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 