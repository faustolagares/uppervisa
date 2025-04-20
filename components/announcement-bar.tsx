"use client"

import { Volume2, Facebook, Twitter, Instagram } from "lucide-react"
import { useLanguage } from "./language-provider"
import translations from "@/translations"

export default function AnnouncementBar() {
  const { locale } = useLanguage()

  // Safely access translations with fallback
  const t = locale ? translations[locale as keyof typeof translations] || translations["en-US"] : translations["en-US"]

  return (
    <div className="w-full flex justify-center bg-gray-900 overflow-hidden">
      <div className="w-full max-w-[1440px] flex flex-col md:flex-row">
        {/* Updates section - hidden on mobile */}
        <div className="text-white py-2.5 px-6 hidden md:flex items-center justify-center md:w-1/5">
          <Volume2 className="mr-2" />
          <span className="text-sm">{t.common?.updates || "Updates"}</span>
        </div>
        <div className="bg-red-600 text-white py-2.5 px-6 flex-1 flex items-center justify-between">
          <div className="flex-1 text-center md:text-left text-sm">
            {t.announcement?.text || "The United States Mission is Pleased to Announce the Expansion of Interview."}
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <button className="text-white p-1">
                <span className="sr-only">Previous</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button className="text-white p-1">
                <span className="sr-only">Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
            <div className="hidden md:flex items-center gap-1">
              <span className="text-sm">{t.common?.followUs || "Follow us:"}</span>
              <div className="flex gap-2">
                <a href="#" className="bg-black rounded-full p-1 flex items-center justify-center hover:bg-gray-800">
                  <Facebook size={16} />
                </a>
                <a href="#" className="bg-black rounded-full p-1 flex items-center justify-center hover:bg-gray-800">
                  <Twitter size={16} />
                </a>
                <a href="#" className="bg-black rounded-full p-1 flex items-center justify-center hover:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                </a>
                <a href="#" className="bg-black rounded-full p-1 flex items-center justify-center hover:bg-gray-800">
                  <Instagram size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
