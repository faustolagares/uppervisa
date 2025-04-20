import type React from "react"
import "../globals.css"
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google"; // Import Inter
// import { LanguageProvider } from "@/components/language-provider";
import { ClientProviders } from "@/components/client-providers"; // Re-import ClientProviders
import SiteHeader from "@/components/site-header";
import AnnouncementBar from "@/components/announcement-bar";
import SiteFooter from "@/components/site-footer"
import MobileCTABar from "@/components/mobile-cta-bar"
import { locales } from "@/middleware"
import CTASection from "@/components/cta-section"
// Import the optimized Chatwoot component
import OptimizedChatwoot from "@/components/optimized-chatwoot"
import Script from "next/script"
import Head from "next/head"

// Import Plus Jakarta Sans with multiple weights
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  // Include weights 400 (regular) and 500 (medium)
  weight: ["400", "500"],
  variable: "--font-plus-jakarta-sans",
  display: "swap", // Add this to prevent font blocking
})

// Import Inter font with weights
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"], // Load regular (400) and medium (500) weights
  variable: "--font-inter", // Assign CSS variable
  display: "swap",
})

export const metadata: Metadata = {
  title: "UpperVisa | Your American Dream Starts Here",
  description:
    "Expert immigration and visa consulting services to help you navigate the path to your American dream. Get personalized guidance for all visa types, immigration processes, and relocation services.",
  icons: {
    icon: [
      {
        url: "/favicon.webp",
        type: "image/webp",
      },
    ],
  },
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
  },
  twitter: {
    card: 'summary_large_image',
    title: "UpperVisa | Your American Dream Starts Here",
    description: "Expert immigration and visa consulting services to help you navigate the path to your American dream. Get personalized guidance for all visa types, immigration processes, and relocation services.",
    images: ['/og.jpg'],
  },
  other: {
    "link:preconnect:one.nexlink.ai": "https://one.nexlink.ai",
    "link:preconnect:youtube": "https://www.youtube.com",
    "link:dns-prefetch:youtube": "https://www.youtube.com"
  }
}

// Add viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function RootLayout({
  children,
  params: { locale }, // Destructure locale in signature again
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    // Add Inter variable to className
    <html lang={locale} className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://one.nexlink.ai" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.youtube.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
      </head>
      <body className="font-sans overflow-x-hidden">

        {/* Wrap children with ClientProviders */}
        <ClientProviders locale={locale}>
          <div className="flex flex-col min-h-screen overflow-hidden">
            <SiteHeader />
            <MobileCTABar />
            <AnnouncementBar />
            <div className="flex-grow overflow-hidden">{children}</div>
            <CTASection />
            <SiteFooter />
          </div>
        </ClientProviders>
        {/* Restore Chatwoot (or keep commented if still debugging separately) */}
        <OptimizedChatwoot /> {/* Restore Chatwoot */}
      </body>
    </html>
  )
}
