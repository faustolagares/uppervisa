import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Check, DollarSign, Building, Users, Clock } from "lucide-react"
// Removed unused import: import translations from "@/translations"

export const metadata: Metadata = {
  title: "EB-5 Investor Visa | UpperVisa",
  description:
    "Expert guidance for EB-5 Immigrant Investor Program applications, helping investors obtain permanent residency through qualified investments in the United States.",
}

export default function EB5InvestorVisaPage({
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
          <h1 className="text-4xl md:text-5xl font-medium mb-4">EB-5 Investor Visa</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Obtain permanent residency through investment in a new commercial enterprise that creates jobs for U.S.
            workers.
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
                    <span className="text-gray-500">EB-5 Investor Visa</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="md:w-2/3">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-3xl font-medium text-gray-900 mb-6">EB-5 Immigrant Investor Program</h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    The EB-5 Immigrant Investor Program offers foreign investors the opportunity to obtain permanent
                    residency (Green Card) in the United States through investment in a new commercial enterprise that
                    creates jobs for U.S. workers. This program is administered by U.S. Citizenship and Immigration
                    Services (USCIS).
                  </p>

                  <h3>Key Requirements</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                          <DollarSign className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-medium text-gray-900">Investment Amount</h4>
                      </div>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>$1,050,000 for standard investments</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>$800,000 for investments in Targeted Employment Areas (TEAs)</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                          <Users className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-medium text-gray-900">Job Creation</h4>
                      </div>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Create or preserve at least 10 full-time jobs for qualifying U.S. workers</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>
                            Jobs must be created within 2 years of admission as a conditional permanent resident
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                          <Building className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-medium text-gray-900">Investment Types</h4>
                      </div>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Direct investment in your own commercial enterprise</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Investment through a Regional Center (pre-approved investment vehicles)</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                          <Clock className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-medium text-gray-900">Process Timeline</h4>
                      </div>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Initial 2-year conditional permanent residency</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>
                            File to remove conditions after 2 years by proving investment maintained and jobs created
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3>EB-5 Application Process</h3>
                  <ol>
                    <li>Select and make a qualifying investment</li>
                    <li>File Form I-526 (Immigrant Petition by Alien Entrepreneur)</li>
                    <li>Upon approval, apply for conditional permanent residence</li>
                    <li>
                      After 2 years, file Form I-829 to remove conditions by proving the investment maintained and jobs
                      created
                    </li>
                    <li>Receive permanent Green Card</li>
                  </ol>

                  <h3>Benefits of the EB-5 Program</h3>
                  <ul>
                    <li>Permanent residency for the investor, spouse, and unmarried children under 21</li>
                    <li>No education, business experience, or language requirements</li>
                    <li>Freedom to live, work, and study anywhere in the United States</li>
                    <li>Path to U.S. citizenship after five years of permanent residency</li>
                    <li>Access to U.S. public education and healthcare systems</li>
                  </ul>
                </div>

                <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">How UpperVisa Can Help</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Comprehensive evaluation of investment options and regional centers</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Due diligence on potential investment projects</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Source of funds documentation and preparation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Business plan development and economic impact analysis</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Preparation and filing of all required USCIS forms</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Guidance through the conditional residency period</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Assistance with condition removal process</span>
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
                  Speak with our EB-5 investment experts to evaluate your options and develop a personalized strategy
                  for your case.
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
                      href={`/${locale}/business-services/e2-treaty-investor`}
                      className="flex items-center text-gray-700 hover:text-red-600"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-red-600" />
                      E-2 Treaty Investor Visa
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
                      href={`/${locale}/immigration-visas/immigrant-visas/eb-5`}
                      className="flex items-center text-gray-700 hover:text-red-600"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-red-600" />
                      EB-5 Visa Process
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 text-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-medium mb-4">Success Rate</h3>
                <div className="flex items-center justify-center mb-4">
                  <div className="text-5xl font-bold">97%</div>
                </div>
                <p className="text-gray-300 text-center">
                  Our success rate for EB-5 Investor Visa applications, based on properly prepared cases.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-red-600 text-white p-8 rounded-lg">
            <div className="text-center">
              <h3 className="text-2xl font-medium mb-4">Ready to Begin Your EB-5 Investment Journey?</h3>
              <p className="text-white/90 max-w-2xl mx-auto mb-6">
                Contact our team today for a personalized consultation and expert guidance on your EB-5 Investor Visa
                application.
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
