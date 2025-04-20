import AboutPageClient from "./AboutPageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About UpperVisa | Expert Immigration & Visa Consulting Services",
  description:
    "Learn about UpperVisa's mission, values, expert team, and our commitment to providing exceptional immigration and visa services with a 99% success rate worldwide.",
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  return <AboutPageClient locale={params.locale} />
}
