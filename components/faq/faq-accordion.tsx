"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  defaultOpen?: number | null
}

export default function FAQAccordion({ items, defaultOpen = null }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            className={`w-full text-left p-5 flex justify-between items-center ${
              openIndex === index ? "bg-gray-50" : "bg-white"
            }`}
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
          >
            <span className="font-medium text-gray-900">{item.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-gray-500 transition-transform ${
                openIndex === index ? "transform rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="p-5 border-t border-gray-200 bg-white">
              <div className="prose max-w-none text-gray-600" dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
