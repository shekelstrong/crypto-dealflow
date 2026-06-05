import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://crypto-dealflow.vercel.app'),
  title: { default: 'Crypto Dealflow — Crypto, Binary Options, DeFi & AI Agents', template: '%s | Crypto Dealflow' },
  description: 'Insights and tools for crypto trading, binary options, DeFi, Web3, and AI agents. Stay ahead with data-driven research.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Crypto Dealflow',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-bg text-textMain antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
