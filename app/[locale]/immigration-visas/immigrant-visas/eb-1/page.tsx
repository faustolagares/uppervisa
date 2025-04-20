import type { Metadata } from "next"
import Link from "next/link"
import { Check, ChevronRight } from "lucide-react"
// Removed unused import: import translations from "@/translations"

export const metadata: Metadata = {
  title: "EB-1 Extraordinary Ability Visa | UpperVisa",
  description:
    "Expert guidance for EB-1 visa applications for individuals with extraordinary ability in sciences, arts, education, business, or athletics.",
}

export default function EB1VisaPage({
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
          <h1 className="text-4xl md:text-5xl font-medium mb-4">EB-1 Extraordinary Ability Visa</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            First preference employment-based immigration for individuals with extraordinary ability in sciences, arts,
            education, business, or athletics.
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
                    <Link
                      href={`/${locale}/immigration-visas/immigrant-visas`}
                      className="text-gray-700 hover:text-red-600"
                    >
                      Immigrant Visas
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
                    <span className="text-gray-500">EB-1 Extraordinary Ability Visa</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="md:w-2/3">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-3xl font-medium text-gray-900 mb-6">EB-1 Extraordinary Ability Visa</h2>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    The EB-1A Extraordinary Ability visa is a first-preference employment-based immigration category for
                    individuals who have extraordinary ability in the sciences, arts, education, business, or athletics.
                    This visa category offers several advantages, including the ability to self-petition without an
                    employer sponsor and faster processing times compared to other employment-based categories.
                  </p>

                  <h3>Who Qualifies for EB-1A?</h3>
                  <p>
                    To qualify for an EB-1A visa, you must demonstrate extraordinary ability in your field through
                    sustained national or international acclaim. You must meet at least 3 of the following 10 criteria:
                  </p>

                  <ul>
                    <li>Receipt of nationally or internationally recognized prizes or awards for excellence</li>
                    <li>Membership in associations that require outstanding achievement</li>
                    <li>Published material about you in professional or major trade publications</li>
                    <li>Judging the work of others in your field</li>
                    <li>
                      Original scientific, scholarly, artistic, athletic, or business-related contributions of major
                      significance
                    </li>
                    <li>Authorship of scholarly articles in professional journals or major media</li>
                    <li>Display of your work at artistic exhibitions or showcases</li>
                    <li>Performance in a leading or critical role for distinguished organizations</li>
                    <li>High salary or remuneration compared to others in the field</li>
                    <li>Commercial success in the performing arts</li>
                  </ul>

                  <p>
                    Additionally, you must demonstrate that you will continue to work in your area of expertise in the
                    United States and that your entry will substantially benefit the U.S.
                  </p>

                  <h3>Benefits of EB-1A Visa</h3>
                  <ul>
                    <li>No labor certification required</li>
                    <li>No job offer required (self-petition possible)</li>
                    <li>Priority processing compared to other employment-based categories</li>
                    <li>
                      Immediate family members (spouse and unmarried children under 21) can obtain green cards as
                      derivatives
                    </li>
                    <li>Shorter waiting times as EB-1 is a first preference category</li>
                  </ul>

                  <h3>Application Process</h3>
                  <ol>
                    <li>File Form I-140, Immigrant Petition for Alien Worker</li>
                    <li>Compile comprehensive documentation demonstrating extraordinary ability</li>
                    <li>
                      Upon approval, file Form I-485 for adjustment of status (if in the U.S.) or consular processing
                      (if outside the U.S.)
                    </li>
                    <li>Attend biometrics appointment and interview (if required)</li>
                    <li>Receive permanent resident card (Green Card)</li>
                  </ol>
                </div>

                <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">How UpperVisa Can Help</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Comprehensive case evaluation to determine eligibility and optimal strategy</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Expert guidance on selecting and documenting the most compelling evidence</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>
                        Preparation of a persuasive petition package that highlights your extraordinary abilities
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Assistance with responding to Requests for Evidence (RFEs) if issued</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Support throughout the adjustment of status or consular processing phase</span>
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
                  Speak with our EB-1 visa experts to evaluate your eligibility and develop a personalized strategy for
                  your case.
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
                      href={`/${locale}/immigration-visas/immigrant-visas/eb-2`}
                      className="flex items-center text-gray-700 hover:text-red-600"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-red-600" />
                      EB-2 Advanced Degree
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${locale}/immigration-visas/immigrant-visas/eb-2-niw`}
                      className="flex items-center text-gray-700 hover:text-red-600"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-red-600" />
                      EB-2 National Interest Waiver
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${locale}/immigration-visas/immigrant-visas/eb-3`}
                      className="flex items-center text-gray-700 hover:text-red-600"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-red-600" />
                      EB-3 Skilled Workers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${locale}/immigration-visas/permanent-residency/green-card`}
                      className="flex items-center text-gray-700 hover:text-red-600"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-red-600" />
                      Green Card Services
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 text-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-medium mb-4">Success Rate</h3>
                <div className="flex items-center justify-center mb-4">
                  <div className="text-5xl font-bold">98%</div>
                </div>
                <p className="text-gray-300 text-center">
                  Our success rate for EB-1 Extraordinary Ability visa applications, based on properly prepared cases.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-medium text-gray-900 mb-6">Frequently Asked Questions</h3>

            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button className="w-full text-left p-5 flex justify-between items-center bg-white">
                  <span className="font-medium text-gray-900">Do I need a job offer for an EB-1A visa?</span>
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                </button>
                <div className="p-5 border-t border-gray-200 bg-white">
                  <p className="text-gray-600">
                    No, one of the key advantages of the EB-1A category is that you can self-petition without a job
                    offer or employer sponsor. You only need to demonstrate that you will continue to work in your field
                    of expertise in the United States.
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button className="w-full text-left p-5 flex justify-between items-center bg-white">
                  <span className="font-medium text-gray-900">How long does the EB-1A visa process take?</span>
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                </button>
                <div className="p-5 border-t border-gray-200 bg-white">
                  <p className="text-gray-600">
                    Processing times vary, but EB-1A petitions typically take 4-8 months for USCIS to adjudicate.
                    Premium processing is available for an additional fee, which guarantees a response (not necessarily
                    approval) within 15 calendar days. After I-140 approval, the adjustment of status or consular
                    processing phase typically takes an additional 6-12 months.
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button className="w-full text-left p-5 flex justify-between items-center bg-white">
                  <span className="font-medium text-gray-900">What if I don't meet 3 of the 10 criteria?</span>
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                </button>
                <div className="p-5 border-t border-gray-200 bg-white">
                  <p className="text-gray-600">
                    If you cannot meet 3 of the 10 criteria, you might still qualify for other employment-based
                    categories such as EB-2 with a National Interest Waiver or EB-3. Our immigration experts can
                    evaluate your qualifications and recommend the most appropriate visa category for your situation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-red-600 text-white p-8 rounded-lg">
            <div className="text-center">
              <h3 className="text-2xl font-medium mb-4">Ready to Begin Your EB-1A Application?</h3>
              <p className="text-white/90 max-w-2xl mx-auto mb-6">
                Contact our team today for a personalized consultation and expert guidance on your EB-1 Extraordinary
                Ability visa application.
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
