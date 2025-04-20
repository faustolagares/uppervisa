import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Check } from "lucide-react"
// Removed unused import: import translations from "@/translations"

export const metadata: Metadata = {
  title: "Permanent Residency Services | UpperVisa",
  description:
    "Comprehensive support for obtaining a Green Card and navigating the path to U.S. permanent residency through various pathways.",
}

export default function PermanentResidencyPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  // Removed unused variable: const t = ...

  // Permanent Residency categories
  const residencyCategories = [
    {
      id: "family-based",
      title: "Family-Based Green Cards",
      subtitle: "Green Cards Baseados em Família",
      description:
        "Obtain permanent residency through qualifying family relationships with U.S. citizens or permanent residents.",
      image: "/images/services/family-based.jpg",
      link: `/${locale}/immigration-visas/permanent-residency/family-based`,
      services: [
        {
          name: "Immediate Relatives of U.S. Citizens",
          link: `/${locale}/immigration-visas/permanent-residency/family-based/immediate-relatives`,
        },
        {
          name: "Family Preference Categories",
          link: `/${locale}/immigration-visas/permanent-residency/family-based/family-preference`,
        },
        {
          name: "Marriage-Based Green Cards",
          link: `/${locale}/immigration-visas/permanent-residency/family-based/marriage`,
        },
      ],
    },
    {
      id: "employment-based",
      title: "Employment-Based Green Cards",
      subtitle: "Green Cards Baseados em Emprego",
      description:
        "Permanent residency through employment, extraordinary abilities, or investment in the United States.",
      image: "/images/services/employment-based-visas.jpg",
      link: `/${locale}/immigration-visas/permanent-residency/employment-based`,
      services: [
        {
          name: "EB-1 Priority Workers",
          link: `/${locale}/immigration-visas/immigrant-visas/eb-1`,
        },
        {
          name: "EB-2 Advanced Degree Professionals",
          link: `/${locale}/immigration-visas/immigrant-visas/eb-2`,
        },
        {
          name: "EB-3 Skilled Workers & Professionals",
          link: `/${locale}/immigration-visas/immigrant-visas/eb-3`,
        },
        {
          name: "EB-5 Immigrant Investors",
          link: `/${locale}/immigration-visas/immigrant-visas/eb-5`,
        },
      ],
    },
    {
      id: "adjustment-of-status",
      title: "Adjustment of Status",
      subtitle: "Ajuste de Status",
      description: "Process for obtaining a Green Card while already in the United States on a temporary visa.",
      image: "/images/services/adjustment-of-status.jpg",
      link: `/${locale}/immigration-visas/permanent-residency/adjustment-of-status`,
      services: [
        {
          name: "Form I-485 Filing Assistance",
          link: `/${locale}/immigration-visas/permanent-residency/adjustment-of-status/i-485`,
        },
        {
          name: "Employment Authorization Document (EAD)",
          link: `/${locale}/immigration-visas/permanent-residency/adjustment-of-status/ead`,
        },
        {
          name: "Advance Parole",
          link: `/${locale}/immigration-visas/permanent-residency/adjustment-of-status/advance-parole`,
        },
      ],
    },
    {
      id: "naturalization",
      title: "Naturalization & Citizenship",
      subtitle: "Naturalização e Cidadania",
      description:
        "The final step in the immigration journey, becoming a U.S. citizen through the naturalization process.",
      image: "/images/citizenship-test.jpg",
      link: `/${locale}/immigration-visas/permanent-residency/naturalization`,
      services: [
        {
          name: "Citizenship Eligibility Assessment",
          link: `/${locale}/immigration-visas/permanent-residency/naturalization/eligibility`,
        },
        {
          name: "N-400 Application Assistance",
          link: `/${locale}/immigration-visas/permanent-residency/naturalization/n-400`,
        },
        {
          name: "Citizenship Test Preparation",
          link: `/${locale}/immigration-visas/permanent-residency/naturalization/test-prep`,
        },
        {
          name: "Citizenship Interview Coaching",
          link: `/${locale}/immigration-visas/permanent-residency/naturalization/interview`,
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-medium mb-4">Permanent Residency Services</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive support for obtaining a Green Card and navigating the path to U.S. permanent residency through
            various pathways.
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
                    <span className="text-gray-500">Permanent Residency</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-medium text-gray-900 mb-6">Permanent Residency Services</h2>
            <p className="text-gray-600 mb-8">
              Obtaining permanent residency in the United States, commonly known as getting a Green Card, is a
              significant milestone in your immigration journey. A Green Card grants you the right to live and work
              permanently in the United States and is the pathway to eventual U.S. citizenship.
            </p>
            <p className="text-gray-600">
              At UpperVisa, we provide comprehensive guidance through every step of the permanent residency process,
              from determining the best pathway based on your unique situation to preparing a strong application and
              navigating any challenges that may arise. Our experienced team has helped thousands of individuals and
              families achieve their dream of permanent residency in the United States.
            </p>
          </div>

          {/* Benefits of Permanent Residency */}
          <div className="bg-white p-8 rounded-lg shadow-sm mb-16">
            <h3 className="text-2xl font-medium text-gray-900 mb-6">Benefits of U.S. Permanent Residency</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Live Permanently in the U.S.</h4>
                  <p className="text-gray-600 text-sm">
                    Reside anywhere in the United States without time restrictions.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Work Authorization</h4>
                  <p className="text-gray-600 text-sm">Work for any employer or start your own business in the U.S.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Education Benefits</h4>
                  <p className="text-gray-600 text-sm">
                    Access in-state tuition rates and certain educational financial aid.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Sponsor Family Members</h4>
                  <p className="text-gray-600 text-sm">
                    Petition for certain relatives to immigrate to the United States.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Social Security Benefits</h4>
                  <p className="text-gray-600 text-sm">
                    Qualify for Social Security benefits upon retirement if eligible.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Path to Citizenship</h4>
                  <p className="text-gray-600 text-sm">
                    Become eligible to apply for U.S. citizenship after 3-5 years.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Residency Categories */}
          <div className="space-y-16">
            {residencyCategories.map((category) => (
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

                    <h4 className="text-lg font-medium text-gray-900 mb-4">Our Services Include:</h4>
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
                      Explore {category.title} <ChevronRight className="w-4 h-4 ml-2" />
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
                <h3 className="text-2xl font-medium mb-2">Ready to Begin Your Green Card Journey?</h3>
                <p className="text-gray-300">
                  Contact our team today for a personalized consultation and expert guidance on your permanent residency
                  options.
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
