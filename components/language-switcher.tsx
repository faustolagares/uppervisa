"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { useLanguage } from "./language-provider"
import { locales } from "@/middleware"
import { ChevronDown } from "lucide-react" // Import ChevronDown

interface LanguageSwitcherProps {
  mobile?: boolean
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ mobile = false }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { locale, changeLocale } = useLanguage()
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  // Function to handle language change
  const handleLanguageChange = (newLocale: string) => {
    changeLocale(newLocale)
    setIsOpen(false)
  }

  // Effect to close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen]) // Dependency is isOpen

  // Function to get language display name and flag
  const getLanguageInfo = (localeCode: string) => {
    switch (localeCode) {
      case "en-US":
        return { name: "English", flag: "🇺🇸", initial: "EN" }
      case "pt-BR":
        return { name: "Português", flag: "🇧🇷", initial: "PT" }
      case "es-MX":
        return { name: "Español", flag: "🇲🇽", initial: "ES" }
      default:
        return { name: localeCode, flag: "", initial: localeCode }
    }
  }

  // Get info for the currently selected locale to display on the button
  const currentLanguageInfo = getLanguageInfo(locale)

  return (
    <div className={`relative ${mobile ? "text-white" : ""}`} ref={dropdownRef}>
      {/* Button to toggle the dropdown */}
      <button
        onClick={toggleDropdown}
        className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
          mobile
            ? "hover:bg-white/10"
            : "text-gray-600 hover:bg-gray-100 hover:text-black"
        }`}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span>{currentLanguageInfo.flag}</span>
        <span className="hidden md:inline">{currentLanguageInfo.initial}</span>
        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 ${
            mobile ? "bottom-full mb-2" : "top-full" // Adjust position for mobile if needed
          }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {locales.map((localeCode) => {
              const langInfo = getLanguageInfo(localeCode)
              return (
                <button
                  key={localeCode}
                  onClick={() => handleLanguageChange(localeCode)}
                  className={`flex items-center gap-2 w-full text-left px-4 py-2 text-sm ${
                    locale === localeCode
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  role="menuitem"
                >
                  <span>{langInfo.flag}</span>
                  <span>{langInfo.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
