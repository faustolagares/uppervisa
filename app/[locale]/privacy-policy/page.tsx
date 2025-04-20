import PrivacyPolicyClient from "./PrivacyPolicyClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | UpperVisa Immigration & Visa Services",
  description:
    "Learn about how UpperVisa collects, uses, and protects your personal information. Our privacy policy outlines our commitment to safeguarding your data.",
}

export default function PrivacyPolicyPage({ params }: { params: { locale: string } }) {
  return <PrivacyPolicyClient locale={params.locale} />
}
