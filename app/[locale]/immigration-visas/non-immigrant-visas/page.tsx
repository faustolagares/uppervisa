import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
// Removed unused import: import translations from "@/translations"

export const metadata: Metadata = {
  title: "Non-Immigrant Visa Services | UpperVisa",
  description:
    "Expert guidance for temporary visas including tourist, business, student, and work visas for the United States.",
}

export default function NonImmigrantVisasPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  // Removed unused variable: const t = ...

  // Visa categories
  const visaCategories = [
    {
      id: "visitor-visas",
      title: "Visitor Visas",
      subtitle: "Vistos de Visitante",
      description:
        "Temporary visas for tourists, business travelers, and those seeking medical treatment in the United States.",
      image: "/images/services/tourist-visa.jpg",
      link: `/${locale}/immigration-visas/non-immigrant-visas/visitor-visas`,
      services: [
        {
          name: "B-1 Business Visitor Visa",
          link: `/${locale}/immigration-visas/non-immigrant-visas/visitor-visas/b1`,
        },
        {
          name: "B-2 Tourist Visa",
          link: `/${locale}/immigration-visas/non-immigrant-visas/visitor-visas/b2`,
        },
        {
          name: "Visa Waiver Program (ESTA)",
          link: `/${locale}/immigration-visas/non-immigrant-visas/visitor-visas/esta`,
        },
      ],
    },
    {
      id: "student-visas",
      title: "Student Visas",
      subtitle: "Vistos de Estudante",
      description:
        "Visas for academic students, vocational students, and exchange visitors pursuing education in the United States.",
      image: "/images/services/student-visa.jpg",
      link: `/${locale}/immigration-visas/non-immigrant-visas/student-visas`,
      services: [
        {
          name: "F-1 Academic Student Visa",
          link: `/${locale}/immigration-visas/non-immigrant-visas/student-visas/f1`,
        },
        {
          name: "M-1 Vocational Student Visa",
          link: `/${locale}/immigration-visas/non-immigrant-visas/student-visas/m1`,
        },
        {
          name: "J-1 Exchange Visitor Visa",
          link: `/${locale}/immigration-visas/non-immigrant-visas/student-visas/j1`,
        },
      ],
    },
    {
      id: "work-visas",
      title: "Work Visas",
      subtitle: "Vistos de Trabalho",
      description:
        "Temporary visas for professionals, skilled workers, and specialized employees to work in the United States.",
      image: "/images/services/business-visa.jpg",
      link: `/${locale}/immigration-visas/non-immigrant-visas/work-visas`,
      services: [
        {
          name: "H-1B Specialty Occupation",
          link: `/${locale}/immigration-visas/non-immigrant-visas/work-visas/h1b`,
        },
        {
          name: "L-1 Intracompany Transferee",
          link: `/${locale}/immigration-visas/non-immigrant-visas/work-visas/l1`,
        },
        {
          name: "O-1 Extraordinary Ability",
          link: `/${locale}/immigration-visas/non-immigrant-visas/work-visas/o1`,
        },
        {
          name: "TN NAFTA Professionals",
          link: `/${locale}/immigration-visas/non-immigrant-visas/work-visas/tn`,
        },
        {
          name: "E-3 Australian Professionals",
          link: `/${locale}/immigration-visas/non-immigrant-visas/work-visas/e3`,
        },
      ],
    },
    {
      id: "family-visas",
      title: "Family & Fiancé Visas",
      subtitle: "Vistos para Família e Noivos",
      description:
        "Temporary visas for fiancés of U.S. citizens and certain family members awaiting immigrant visa processing.",
      image: "/images/services/residence-visa.jpg",
      link: `/${locale}/immigration-visas/non-immigrant-visas/family-visas`,
      services: [
        {
          name: "K-1 Fiancé Visa",
          link: `/${locale}/immigration-visas/non-immigrant-visas/family-visas/k1`,
        },
        {
          name: "K-3 Spouse Visa",
          link: `/${locale}/immigration-visas/non-immigrant-visas/family-visas/k3`,
        },
        {
          name: "V Visa for Family Members",
          link: `/${locale}/immigration-visas/non-immigrant-visas/family-visas/v`,
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-medium mb-4">Non-Immigrant Visa Services</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Expert guidance for temporary visas including tourist, business, student, and work visas for the United
            States.
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
                    <span className="text-gray-500">Non-Immigrant Visas</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-medium text-gray-900 mb-6">Non-Immigrant Visa Services</h2>
            <p className="text-gray-600 mb-8">
              Non-immigrant visas allow foreign nationals to enter the United States temporarily for specific purposes
              such as tourism, business, education, or employment. Unlike immigrant visas, they do not provide a path to
              permanent residency but are essential for many international travelers and professionals.
            </p>
            <p className="text-gray-600">
              At UpperVisa, we provide expert guidance for all types of non-immigrant visas, helping you navigate the
              complex application process, prepare the necessary documentation, and maximize your chances of approval.
              Our team stays up-to-date with the latest immigration policies and requirements to ensure a smooth and
              successful visa application experience.
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
                <h3 className="text-2xl font-medium mb-2">Ready to Apply for a Non-Immigrant Visa?</h3>
                <p className="text-gray-300">
                  Contact our team today for a personalized consultation and expert guidance on your visa options.
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
