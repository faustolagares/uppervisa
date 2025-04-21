import type React from "react"
import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Plus_Jakarta_Sans, Inter } from "next/font/google"

// Define fonts at the root level
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "UpperVisa | Your American Dream Starts Here",
  description: "Expert immigration and visa consulting services to help you navigate the path to your American dream. Get personalized guidance for all visa types, immigration processes, and relocation services.",
  generator: 'v0.dev',
  metadataBase: new URL('https://uppervisa.com'),
  openGraph: {
    title: "UpperVisa | Your American Dream Starts Here",
    description: "Expert immigration and visa consulting services to help you navigate the path to your American dream. Get personalized guidance for all visa types, immigration processes, and relocation services.",
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'UpperVisa Immigration Consulting',
      }
    ],
    locale: 'en_US',
    type: 'website',
    siteName: 'UpperVisa',
  },
  twitter: {
    card: 'summary_large_image',
    title: "UpperVisa | Your American Dream Starts Here",
    description: "Expert immigration and visa consulting services to help you navigate the path to your American dream. Get personalized guidance for all visa types, immigration processes, and relocation services.",
    images: ['/og.jpg'],
    site: '@uppervisa',
  },
  other: {
    'og:image': 'https://uppervisa.com/og.jpg',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:alt': 'UpperVisa Immigration Consulting',
    'og:image:type': 'image/jpeg',
    'og:url': 'https://uppervisa.com',
    'og:site_name': 'UpperVisa',
  }
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body className="font-sans overflow-x-hidden">{children}</body>
    </html>
  )
}
