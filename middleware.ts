import { type NextRequest, NextResponse } from "next/server"
import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

// List of supported locales
export const locales = ["en-US", "pt-BR", "es-MX"]
export const defaultLocale = "en-US"

// Get the preferred locale from the request
function getLocale(request: NextRequest) {
  // Negotiator expects a plain object, so we need to simulate one
  const headers = Object.fromEntries(request.headers.entries())
  const negotiatorHeaders = { "accept-language": headers["accept-language"] || "" }
  const negotiator = new Negotiator({ headers: negotiatorHeaders })

  // Use negotiator and intl-localematcher to get the best locale
  const locales = ["en-US", "pt-BR", "es-MX"]
  return match(negotiator.languages(), locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if the pathname is missing a locale
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  // If it doesn't have a locale, add one based on the user's preference
  if (!pathnameHasLocale) {
    const locale = getLocale(request)
    const newUrl = new URL(`/${locale}${pathname}`, request.url)

    // Preserve the search params
    newUrl.search = request.nextUrl.search

    return NextResponse.redirect(newUrl)
  }
}

export const config = {
  // Match all request paths except for:
  // - API routes
  // - Static files (e.g. images, fonts, etc.)
  // - _next (Next.js internal routes)
  // - usa-map.json (our GeoJSON file)
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images|usa-map.json|.*\\..*).*)"],
}
