import type { Metadata } from "next"
import ImmigrationVisasClient from "./ImmigrationVisasClient"

export const metadata: Metadata = {
  title: "Immigration & Visa Services | UpperVisa",
  description:
    "Expert guidance for all visa types, including immigrant visas, non-immigrant visas, permanent residency, and relocation services.",
}

export default function ImmigrationVisasPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  return <ImmigrationVisasClient locale={locale} />
}
