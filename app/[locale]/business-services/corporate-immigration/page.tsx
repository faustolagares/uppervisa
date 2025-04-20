import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Check, Users, Briefcase, FileText, Globe } from "lucide-react"
// Removed unused import: import translations from "@/translations"

export const metadata: Metadata = {
  title: "Corporate Immigration Services | UpperVisa",
  description:
    "Strategic immigration solutions for companies transferring employees to the U.S. or hiring foreign talent.",
}

export default function CorporateImmigrationPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  // Removed unused variable: const t = ...

  // Corporate immigration services
  const corporateServices = [
    {
      id: "l1-transfers",
      title: "L-1 Intracompany Transfers",
      description:
        "Transfer executives, managers, or specialized knowledge employees from foreign offices to U.S. operations.",
      icon: <Users className="w-6 h-6" />,
      features: [
        "L-1A for executives and managers",
        "L-1B for specialized knowledge employees",
        "Blanket L petitions for large companies",
        "New office L-1 petitions",
        "Extensions and renewals",
        "Dependent visas for family members",
      ],
    },
    {
      id: "h1b-visas",
      title: "H-1B Specialty Occupations",
      description:
        "Hire foreign professionals in specialty occupations requiring theoretical and practical application of specialized knowledge.",
      icon: <Briefcase className="w-6 h-6" />,
      features: [
        "H-1B cap-subject petitions",
        "H-1B cap-exempt strategies",
        "Labor Condition Application (LCA) preparation",
        "H-1B transfers and amendments",
        "H-1B extensions and renewals",
        "H-4 dependent visas and work authorization",
      ],
    },
    {
      id: "perm-labor",
      title: "PERM Labor Certification",
      description:
        "Navigate the permanent labor certification process for sponsoring employees for employment-based green cards.",
      icon: <FileText className="w-6 h-6" />,
      features: [
        "Prevailing wage determination",
        "Recruitment and advertising",
        "Labor market testing",
        "PERM application preparation and filing",
        "Audit response assistance",
        "I-140 petition preparation",
      ],
    },
    {
      id: "compliance",
      title: "Immigration Compliance",
      description: "Ensure your company meets all immigration-related compliance requirements and avoids penalties.",
      icon: <Globe className="w-6 h-6" />,
      features: [
        "I-9 compliance and audits",
        "E-Verify implementation",
        "Public Access File maintenance",
        "H-1B site visit preparation",
        "Immigration policy development",
        "Compliance training for HR staff",
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-medium mb-4">Corporate Immigration Services</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Strategic immigration solutions for companies transferring employees to the U.S. or hiring foreign talent.
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
                    <span className="text-gray-500">Corporate Immigration</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
            <h2 className="text-3xl font-medium text-gray-900 mb-6">Corporate Immigration Solutions</h2>
            <p className="text-gray-600 mb-6">
              In today's global economy, accessing international talent and facilitating employee mobility is crucial
              for business success. UpperVisa provides comprehensive corporate immigration services to help companies
              navigate the complex U.S. immigration system efficiently and compliantly.
            </p>
            <p className="text-gray-600 mb-6">
              Whether you're transferring key personnel from overseas offices, hiring specialized foreign talent, or
              sponsoring employees for permanent residency, our team of immigration experts will develop strategic
              solutions tailored to your business needs.
            </p>
            <p className="text-gray-600">
              We work with businesses of all sizes, from startups to multinational corporations, providing personalized
              service and leveraging our deep understanding of immigration law to help you achieve your workforce goals.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {corporateServices.map((service) => (
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
                      href={`/${locale}/business-services/corporate-immigration/${service.id}`}
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
            <h3 className="text-2xl font-medium text-gray-900 mb-6">Why Choose UpperVisa for Corporate Immigration</h3>
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
                <h4 className="text-lg font-medium text-gray-900 mb-2">Strategic Approach</h4>
                <p className="text-gray-600">
                  We develop immigration strategies aligned with your business objectives and growth plans.
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
                <h4 className="text-lg font-medium text-gray-900 mb-2">Compliance Focus</h4>
                <p className="text-gray-600">
                  We ensure your company meets all immigration regulations and avoids costly penalties.
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
                <h4 className="text-lg font-medium text-gray-900 mb-2">Dedicated Support</h4>
                <p className="text-gray-600">
                  We provide ongoing guidance and responsive service throughout the immigration process.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-red-600 text-white p-8 rounded-lg">
            <div className="text-center">
              <h3 className="text-2xl font-medium mb-4">Ready to Optimize Your Corporate Immigration Strategy?</h3>
              <p className="text-white/90 max-w-2xl mx-auto mb-6">
                Contact our team today for a personalized consultation and expert guidance on your corporate immigration
                needs.
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
