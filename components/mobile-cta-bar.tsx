"use client"

// Removed unused import: import { useLanguage } from "./language-provider"

export default function MobileCTABar() {
  // Removed unused hook call: const { t, locale } = useLanguage()

  // WhatsApp número
  const whatsappNumber = "+19292805047"
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  // Usar a mesma cor da faixa "Updates" (bg-blue-600)
  return (
    <div className="lg:hidden w-full text-white py-2.5 px-4 bg-gray-900">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
        <span className="text-sm font-medium text-center">APPLY FOR YOUR VISA HERE</span>
      </a>
    </div>
  )
}
