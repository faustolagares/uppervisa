"use client"

import type React from "react"
import { X, Search } from "lucide-react"
import { LanguageSwitcher } from "../LanguageSwitcher"

interface MobileNavigationProps {
  isOpen: boolean
  onClose: () => void
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-gray-900 z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between h-16 px-6 border-b border-gray-700">
        {/* Close Button */}
        <button onClick={onClose}>
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Language Switcher */}
        <div className="flex items-center justify-center">
          <LanguageSwitcher mobile={true} />
        </div>
      </div>

      {/* Mobile Menu Content */}
      <nav className="p-6">
        <ul>
          <li className="py-2 border-b border-gray-700">
            <a href="#" className="flex items-center w-full text-white hover:text-blue-300">
              Home
            </a>
          </li>
          <li className="py-2 border-b border-gray-700">
            <a href="#" className="flex items-center w-full text-white hover:text-blue-300">
              About
            </a>
          </li>
          <li className="py-2 border-b border-gray-700">
            <a href="#" className="flex items-center w-full text-white hover:text-blue-300">
              Services
            </a>
          </li>
          <li className="py-2 border-b border-gray-700">
            <a href="#" className="flex items-center w-full text-white hover:text-blue-300">
              Contact
            </a>
          </li>
          <li className="py-2 border-b border-gray-700">
            <button
              className="flex items-center w-full text-white hover:text-blue-300"
              onClick={() => {
                /* search action */
              }}
            >
              <Search className="w-5 h-5 mr-2" />
              <span>Search</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MobileNavigation
