"use client";

import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function ImmigrationVisasClient({
  locale,
}: {
  locale: string
}) {
  const { t } = useLanguage()

  // Visa categories
  const visaCategories = [
    {
      id: "immigrant-visas",
      title: "Immigrant Visas",
      subtitle: "Vistos de Imigrantes",
      description:
        "Permanent visas for individuals seeking to live and work in the United States permanently, leading to a Green Card.",
      image: "/images/services/immigrant-visas.jpg",
      link: `/${locale}/immigration-visas/immigrant-visas`,
      services: [
        { name: "EB-1 (Extraordinary Ability)", link: `/${locale}/immigration-visas/immigrant-visas/eb-1` },
        {
          name: "EB-2 (Advanced Degree or Exceptional Ability)",
          link: `/${locale}/immigration-visas/immigrant-visas/eb-2`,
        },
        {
          name: "EB-2 NIW (National Interest Waiver)",
          link: `/${locale}/immigration-visas/immigrant-visas/eb-2-niw`,
        },
        {
          name: "EB-3 (Skilled Workers and Professionals)",
          link: `/${locale}/immigration-visas/immigrant-visas/eb-3`,
        },
        { name: "EB-5 (Investor Visa)", link: `/${locale}/immigration-visas/immigrant-visas/eb-5` },
        {
          name: "CR-1/IR-1 Marriage Visa",
          link: `/${locale}/immigration-visas/immigrant-visas/marriage-visa`,
        },
        { name: "K-1 Fiancé Visa", link: `/${locale}/immigration-visas/immigrant-visas/fiance-visa` },
      ],
    },
    {
      id: "non-immigrant-visas",
      title: "Non-Immigrant Visas",
      subtitle: "Vistos de Não Imigrantes",
      description:
        "Temporary visas for individuals looking to visit, study, work, or conduct business in the United States for a specific period.",
      image: "/images/services/non-immigrant-visas.jpg",
      link: `/${locale}/immigration-visas/non-immigrant-visas`,
      services: [
        {
          name: "B1/B2 (Business and Tourist Visas)",
          link: `/${locale}/immigration-visas/non-immigrant-visas/b-visas`,
        },
        { name: "F-1 (Student Visa)", link: `/${locale}/immigration-visas/non-immigrant-visas/f-1` },
        {
          name: "J-1 (Exchange Visitor Visa)",
          link: `/${locale}/immigration-visas/non-immigrant-visas/j-1`,
        },
        {
          name: "L-1 (Intra-Company Transfer Visa)",
          link: `/${locale}/immigration-visas/non-immigrant-visas/l-1`,
        },
        {
          name: "H-1B (Specialty Occupation Visa)",
          link: `/${locale}/immigration-visas/non-immigrant-visas/h-1b`,
        },
      ],
    },
    {
      id: "permanent-residency",
      title: "Permanent Residency",
      subtitle: "Residência Permanente",
      description:
        "Services for obtaining a Green Card and navigating the path to permanent residency in the United States.",
      image: "/images/services/permanent-residency.jpg",
      link: `/${locale}/immigration-visas/permanent-residency`,
      services: [
        {
          name: "Family-Based Green Cards",
          link: `/${locale}/immigration-visas/permanent-residency/family-based`,
        },
        {
          name: "Employment-Based Green Cards",
          link: `/${locale}/immigration-visas/permanent-residency/employment-based`,
        },
        {
          name: "Adjustment of Status",
          link: `/${locale}/immigration-visas/permanent-residency/adjustment-of-status`,
        },
        {
          name: "Consular Processing",
          link: `/${locale}/immigration-visas/permanent-residency/consular-processing`,
        },
        {
          name: "Naturalization & Citizenship",
          link: `/${locale}/immigration-visas/permanent-residency/naturalization`,
        },
      ],
    },
    {
      id: "relocation-settlement",
      title: "Relocation & Settlement",
      subtitle: "Relocação e Estabelecimento",
      description:
        "Personalized assistance with housing, education, public services, and cultural integration to help you settle comfortably in the United States.",
      image: "/images/services/relocation-settlement.jpg",
      link: `/${locale}/immigration-visas/relocation-settlement`,
      services: [
        {
          name: "Housing Assistance",
          link: `/${locale}/immigration-visas/relocation-settlement/housing`,
        },
        {
          name: "Education Support",
          link: `/${locale}/immigration-visas/relocation-settlement/education`,
        },
        {
          name: "Healthcare Navigation",
          link: `/${locale}/immigration-visas/relocation-settlement/healthcare`,
        },
        {
          name: "Banking & Financial Setup",
          link: `/${locale}/immigration-visas/relocation-settlement/banking`,
        },
        {
          name: "Cultural Integration",
          link: `/${locale}/immigration-visas/relocation-settlement/cultural-integration`,
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-medium mb-4">{t("immigrationVisas.pageTitle")}</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t("immigrationVisas.pageDescription")}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-gray-50">
        <div className="w-full max-w-[1350px] mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link href={`/${locale}`} className="text-gray-700 hover:text-red-600">
                    {t("navigation.home")}
                  </Link>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg
                      className="w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className="text-gray-500">{t("immigrationVisas.breadcrumbTitle")}</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-medium text-gray-900 mb-6">{t("immigrationVisas.introTitle")}</h2>
            <p className="text-gray-600 mb-8">
              {t("immigrationVisas.introParagraph1")}
            </p>
            <p className="text-gray-600">
              {t("immigrationVisas.introParagraph2")}
            </p>
          </div>

          {/* Visa Categories */}
          <div className="space-y-16">
            {visaCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 relative">
                    <div className="h-64 md:h-full relative">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <h3 className="text-2xl font-medium text-gray-900 mb-1">{category.title}</h3>
                    <p className="text-red-600 italic mb-4">{category.subtitle}</p>
                    <p className="text-gray-600 mb-6">{category.description}</p>

                    <h4 className="text-lg font-medium text-gray-900 mb-4">{t("immigrationVisas.servicesInclude")}</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {category.services.map((service) => (
                        <li key={service.name}>
                          <Link
                            href={service.link}
                            className="flex items-center text-gray-700 hover:text-red-600 hover:underline"
                          >
                            <ChevronRight className="w-4 h-4 mr-2 text-red-600" />
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={category.link}
                      className="inline-flex items-center bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
                    >
                      {t("immigrationVisas.explore")} {category.title} <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gray-900 text-white p-8 rounded-lg">
            <div className="md:flex items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-medium mb-2">{t("immigrationVisas.ctaTitle")}</h3>
                <p className="text-gray-300">
                  {t("immigrationVisas.ctaDescription")}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/${locale}/contact`}
                  className="bg-red-600 text-white px-6 py-3 rounded-md text-center hover:bg-red-700 transition-colors"
                >
                  {t("cta.contactUs")}
                </Link>
                <Link
                  href={`/${locale}/book-appointment`}
                  className="bg-white text-gray-900 px-6 py-3 rounded-md text-center hover:bg-gray-100 transition-colors"
                >
                  {t("cta.bookConsultation")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
