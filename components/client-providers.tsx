"use client"; // This whole component is client-side

import { type ReactNode } from "react";
import { LanguageProvider } from "./language-provider"; // Import the original provider logic

// This component wraps children with client-side providers
export function ClientProviders({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) {
  return <LanguageProvider locale={locale}>{children}</LanguageProvider>;
  // Add other client-side providers here if needed in the future
}
