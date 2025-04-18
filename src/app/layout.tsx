import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="min-h-screen pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
} 