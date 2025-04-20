import TermsOfServiceClient from "./TermsOfServiceClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | UpperVisa Immigration & Visa Services",
  description:
    "Read the terms and conditions governing the use of UpperVisa's immigration and visa services. Our terms outline the rights and responsibilities of all parties.",
}

export default function TermsOfServicePage({ params }: { params: { locale: string } }) {
  return <TermsOfServiceClient locale={params.locale} />
}
