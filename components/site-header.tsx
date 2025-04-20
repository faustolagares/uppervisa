"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MapPin, Mail, Clock, ChevronDown, Menu, X } from "lucide-react"
import LanguageSwitcher from "@/components/language-switcher"
import { useLanguage } from "./language-provider"
import { usePathname } from "next/navigation"
import Image from "next/image"

// Removed unused import: import { useTranslation } from "react-i18next"

export default function SiteHeader() {
  const { locale, t } = useLanguage() // Get t from useLanguage
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // Removed unused state: const [searchQuery, setSearchQuery] = useState("")

  // Adicionar useEffect para controlar o scroll do body quando o menu mobile está aberto
  // Adicionar este código logo após a declaração das constantes no início do componente:

  useEffect(() => {
    // Prevenir rolagem do body quando o menu mobile está aberto
    if (mobileMenuOpen) {
      // Não bloqueia completamente a rolagem, apenas impede que o conteúdo por trás do menu seja rolado
      document.body.style.overflow = "auto"
    } else {
      document.body.style.overflow = ""
    }

    // Cleanup ao desmontar o componente
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  // Removed useTranslation logic

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Removed unused function: handleSearch

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-gray-100 py-1 px-4 md:px-8 text-xs hidden md:block">
        <div className="w-full max-w-[1350px] mx-auto flex flex-wrap justify-between items-center">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-1">
              <MapPin size={14} className="text-red-500" />
              <span className="text-gray-700 text-xs">Nova York</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={14} className="text-red-500" />
              <span className="text-gray-700 text-xs">hello@uppervisa.com</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} className="text-red-500" />
              <span className="text-gray-700 text-xs">{t('common.hours') || "Mon - Fri 8.00 am - 6.00 pm"}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* LanguageSwitcher moved to main nav */}
            <a href="#" className="text-gray-700 hover:text-gray-900">
              {t('common.login') || "Login"}
            </a>
            <Link href={`/${locale}/faqs`} className="text-gray-700 hover:text-gray-900">
              {t('common.faqs') || "FAQ"}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white py-4 px-4 md:px-8 shadow-sm relative z-30">
        <div className="w-full max-w-[1350px] mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center mr-8">
              <div className="h-10 w-auto flex items-center justify-center">
                <Link href={`/${locale || "en-US"}`}>
                  <Image
                    src="https://neecplxfgfdludxo.public.blob.vercel-storage.com/UpperVisa/Logos/UpperVisa%20Red%20and%20Black%20Logo-rpdfoypgwNxvJygnxiOelA7KxuWHv9.webp"
                    alt="UPPERVISA Logo"
                    width={180}
                    height={40}
                    className="object-contain"
                  />
                </Link>
              </div>
            </div>
            <nav className="hidden lg:flex items-center space-x-6">
              <Link
                href={`/${locale || "en-US"}`}
                className={`text-base ${ // Changed text-sm to text-base and removed font-light
                  pathname === `/${locale}` || pathname === `/${locale || "en-US"}`
                    ? "text-black relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-red-500"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {t('navigation.home') || "Home"}
              </Link>
              <Link
                href={`/${locale || "en-US"}/about`}
                className={`text-base ${ // Changed text-sm to text-base and removed font-light
                  pathname.includes(`/${locale || "en-US"}/about`)
                    ? "text-black relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-red-500"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {t('navigation.aboutUs') || "About Us"}
              </Link>
              {/* Immigration & Visas Dropdown */}
              <div className="relative group">
                <Link
                  href={`/${locale || "en-US"}/immigration-visas`}
                  className={`text-base ${ // Changed text-sm to text-base and removed font-light
                    pathname.includes(`/${locale || "en-US"}/immigration-visas`)
                      ? "text-black relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-red-500"
                      : "text-gray-600 hover:text-black"
                  } flex items-center gap-1`}
                >
                  Immigration & Visas
                  <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
                </Link>
                <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    <Link
                      href={`/${locale || "en-US"}/immigration-visas/immigrant-visas`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black"
                    >
                      Immigrant Visas
                    </Link>
                    <Link
                      href={`/${locale || "en-US"}/immigration-visas/non-immigrant-visas`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black"
                    >
                      Non-Immigrant Visas
                    </Link>
                    <Link
                      href={`/${locale || "en-US"}/immigration-visas/permanent-residency`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black"
                    >
                      Permanent Residency
                    </Link>
                    <Link
                      href={`/${locale || "en-US"}/immigration-visas/relocation-settlement`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black"
                    >
                      Relocation & Settlement
                    </Link>
                    <Link
                      href={`/${locale || "en-US"}/immigration-visas/golden-card`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black"
                    >
                      Golden Card Program
                    </Link>
                  </div>
                </div>
              </div>
              {/* Business Services Dropdown */}
              <div className="relative group">
                <Link
                  href={`/${locale || "en-US"}/business-services`}
                  className={`text-base ${ // Changed text-sm to text-base and removed font-light
                    pathname.includes(`/${locale || "en-US"}/business-services`)
                      ? "text-black relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-red-500"
                      : "text-gray-600 hover:text-black"
                  } flex items-center gap-1`}
                >
                  Business Services
                  <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
                </Link>
                <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    <Link
                      href={`/${locale || "en-US"}/business-services/eb5-investor-visa`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black"
                    >
                      EB-5 Investor Visa
                    </Link>
                    <Link
                      href={`/${locale || "en-US"}/business-services/e2-treaty-investor`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black"
                    >
                      E-2 Treaty Investor
                    </Link>
                    <Link
                      href={`/${locale || "en-US"}/business-services/business-formation`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black"
                    >
                      Business Formation
                    </Link>
                    <Link
                      href={`/${locale || "en-US"}/business-services/corporate-immigration`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black"
                    >
                      Corporate Immigration
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href={`/${locale || "en-US"}/blog`}
                className={`text-base ${ // Changed text-sm to text-base and removed font-light
                  pathname.includes(`/${locale || "en-US"}/blog`)
                    ? "text-black relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-red-500"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {t('navigation.blog') || "Blog"}
              </Link>
              <Link
                href={`/${locale || "en-US"}/contact`}
                className={`text-base ${ // Changed text-sm to text-base and removed font-light
                  pathname.includes(`/${locale || "en-US"}/contact`)
                    ? "text-black relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-red-500"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {t('navigation.contact') || "Contact"}
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            {/* Add LanguageSwitcher here, wrapped for font size control */}
            <div className="text-sm">
              <LanguageSwitcher />
                </div>
                <Link
                  href={`/${locale || "en-US"}/book-appointment`}
                  className="hidden md:block text-sm bg-gray-900 text-white px-6 py-2 hover:bg-gray-800 transition-colors rounded-sm" // Changed background to gray-900
                >
                  {t('common.bookAppointment') || "Book Appointment"}
            </Link>
            {/* Search removed */}
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden ml-2 p-1 text-gray-700 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden overflow-y-auto`}
          style={{ top: "0" }}
        >
          {/* Mobile Menu Header with Logo and Close Button */}
          <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-4 flex justify-between items-center">
            <div className="h-10 w-auto flex items-center justify-center">
              <Link href={`/${locale || "en-US"}`} onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="https://neecplxfgfdludxo.public.blob.vercel-storage.com/UpperVisa/Logos/UpperVisa%20Red%20and%20Black%20Logo-rpdfoypgwNxvJygnxiOelA7KxuWHv9.webp"
                  alt="UPPERVISA Logo"
                  width={150}
                  height={35}
                  className="object-contain"
                />
              </Link>
            </div>
            <button
              className="p-2 text-gray-700 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Close mobile menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Menu Content - Scrollable */}
          <div className="px-4 py-6 max-h-[calc(100vh-70px)] overflow-y-auto">
            <div className="flex flex-col space-y-6">
              {/* Remove Language Switcher from Mobile Menu */}

              <nav className="flex flex-col space-y-4">
                <Link
                  href={`/${locale || "en-US"}`}
                  className={`font-medium text-lg py-2 ${
                    pathname === `/${locale}` || pathname === `/${locale || "en-US"}` ? "text-red-600" : "text-gray-800"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('navigation.home') || "Home"}
                </Link>
                <Link
                  href={`/${locale || "en-US"}/about`}
                  className={`font-medium text-lg py-2 ${
                    pathname.includes(`/${locale || "en-US"}/about`) ? "text-red-600" : "text-gray-800"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('navigation.aboutUs') || "About Us"}
                </Link>
                <div className="py-2">
                  <Link
                    href={`/${locale || "en-US"}/immigration-visas`}
                    className="font-medium text-lg text-gray-800 mb-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Immigration & Visas
                  </Link>
                  <div className="pl-4 flex flex-col space-y-2">
                    <Link
                      href={`/${locale || "en-US"}/immigration-visas/immigrant-visas`}
                      className="text-gray-600 hover:text-red-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Immigrant Visas
                    </Link>
                    <Link
                      href={`/${locale || "en-US"}/immigration-visas/non-immigrant-visas`}
                      className="text-gray-600 hover:text-red-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Non-Immigrant Visas
                    </Link>
                    <Link
                      href={`/${locale || "en-US"}/immigration-visas/permanent-residency`}
                      className="text-gray-600 hover:text-red-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Permanent Residency
                    </Link>
                    <Link
                      href={`/${locale || "en-US"}/immigration-visas/relocation-settlement`}
                      className="text-gray-600 hover:text-red-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Relocation & Settlement
                    </Link>
                    <Link
                      href={`/${locale || "en-US"}/immigration-visas/golden-card`}
                      className="text-gray-600 hover:text-red-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Golden Card Program
                    </Link>
                  </div>
                </div>
                <div className="py-2">
                  <Link
                    href={`/${locale || "en-US"}/business-services`}
                    className="font-medium text-lg text-gray-800 mb-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Business Services
                  </Link>
                  <div className="pl-4 flex flex-col space-y-2">
                    <Link
                      href={`/${locale || "en-US"}/business-services/eb5-investor-visa`}
                      className="text-gray-600 hover:text-red-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      EB-5 Investor Visa
                    </Link>
                    <Link
                      href={`/${locale || "en-US"}/business-services/e2-treaty-investor`}
                      className="text-gray-600 hover:text-red-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      E-2 Treaty Investor
                    </Link>
                    <Link
                      href={`/${locale || "en-US"}/business-services/business-formation`}
                      className="text-gray-600 hover:text-red-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Business Formation
                    </Link>
                    <Link
                      href={`/${locale || "en-US"}/business-services/corporate-immigration`}
                      className="text-gray-600 hover:text-red-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Corporate Immigration
                    </Link>
                  </div>
                </div>
                <Link
                  href={`/${locale || "en-US"}/blog`}
                  className={`font-medium text-lg py-2 ${
                    pathname.includes(`/${locale || "en-US"}/blog`) ? "text-red-600" : "text-gray-800"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('navigation.blog') || "Blog"}
                </Link>
                <Link
                  href={`/${locale || "en-US"}/contact`}
                  className={`font-medium text-lg py-2 ${
                    pathname.includes(`/${locale || "en-US"}/contact`) ? "text-red-600" : "text-gray-800"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('navigation.contact') || "Contact"}
                </Link>
                {/* Search removed */}
              </nav>

              <div className="pt-6 border-t border-gray-200">
                <Link
                  href={`/${locale || "en-US"}/book-appointment`}
                  className="block w-full text-center bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('common.bookAppointment') || "Book Appointment"}
                </Link>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex flex-col space-y-3">
                  <a href="#" className="text-gray-700 hover:text-red-600">
                    {t('common.login') || "Login"}
                  </a>
                  <a href="#" className="text-gray-700 hover:text-red-600">
                    {t('common.faqs') || "FAQ"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Add blue bar below mobile menu */}
      {mobileMenuOpen && <div className="lg:hidden w-full bg-red-600 h-2" />}
    </>
  )
}
