import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OPMA - Digital Marketing, AI & Automation Agency',
  description: 'Reclaim your time with our comprehensive digital marketing, AI integration, and workflow automation services.',
  keywords: 'digital marketing, AI integration, workflow automation, business automation, marketing agency',
  authors: [{ name: 'OPMA' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://opma.com',
    title: 'OPMA - Digital Marketing, AI & Automation Agency',
    description: 'Reclaim your time with our comprehensive digital marketing, AI integration, and workflow automation services.',
    siteName: 'OPMA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OPMA - Digital Marketing, AI & Automation Agency',
    description: 'Reclaim your time with our comprehensive digital marketing, AI integration, and workflow automation services.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 