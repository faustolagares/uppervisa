import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Check } from "lucide-react"
// Removed unused import: import translations from "@/translations"

export const metadata: Metadata = {
  title: "Relocation & Settlement Services | UpperVisa",
  description:
    "Personalized assistance with housing, education, healthcare, and cultural integration to help you settle comfortably in the United States.",
}

export default function RelocationSettlementPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  // Removed unused variable: const t = ...

  // Relocation services
  const relocationServices = [
    {
      id: "housing",
      title: "Housing Assistance",
      subtitle: "Assistência com Moradia",
      description:
        "Comprehensive support for finding and securing suitable housing in your desired location in the United States.",
      image: "/images/services/housing-assistance.jpg",
      link: `/${locale}/immigration-visas/relocation-settlement/housing`,
      services: [
        {
          name: "Neighborhood Selection Guidance",
          link: `/${locale}/immigration-visas/relocation-settlement/housing/neighborhoods`,
        },
        {
          name: "Rental Property Search",
          link: `/${locale}/immigration-visas/relocation-settlement/housing/rental`,
        },
        {
          name: "Lease Negotiation Assistance",
          link: `/${locale}/immigration-visas/relocation-settlement/housing/lease`,
        },
        {
          name: "Home Purchase Guidance",
          link: `/${locale}/immigration-visas/relocation-settlement/housing/purchase`,
        },
      ],
    },
    {
      id: "education",
      title: "Education Support",
      subtitle: "Suporte Educacional",
      description:
        "Guidance on navigating the U.S. education system, from school selection to enrollment and academic support.",
      image: "/images/services/education-support.jpg",
      link: `/${locale}/immigration-visas/relocation-settlement/education`,
      services: [
        {
          name: "School and University Selection",
          link: `/${locale}/immigration-visas/relocation-settlement/education/selection`,
        },
        {
          name: "Enrollment Assistance",
          link: `/${locale}/immigration-visas/relocation-settlement/education/enrollment`,
        },
        {
          name: "Credential Evaluation",
          link: `/${locale}/immigration-visas/relocation-settlement/education/credentials`,
        },
        {
          name: "ESL Program Guidance",
          link: `/${locale}/immigration-visas/relocation-settlement/education/esl`,
        },
      ],
    },
    {
      id: "healthcare",
      title: "Healthcare Navigation",
      subtitle: "Navegação no Sistema de Saúde",
      description:
        "Support for understanding and accessing the U.S. healthcare system, including insurance options and provider selection.",
      image: "/images/services/healthcare-navigation.jpg",
      link: `/${locale}/immigration-visas/relocation-settlement/healthcare`,
      services: [
        {
          name: "Health Insurance Guidance",
          link: `/${locale}/immigration-visas/relocation-settlement/healthcare/insurance`,
        },
        {
          name: "Provider Selection",
          link: `/${locale}/immigration-visas/relocation-settlement/healthcare/providers`,
        },
        {
          name: "Medical Record Transfer",
          link: `/${locale}/immigration-visas/relocation-settlement/healthcare/records`,
        },
        {
          name: "Prescription Medication Assistance",
          link: `/${locale}/immigration-visas/relocation-settlement/healthcare/medications`,
        },
      ],
    },
    {
      id: "banking",
      title: "Banking & Financial Setup",
      subtitle: "Configuração Bancária e Financeira",
      description:
        "Assistance with establishing banking relationships, building credit, and managing finances in the United States.",
      image: "/images/services/banking-financial.jpg",
      link: `/${locale}/immigration-visas/relocation-settlement/banking`,
      services: [
        {
          name: "Bank Account Setup",
          link: `/${locale}/immigration-visas/relocation-settlement/banking/accounts`,
        },
        {
          name: "Credit Building Strategies",
          link: `/${locale}/immigration-visas/relocation-settlement/banking/credit`,
        },
        {
          name: "Tax Guidance for Newcomers",
          link: `/${locale}/immigration-visas/relocation-settlement/banking/taxes`,
        },
        {
          name: "Investment Options",
          link: `/${locale}/immigration-visas/relocation-settlement/banking/investments`,
        },
      ],
    },
    {
      id: "cultural",
      title: "Cultural Integration",
      subtitle: "Integração Cultural",
      description:
        "Support for adapting to American culture, customs, and social norms to help you feel at home in your new country.",
      image: "/images/services/cultural-integration.jpg",
      link: `/${locale}/immigration-visas/relocation-settlement/cultural-integration`,
      services: [
        {
          name: "Language Learning Resources",
          link: `/${locale}/immigration-visas/relocation-settlement/cultural-integration/language`,
        },
        {
          name: "Cultural Orientation",
          link: `/${locale}/immigration-visas/relocation-settlement/cultural-integration/orientation`,
        },
        {
          name: "Community Connections",
          link: `/${locale}/immigration-visas/relocation-settlement/cultural-integration/community`,
        },
        {
          name: "Social Integration Activities",
          link: `/${locale}/immigration-visas/relocation-settlement/cultural-integration/social`,
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-medium mb-4">Relocation & Settlement Services</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Personalized assistance with housing, education, healthcare, and cultural integration to help you settle
            comfortably in the United States.
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
                    Home
                  </Link>
                </li>
                <li>
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
                    <Link href={`/${locale}/immigration-visas`} className="text-gray-700 hover:text-red-600">
                      Immigration & Visas
                    </Link>
                  </div>
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
                    <span className="text-gray-500">Relocation & Settlement</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-medium text-gray-900 mb-6">Relocation & Settlement Services</h2>
            <p className="text-gray-600 mb-8">
              Moving to a new country involves much more than just obtaining the right visa. At UpperVisa, we understand
              that successfully settling in the United States requires navigating various practical aspects of daily
              life, from finding suitable housing to understanding the healthcare system and integrating into your new
              community.
            </p>
            <p className="text-gray-600">
              Our comprehensive relocation and settlement services are designed to provide personalized support
              throughout your transition to life in the United States. We help simplify the complex process of
              establishing yourself in a new country, allowing you to focus on building your new life with confidence
              and peace of mind.
            </p>
          </div>

          {/* Why Choose Our Relocation Services */}
          <div className="bg-white p-8 rounded-lg shadow-sm mb-16">
            <h3 className="text-2xl font-medium text-gray-900 mb-6">Why Choose Our Relocation Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Personalized Approach</h4>
                  <p className="text-gray-600 text-sm">
                    Tailored solutions based on your specific needs, preferences, and circumstances.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Local Expertise</h4>
                  <p className="text-gray-600 text-sm">
                    In-depth knowledge of local markets, systems, and resources across the United States.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Comprehensive Support</h4>
                  <p className="text-gray-600 text-sm">
                    End-to-end assistance covering all aspects of your relocation and settlement needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Cultural Sensitivity</h4>
                  <p className="text-gray-600 text-sm">
                    Understanding of cross-cultural challenges and guidance for smooth adaptation.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Time and Stress Saving</h4>
                  <p className="text-gray-600 text-sm">
                    Efficient handling of logistics and paperwork to minimize your burden during transition.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Ongoing Support</h4>
                  <p className="text-gray-600 text-sm">
                    Continued assistance as you adjust to life in the United States over time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Relocation Services */}
          <div className="space-y-16">
            {relocationServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 relative">
                    <div className="h-64 md:h-full relative">
                      <Image
                        src={service.image || "/placeholder.svg?height=600&width=800&query=" + service.title}
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

                    <h4 className="text-lg font-medium text-gray-900 mb-4">Our Services Include:</h4>
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
                      Explore {service.title} <ChevronRight className="w-4 h-4 ml-2" />
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
                <h3 className="text-2xl font-medium mb-2">Ready to Make the United States Your Home?</h3>
                <p className="text-gray-300">
                  Contact our team today for personalized relocation and settlement assistance tailored to your needs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/${locale}/contact`}
                  className="bg-red-600 text-white px-6 py-3 rounded-md text-center hover:bg-red-700 transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href={`/${locale}/book-appointment`}
                  className="bg-white text-gray-900 px-6 py-3 rounded-md text-center hover:bg-gray-100 transition-colors"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
