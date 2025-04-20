import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
// Removed unused import: import translations from "@/translations"

export const metadata: Metadata = {
  title: "Our Services | UpperVisa Immigration & Visa Consulting",
  description:
    "Comprehensive immigration services including visa applications, permanent residency, naturalization, relocation assistance, and business consulting.",
}

export default function ServicesPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  // Removed unused variable: const t = ...

  // Service categories
  const serviceCategories = [
    {
      id: "immigration-visas",
      title: "Immigration & Visas",
      description:
        "Expert guidance for all visa types, including immigrant visas, non-immigrant visas, and status adjustment for those already in the U.S.",
      image: "/images/services/immigration-visas.jpg",
      link: `/${locale}/services/immigration-visas`,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      ),
    },
    {
      id: "permanent-residency-naturalization",
      title: "Permanent Residency & Naturalization",
      description:
        "Comprehensive support for obtaining a Green Card and navigating the path to U.S. citizenship through naturalization.",
      image: "/images/services/permanent-residency.jpg",
      link: `/${locale}/services/permanent-residency-naturalization`,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      id: "relocation-settlement",
      title: "Relocation & Settlement",
      description:
        "Personalized assistance with housing, education, public services, and cultural integration to help you settle comfortably in the United States.",
      image: "/images/services/relocation-settlement.jpg",
      link: `/${locale}/services/relocation-settlement`,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      id: "business-consulting",
      title: "Business Consulting",
      description:
        "Specialized services for investors, entrepreneurs, and companies, including EB-5 investor visas, business setup, and corporate immigration solutions.",
      image: "/images/services/business-consulting.jpg",
      link: `/${locale}/services/business-consulting`,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-medium mb-4">Our Services</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive immigration and visa solutions tailored to your unique needs, from visa applications to
            settlement assistance and business consulting.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-gray-50">
        <div className="w-full max-w-[1350px] mx-auto px-4">
          {/* Introduction */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-medium text-gray-900 mb-6">How We Can Help You</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At UpperVisa, we provide expert guidance through every step of your immigration journey. Our comprehensive
              services are designed to make your transition to the United States as smooth and successful as possible.
            </p>
          </div>

          {/* Service Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:shadow-md hover:-translate-y-1"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-4">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-medium text-gray-900">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <Link
                    href={category.link}
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
                  >
                    Explore Services <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="mt-20 bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-medium text-gray-900 mb-6 text-center">Why Choose UpperVisa</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-600 mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">99% Success Rate</h3>
                <p className="text-gray-600">
                  Our proven track record of successful visa applications and immigration cases speaks for itself.
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-600 mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Expert Consultants</h3>
                <p className="text-gray-600">
                  Our team consists of experienced immigration professionals with deep knowledge of U.S. immigration
                  law.
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-600 mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Personalized Approach</h3>
                <p className="text-gray-600">
                  We develop customized strategies tailored to your unique situation and immigration goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
