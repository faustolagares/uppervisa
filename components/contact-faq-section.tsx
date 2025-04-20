"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "./language-provider"
import translations from "@/translations" // Import translations

// Define interface for FAQ items
interface FAQItem {
  question: string
  answer: string
}

export default function FAQSection({ locale }: { locale: string }) {
  const { t } = useLanguage() // Re-added hook usage
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Fetch FAQ items directly from translations object
  const localeTranslations = translations[locale as keyof typeof translations] || translations["en-US"]
  const faqItems: FAQItem[] = localeTranslations.faqSection?.items || []

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">{t("faqSection.title")}</h2> {/* Increased size */}
          <p className="text-gray-600 max-w-2xl mx-auto">{t("faqSection.description")}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Ensure faqItems is an array before mapping */}
          {Array.isArray(faqItems) &&
            faqItems.map((item, index) => (
              <div key={index} className="mb-4">
                <button
                  className={`w-full text-left p-4 flex justify-between items-center ${
                    openIndex === index ? "bg-white rounded-t-lg shadow-sm" : "bg-white rounded-lg shadow-sm"
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  {/* Access question/answer from the item object */}
                  <span className="font-medium text-gray-900">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="bg-white p-4 rounded-b-lg shadow-sm border-t border-gray-100">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">{t("faqSection.contactPrompt")}</p>
          {/* Use translated email address from common section */}
          <a
            href={`mailto:${t("common.emailAddress") || "hello@uppervisa.com"}`}
            className="text-red-600 hover:text-red-700 font-medium"
          >
            {t("faqSection.contactLink")}
          </a>
        </div>
      </div>
    </div>
  )
}
