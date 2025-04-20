import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Check, Globe, Clock, Users, Building } from "lucide-react"
// Removed unused import: import translations from "@/translations"

export const metadata: Metadata = {
  title: "E-2 Treaty Investor Visa | UpperVisa",
  description:
    "Expert guidance for E-2 Treaty Investor visa applications for nationals of treaty countries investing in a U.S. business.",
}

export default function E2TreatyInvestorPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  // Removed unused variable: const t = ...

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-medium mb-4">E-2 Treaty Investor Visa</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Temporary visa for nationals of treaty countries who invest a substantial amount in a U.S. business and
            direct its operations.
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
                    <span className="text-gray-500">E-2 Treaty Investor</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="md:w-2/3">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-3xl font-medium text-gray-900 mb-6">E-2 Treaty Investor Visa</h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    The E-2 Treaty Investor visa allows nationals of countries with which the United States maintains a
                    treaty of commerce and navigation to enter and work in the U.S. based on a substantial investment in
                    a U.S. business. This non-immigrant visa is ideal for entrepreneurs and business owners who want to
                    develop and direct the operations of a business in the United States.
                  </p>

                  <h3>Key Requirements</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                          <Globe className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-medium text-gray-900">Treaty Country</h4>
                      </div>
                      <p className="text-gray-600">
                        You must be a citizen of a country that maintains a treaty of commerce and navigation with the
                        U.S.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                          <Building className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-medium text-gray-900">Substantial Investment</h4>
                      </div>
                      <p className="text-gray-600">
                        The investment must be substantial relative to the business type (typically $100,000+ but varies
                        by industry)
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                          <Users className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-medium text-gray-900">Business Requirements</h4>
                      </div>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Active, real operating business (not passive investments)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>More than marginal (generates significant income or creates jobs)</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                          <Clock className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-medium text-gray-900">Control</h4>
                      </div>
                      <p className="text-gray-600">
                        You must own at least 50% of the business or have operational control through a managerial
                        position
                      </p>
                    </div>
                  </div>

                  <h3>Benefits of E-2 Visa</h3>
                  <ul>
                    <li>
                      Initial stay of up to 2 years with unlimited extensions as long as you maintain qualification
                    </li>
                    <li>Spouse can apply for work authorization</li>
                    <li>Children under 21 can attend school in the U.S.</li>
                    <li>No minimum job creation requirement (unlike EB-5)</li>
                    <li>Relatively quick processing compared to immigrant visas</li>
                    <li>Lower investment threshold compared to EB-5</li>
                  </ul>

                  <h3>E-2 Visa Process</h3>
                  <ol>
                    <li>Establish or purchase a qualifying business in the U.S.</li>
                    <li>Make a substantial investment in the business</li>
                    <li>Prepare comprehensive documentation of the investment and business plan</li>
                    <li>File Form DS-160 and E-2 visa application with the U.S. consulate or embassy</li>
                    <li>Attend visa interview</li>
                    <li>Upon approval, enter the U.S. to operate your business</li>
                  </ol>

                  <h3>Limitations</h3>
                  <ul>
                    <li>Does not directly lead to permanent residency (non-immigrant intent required)</li>
                    <li>Limited to treaty country nationals</li>
                    <li>Business must remain active and profitable</li>
                    <li>You must intend to depart the U.S. when your status expires</li>
                  </ul>
                </div>

                <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">How UpperVisa Can Help</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Evaluation of your eligibility for E-2 visa</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Guidance on business acquisition or formation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Assistance with structuring your investment to meet E-2 requirements</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Preparation of comprehensive business plans and financial projections</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Documentation of source and path of investment funds</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Preparation and filing of all required application forms</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Interview preparation and representation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Guidance on visa extensions and status maintenance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:w-1/3">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Request a Consultation</h3>
                <p className="text-gray-600 mb-6">
                  Speak with our E-2 visa experts to evaluate your eligibility and develop a personalized strategy for
                  your business investment.
                </p>
                <Link
                  href={`/${locale}/book-appointment`}
                  className="block w-full bg-red-600 text-white text-center py-3 rounded-md hover:bg-red-700 transition-colors"
                >
                  Book a Consultation
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Related Services</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href={`/${locale}/business-services/eb5-investor-visa`}
                      className="flex items-center text-gray-700 hover:text-red-600"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-red-600" />
                      EB-5 Investor Visa
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${locale}/business-services/business-formation`}
                      className="flex items-center text-gray-700 hover:text-red-600"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-red-600" />
                      Business Formation Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${locale}/business-services/corporate-immigration`}
                      className="flex items-center text-gray-700 hover:text-red-600"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-red-600" />
                      Corporate Immigration
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${locale}/immigration-visas/non-immigrant-visas/e-2`}
                      className="flex items-center text-gray-700 hover:text-red-600"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-red-600" />
                      E-2 Visa Process
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 text-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-medium mb-4">Success Rate</h3>
                <div className="flex items-center justify-center mb-4">
                  <div className="text-5xl font-bold">95%</div>
                </div>
                <p className="text-gray-300 text-center">
                  Our success rate for E-2 Treaty Investor visa applications, based on properly prepared cases.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-red-600 text-white p-8 rounded-lg">
            <div className="text-center">
              <h3 className="text-2xl font-medium mb-4">Ready to Invest in Your U.S. Business?</h3>
              <p className="text-white/90 max-w-2xl mx-auto mb-6">
                Contact our team today for a personalized consultation and expert guidance on your E-2 Treaty Investor
                visa application.
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
