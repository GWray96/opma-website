import React from 'react'
import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora'
})

export const metadata: Metadata = {
  title: 'OPMA - Optimize Your Operations',
  description: 'We help businesses streamline processes, reduce costs, and improve efficiency through data-driven solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-inter">
        <Navbar />
        <div className="min-h-screen pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
} 