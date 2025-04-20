import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Check } from "lucide-react"
// Removed unused import: import translations from "@/translations"

export const metadata: Metadata = {
  title: "Immigrant Visas | UpperVisa",
  description:
    "Expert guidance for immigrant visas leading to permanent residency in the United States, including employment-based, family-based, and investment visas.",
}

export default function ImmigrantVisasPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  // Removed unused variable: const t = ...

  // Immigrant visa categories
  const visaCategories = [
    {
      id: "employment-based",
      title: "Employment-Based Immigrant Visas",
      description:
        "Permanent visas for individuals with exceptional skills, advanced degrees, or job offers from U.S. employers.",
      image: "/images/services/employment-based-visas.jpg",
      visas: [
        {
          name: "EB-1 Extraordinary Ability",
          description:
            "For individuals with extraordinary ability in sciences, arts, education, business, or athletics.",
          link: `/${locale}/immigration-visas/immigrant-visas/eb-1`,
        },
        {
          name: "EB-2 Advanced Degree",
          description: "For professionals with advanced degrees or exceptional ability in their field.",
          link: `/${locale}/immigration-visas/immigrant-visas/eb-2`,
        },
        {
          name: "EB-2 National Interest Waiver",
          description: "For those whose work is in the national interest of the United States.",
          link: `/${locale}/immigration-visas/immigrant-visas/eb-2-niw`,
        },
        {
          name: "EB-3 Skilled Workers",
          description: "For skilled workers, professionals, and other workers with job offers from U.S. employers.",
          link: `/${locale}/immigration-visas/immigrant-visas/eb-3`,
        },
      ],
    },
    {
      id: "family-based",
      title: "Family-Based Immigrant Visas",
      description:
        "Visas for close relatives of U.S. citizens and permanent residents seeking to reunite with their families.",
      image: "/images/services/family-based-visas.jpg",
      visas: [
        {
          name: "Immediate Relative Visas",
          description: "For spouses, unmarried children under 21, and parents of U.S. citizens.",
          link: `/${locale}/immigration-visas/immigrant-visas/immediate-relative`,
        },
        {
          name: "Family Preference Visas",
          description: "For more distant relatives of U.S. citizens and relatives of permanent residents.",
          link: `/${locale}/immigration-visas/immigrant-visas/family-preference`,
        },
        {
          name: "Marriage Visas",
          description: "For spouses of U.S. citizens and permanent residents.",
          link: `/${locale}/immigration-visas/immigrant-visas/marriage-visa`,
        },
        {
          name: "Fiancé(e) Visas",
          description: "For fiancé(e)s of U.S. citizens planning to marry within 90 days of arrival.",
          link: `/${locale}/immigration-visas/immigrant-visas/fiance-visa`,
        },
      ],
    },
    {
      id: "investment-based",
      title: "Investment-Based Immigrant Visas",
      description:
        "Visas for investors who make a significant investment in a U.S. business that creates jobs for U.S. workers.",
      image: "/images/services/investment-based-visas.jpg",
      visas: [
        {
          name: "EB-5 Direct Investment",
          description: "For investors who directly invest in and manage a new commercial enterprise.",
          link: `/${locale}/immigration-visas/immigrant-visas/eb-5-direct`,
        },
        {
          name: "EB-5 Regional Center Investment",
          description: "For investors who invest through a USCIS-approved regional center.",
          link: `/${locale}/immigration-visas/immigrant-visas/eb-5-regional-center`,
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-medium mb-4">Immigrant Visas</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Permanent visas for individuals seeking to live and work in the United States permanently, leading to a
            Green Card.
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
                    <span className="text-gray-500">Immigrant Visas</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-medium text-gray-900 mb-6">Immigrant Visa Services</h2>
            <p className="text-gray-600 mb-8">
              Immigrant visas are for those seeking to live permanently in the United States. These visas lead to lawful
              permanent resident status, commonly known as a Green Card. At UpperVisa, we provide comprehensive guidance
              through the complex immigrant visa process, helping you choose the right category and prepare a strong
              application.
            </p>
            <p className="text-gray-600">
              Whether you qualify through employment, family relationships, or investment, our experienced team will
              develop a personalized strategy to maximize your chances of success and minimize processing times.
            </p>
          </div>

          {/* Visa Categories */}
          <div className="space-y-16">
            {visaCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-1 bg-red-600 mr-4"></div>
                    <h3 className="text-2xl font-medium text-gray-900">{category.title}</h3>
                  </div>

                  <div className="md:flex mb-8">
                    <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                      <div className="relative h-64 w-full">
                        <Image
                          src={category.image || "/placeholder.svg?height=600&width=800&query=visa application"}
                          alt={category.title}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-gray-600 mb-6">{category.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {category.visas.map((visa) => (
                          <div
                            key={visa.name}
                            className="border border-gray-200 rounded-lg p-4 hover:border-red-600 transition-colors"
                          >
                            <h4 className="text-lg font-medium text-gray-900 mb-2">{visa.name}</h4>
                            <p className="text-gray-600 text-sm mb-4">{visa.description}</p>
                            <Link
                              href={visa.link}
                              className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm"
                            >
                              Learn More <ChevronRight className="w-4 h-4 ml-1" />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose UpperVisa */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-medium text-gray-900 mb-6 text-center">
              Why Choose UpperVisa for Your Immigrant Visa
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">99% Success Rate</h4>
                <p className="text-gray-600">
                  Our proven track record of successful immigrant visa applications speaks for itself.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Expert Consultants</h4>
                <p className="text-gray-600">
                  Our team consists of experienced immigration professionals with deep knowledge of U.S. immigration
                  law.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Personalized Approach</h4>
                <p className="text-gray-600">
                  We develop customized strategies tailored to your unique situation and immigration goals.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-red-600 text-white p-8 rounded-lg">
            <div className="text-center">
              <h3 className="text-2xl font-medium mb-4">Ready to Begin Your Immigrant Visa Application?</h3>
              <p className="text-white/90 max-w-2xl mx-auto mb-6">
                Contact our team today for a personalized consultation and expert guidance on your immigrant visa
                options.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href={`/${locale}/contact`}
                  className="bg-white text-red-600 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href={`/${locale}/book-appointment`}
                  className="border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white/10 transition-colors"
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
