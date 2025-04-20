"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"

interface FAQSearchProps {
  onSearch: (query: string) => void
  placeholder?: string
}

export default function FAQSearch({ onSearch, placeholder = "Search FAQs..." }: FAQSearchProps) {
  const [query, setQuery] = useState("")

  // Add useEffect to trigger search as user types
  useEffect(() => {
    // Debounce the search to avoid too many updates
    const timer = setTimeout(() => {
      onSearch(query)
    }, 300)

    return () => clearTimeout(timer)
  }, [query, onSearch])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto mb-12">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full px-5 py-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
        aria-label="Search frequently asked questions"
      />
      <button
        type="submit"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-600"
        aria-label="Search"
      >
        <Search className="w-5 h-5" />
      </button>
    </form>
  )
}
