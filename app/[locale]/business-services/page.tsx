import BusinessServicesClient from "./BusinessServicesClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Business Services | UpperVisa",
  description:
    "Specialized immigration services for investors, entrepreneurs, and companies, including EB-5 investor visas, business setup, and corporate immigration solutions.",
}

export default function BusinessServicesPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  return <BusinessServicesClient locale={locale} />
}
