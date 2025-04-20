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
  title: "UPPERVISA - Immigration & Visa Consulting",
  description: "Professional immigration and visa consulting services",
    generator: 'v0.dev'
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
