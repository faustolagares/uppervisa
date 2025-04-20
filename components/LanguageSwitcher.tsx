"use client"

import React, { useState, useEffect } from "react"
import { Globe } from "lucide-react"
import { ChevronDown } from "lucide-react"

// Remove direct dependency on useTranslation if it's causing issues
// and implement a more robust approach

interface LanguageSwitcherProps {
  mobile?: boolean
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ mobile = false }) => {
  const [isOpen, setIsOpen] = useState(false)

  // Use a safer approach to get the current language
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Try to get from localStorage or default to 'en'
    if (typeof window !== "undefined") {
      return localStorage.getItem("language") || "en"
    }
    return "en"
  })

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const changeLanguage = (language: string) => {
    setCurrentLanguage(language)

    // Store the selection in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language)
    }

    // Handle language change - redirect to the appropriate URL
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname
      const newPath = currentPath.replace(/^\/(en|pt)(-\w+)?/, `/${language}`)
      window.location.href = newPath
    }

    setIsOpen(false)
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const dropdownRef = React.useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  return (
    <div className={`relative ${mobile ? "text-white" : ""}`}>
      <button
        onClick={toggleDropdown}
        className={`flex items-center space-x-1 ${mobile ? "p-2" : "p-2 hover:bg-gray-100 rounded"}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className={`w-5 h-5 ${mobile ? "text-white" : "text-gray-600"}`} />
        <span className={mobile ? "sr-only" : "text-sm font-medium"}>
          {currentLanguage === "en" ? "English" : "Português"}
        </span>
        <ChevronDown className={`w-4 h-4 ${mobile ? "text-white" : "text-gray-600"}`} />
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <button
              onClick={() => changeLanguage("en")}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              English
            </button>
            <button
              onClick={() => changeLanguage("pt")}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Português
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
