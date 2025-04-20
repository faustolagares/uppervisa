import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Check, Building, FileText, Shield, Globe } from "lucide-react"
// Removed unused import: import translations from "@/translations"

export const metadata: Metadata = {
  title: "Business Formation Services | UpperVisa",
  description:
    "Comprehensive services for foreign entrepreneurs looking to establish or expand their business in the United States.",
}

export default function BusinessFormationPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  // Removed unused variable: const t = ...

  // Business formation services
  const formationServices = [
    {
      id: "llc-formation",
      title: "LLC Formation",
      description: "Establish a Limited Liability Company with the right structure for your business goals.",
      icon: <Building className="w-6 h-6" />,
      features: [
        "State selection guidance",
        "Articles of Organization preparation",
        "Operating Agreement drafting",
        "EIN application",
        "Registered agent services",
        "Foreign qualification assistance",
      ],
    },
    {
      id: "corporation-setup",
      title: "Corporation Setup",
      description: "Form a C-Corporation or S-Corporation with the appropriate governance structure.",
      icon: <Shield className="w-6 h-6" />,
      features: [
        "State selection guidance",
        "Articles of Incorporation preparation",
        "Bylaws drafting",
        "Stock issuance assistance",
        "Board meeting documentation",
        "Corporate compliance guidance",
      ],
    },
    {
      id: "business-licensing",
      title: "Business Licensing",
      description: "Obtain all necessary licenses and permits to operate legally in the United States.",
      icon: <FileText className="w-6 h-6" />,
      features: [
        "Federal license identification",
        "State license applications",
        "Local permit guidance",
        "Industry-specific licensing",
        "Renewal management",
        "Compliance monitoring",
      ],
    },
    {
      id: "tax-banking",
      title: "Tax ID & Banking Setup",
      description: "Establish your tax presence and financial infrastructure in the United States.",
      icon: <Globe className="w-6 h-6" />,
      features: [
        "EIN application",
        "State tax registration",
        "Business bank account setup",
        "Merchant account establishment",
        "Tax compliance guidance",
        "Financial structure advisory",
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-medium mb-4">Business Formation Services</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive services for foreign entrepreneurs looking to establish or expand their business in the United
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
                    <Link href={`/${locale}/business-services`} className="text-gray-700 hover:text-red-600">
                      Business Services
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
                    <span className="text-gray-500">Business Formation</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
            <h2 className="text-3xl font-medium text-gray-900 mb-6">Establishing Your Business in the United States</h2>
            <p className="text-gray-600 mb-6">
              Starting a business in the United States as a foreign entrepreneur involves navigating complex legal, tax,
              and regulatory requirements. At UpperVisa, we provide comprehensive business formation services to help
              you establish your U.S. presence efficiently and in compliance with all applicable laws.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of business and immigration experts works together to ensure that your business structure aligns
              with your immigration goals, whether you're pursuing an E-2 treaty investor visa, L-1 intracompany
              transfer, or another business-related immigration pathway.
            </p>
            <p className="text-gray-600">
              We guide you through every step of the business formation process, from selecting the right business
              structure and state of incorporation to obtaining necessary licenses and setting up your financial
              infrastructure.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {formationServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-medium text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link
                      href={`/${locale}/business-services/business-formation/${service.id}`}
                      className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
                    >
                      Learn More <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose UpperVisa */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
            <h3 className="text-2xl font-medium text-gray-900 mb-6">Why Choose UpperVisa for Business Formation</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4">
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
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Integrated Approach</h4>
                <p className="text-gray-600">
                  We align your business formation with your immigration goals for a seamless strategy.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4">
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Compliance Expertise</h4>
                <p className="text-gray-600">
                  Our team ensures your business meets all U.S. legal and regulatory requirements.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4">
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Personalized Service</h4>
                <p className="text-gray-600">
                  We tailor our services to your specific business needs and long-term objectives.
                </p>
              </div>
            </div>
          </div>

          {/* Process Timeline */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
            <h3 className="text-2xl font-medium text-gray-900 mb-6 text-center">Our Business Formation Process</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

              {/* Timeline Items */}
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center mb-12">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Initial Consultation</h4>
                    <p className="text-gray-600">
                      We assess your business goals, immigration objectives, and specific needs.
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white z-10">
                    1
                  </div>
                  <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center mb-12">
                  <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white z-10">
                    2
                  </div>
                  <div className="md:w-1/2 md:pl-12 mb-4 md:mb-0">
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Strategy Development</h4>
                    <p className="text-gray-600">
                      We create a customized business formation plan aligned with your immigration strategy.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center mb-12">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Entity Formation</h4>
                    <p className="text-gray-600">
                      We handle all paperwork and filings to establish your business entity.
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white z-10">
                    3
                  </div>
                  <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center mb-12">
                  <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white z-10">
                    4
                  </div>
                  <div className="md:w-1/2 md:pl-12 mb-4 md:mb-0">
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Compliance Setup</h4>
                    <p className="text-gray-600">
                      We ensure all licenses, permits, and tax registrations are properly established.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Ongoing Support</h4>
                    <p className="text-gray-600">We provide continued guidance as your business grows and evolves.</p>
                  </div>
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white z-10">
                    5
                  </div>
                  <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-red-600 text-white p-8 rounded-lg">
            <div className="text-center">
              <h3 className="text-2xl font-medium mb-4">Ready to Establish Your Business in the U.S.?</h3>
              <p className="text-white/90 max-w-2xl mx-auto mb-6">
                Contact our team today for a personalized consultation and expert guidance on forming your U.S.
                business.
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
