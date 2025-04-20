import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

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
  const { t } = useLanguage()

  // Business service categories
  const businessServices = [
    {
      id: "eb5-investor-visa",
      title: "EB-5 Investor Visa",
      subtitle: "Visto de Investidor EB-5",
      description:
        "Obtain permanent residency through investment in a new commercial enterprise that creates jobs for U.S. workers.",
      image: "/images/services/eb5-investor.jpg",
      link: `/${locale}/business-services/eb5-investor-visa`,
      services: [
        { name: "Direct Investment", link: `/${locale}/business-services/eb5-investor-visa/direct-investment` },
        { name: "Regional Center Investment", link: `/${locale}/business-services/eb5-investor-visa/regional-center` },
        {
          name: "Source of Funds Documentation",
          link: `/${locale}/business-services/eb5-investor-visa/source-of-funds`,
        },
        { name: "Business Plan Development", link: `/${locale}/business-services/eb5-investor-visa/business-plan` },
      ],
    },
    {
      id: "e2-treaty-investor",
      title: "E-2 Treaty Investor",
      subtitle: "Investidor de Tratado E-2",
      description:
        "Temporary visa for nationals of treaty countries who invest a substantial amount in a U.S. business and direct its operations.",
      image: "/images/services/e2-treaty-investor.jpg",
      link: `/${locale}/business-services/e2-treaty-investor`,
      services: [
        {
          name: "E-2 Visa Eligibility Assessment",
          link: `/${locale}/business-services/e2-treaty-investor/eligibility`,
        },
        { name: "Business Acquisition", link: `/${locale}/business-services/e2-treaty-investor/business-acquisition` },
        { name: "New Business Setup", link: `/${locale}/business-services/e2-treaty-investor/new-business` },
        { name: "E-2 Visa Renewal", link: `/${locale}/business-services/e2-treaty-investor/renewal` },
      ],
    },
    {
      id: "business-formation",
      title: "Business Formation",
      subtitle: "Formação de Empresas",
      description:
        "Comprehensive services for foreign entrepreneurs looking to establish or expand their business in the United States.",
      image: "/images/services/business-formation.jpg",
      link: `/${locale}/business-services/business-formation`,
      services: [
        { name: "LLC Formation", link: `/${locale}/business-services/business-formation/llc` },
        { name: "Corporation Setup", link: `/${locale}/business-services/business-formation/corporation` },
        { name: "Business Licensing", link: `/${locale}/business-services/business-formation/licensing` },
        { name: "Tax ID & Banking Setup", link: `/${locale}/business-services/business-formation/tax-banking` },
      ],
    },
    {
      id: "corporate-immigration",
      title: "Corporate Immigration",
      subtitle: "Imigração Corporativa",
      description:
        "Strategic immigration solutions for companies transferring employees to the U.S. or hiring foreign talent.",
      image: "/images/services/corporate-immigration.jpg",
      link: `/${locale}/business-services/corporate-immigration`,
      services: [
        { name: "L-1 Intracompany Transfers", link: `/${locale}/business-services/corporate-immigration/l-1` },
        { name: "H-1B Specialty Occupations", link: `/${locale}/business-services/corporate-immigration/h-1b` },
        { name: "PERM Labor Certification", link: `/${locale}/business-services/corporate-immigration/perm` },
        { name: "Immigration Compliance", link: `/${locale}/business-services/corporate-immigration/compliance` },
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-medium mb-4">{t("businessServices.pageTitle")}</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t("businessServices.pageDescription")}
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
                    <span className="text-gray-500">{t("businessServices.pageTitle")}</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-medium text-gray-900 mb-6">{t("businessServices.introTitle")}</h2>
            <p className="text-gray-600 mb-8">
              {t("businessServices.introParagraph1")}
            </p>
            <p className="text-gray-600">
              {t("businessServices.introParagraph2")}
            </p>
          </div>

          {/* Business Service Categories */}
          <div className="space-y-16">
            {businessServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 relative">
                    <div className="h-64 md:h-full relative">
                      <Image
                        src={service.image || "/placeholder.svg?height=600&width=800&query=business meeting"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <h3 className="text-2xl font-medium text-gray-900 mb-1">{service.title}</h3>
                    <p className="text-red-600 italic mb-4">{service.subtitle}</p>
                    <p className="text-gray-600 mb-6">{service.description}</p>

                    <h4 className="text-lg font-medium text-gray-900 mb-4">{t("businessServices.servicesInclude")}</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {service.services.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.link}
                            className="flex items-center text-gray-700 hover:text-red-600 hover:underline"
                          >
                            <ChevronRight className="w-4 h-4 mr-2 text-red-600" />
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={service.link}
                      className="inline-flex items-center bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
                    >
                      {t("businessServices.explore")} {service.title} <ChevronRight className="w-4 h-4 ml-2" />
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
                <h3 className="text-2xl font-medium mb-2">{t("businessServices.ctaTitle")}</h3>
                <p className="text-gray-300">
                  {t("businessServices.ctaDescription")}
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
