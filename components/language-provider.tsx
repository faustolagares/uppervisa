"use client";

import { createContext, useContext, type ReactNode } from "react"; // Remove useState, useEffect
import { useRouter, usePathname } from "next/navigation";
import { locales } from "@/middleware";
import translations from "@/translations"

type LanguageContextType = {
  locale: string
  t: (key: string) => string
  changeLocale: (newLocale: string) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({
  children,
  locale, // Expect locale string again
}: {
  children: ReactNode
  locale: string
}) {
  // locale is now a direct prop
  const router = useRouter();
  const pathname = usePathname();

  // Function to translate text
  const t = (key: string): string => {
    const keys = key.split(".")
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = translations[locale as keyof typeof translations] || {} // Disable rule for this line

    for (const k of keys) {
      // Access potentially nested property
      value = value[k]
      if (value === undefined || value === null) return key // Return the key if translation not found or value is null/undefined
    }

    return value as string
  }

  // Function to change the locale
  const changeLocale = (newLocale: string) => {
    if (!locales.includes(newLocale)) return

    // Get the path without the locale prefix
    const pathWithoutLocale = pathname.replace(/^\/[^/]+/, "")

    // Navigate to the same page but with the new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return <LanguageContext.Provider value={{ locale, t, changeLocale }}>{children}</LanguageContext.Provider>;
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
