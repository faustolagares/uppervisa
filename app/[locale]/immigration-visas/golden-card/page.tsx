import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Check, Star, Shield, Clock, Globe, Zap } from "lucide-react"
// Removed unused import: import translations from "@/translations"

export const metadata: Metadata = {
  title: "Golden Card Program | UpperVisa",
  description:
    "Premium long-term residency program for exceptional talents, investors, and entrepreneurs seeking to establish themselves in the United States.",
}

export default function GoldenCardPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  // Removed unused variable: const t = ...

  // Golden Card categories
  const categories = [
    {
      id: "exceptional-talent",
      title: "Exceptional Talent",
      description:
        "For individuals with extraordinary abilities in science, arts, technology, or other specialized fields.",
      icon: <Star className="w-6 h-6" />,
      benefits: [
        "Fast-track processing",
        "10-year renewable residency",
        "No employment restrictions",
        "Family inclusion",
        "Path to permanent residency",
        "Global mobility privileges",
      ],
    },
    {
      id: "investors",
      title: "Investors",
      description: "For high-net-worth individuals making significant investments in the U.S. economy.",
      icon: <Shield className="w-6 h-6" />,
      benefits: [
        "Premium investment opportunities",
        "Tax optimization guidance",
        "Business establishment support",
        "Networking with industry leaders",
        "Exclusive financial services",
        "Investment portfolio diversification",
      ],
    },
    {
      id: "entrepreneurs",
      title: "Entrepreneurs",
      description: "For innovative business founders and startup creators driving economic growth.",
      icon: <Zap className="w-6 h-6" />,
      benefits: [
        "Startup ecosystem access",
        "Venture capital connections",
        "Accelerator program eligibility",
        "Mentorship opportunities",
        "Business development support",
        "Intellectual property protection",
      ],
    },
    {
      id: "specialized-professionals",
      title: "Specialized Professionals",
      description: "For experts in high-demand fields contributing to U.S. economic advancement.",
      icon: <Globe className="w-6 h-6" />,
      benefits: [
        "Career advancement opportunities",
        "Industry networking access",
        "Professional development resources",
        "Specialized training programs",
        "Research collaboration possibilities",
        "Professional certification support",
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#111113" }}>
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/golden-card-hero.jpg"
            alt="Golden Card Program"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#111113]"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M2 17h2v5h17a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v11H2" />
                  <path d="M22 5H7" />
                  <path d="M7 9h15" />
                  <path d="M22 13h-4" />
                </svg>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Golden Card Program</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: "#A0A0A5" }}>
              An exclusive long-term residency program for exceptional talents, investors, and entrepreneurs seeking to
              establish themselves in the United States.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href={`/${locale}/contact`}
                className="bg-red-600 text-white font-medium px-8 py-3 rounded-md hover:bg-red-700 transition-all"
              >
                Apply Now
              </Link>
              <Link
                href={`/${locale}/book-appointment`}
                className="bg-transparent border border-red-600 text-white px-8 py-3 rounded-md hover:bg-red-600/10 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20" style={{ backgroundColor: "#111113" }}>
        <div className="w-full max-w-[1350px] mx-auto px-4">
          {/* Introduction */}
          <div className="mb-20 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-1 bg-red-600"></div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-8">The Premier U.S. Residency Program</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: "#68696C" }}>
              The Golden Card Program offers an exclusive pathway to long-term U.S. residency for exceptional
              individuals who contribute significantly to the nation's prosperity, innovation, and cultural advancement.
            </p>
          </div>

          {/* Key Benefits Section */}
          <div className="p-10 mb-20 rounded-lg" style={{ backgroundColor: "#121315" }}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-6">Exclusive Benefits</h3>
              <p className="max-w-2xl mx-auto" style={{ color: "#68696C" }}>
                Golden Card holders enjoy a comprehensive package of privileges designed to facilitate seamless
                integration and exceptional opportunities in the United States.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                className="p-8 rounded-lg transform transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "#121315" }}
              >
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">10-Year Residency</h4>
                <p style={{ color: "#68696C" }}>
                  Enjoy long-term stability with a 10-year renewable residency permit, eliminating the need for frequent
                  visa renewals.
                </p>
              </div>

              <div
                className="p-8 rounded-lg transform transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "#121315" }}
              >
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
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
                    className="text-white"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Family Inclusion</h4>
                <p style={{ color: "#68696C" }}>
                  Extend Golden Card benefits to your spouse and dependent children, ensuring your family stays
                  together.
                </p>
              </div>

              <div
                className="p-8 rounded-lg transform transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "#121315" }}
              >
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
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
                    className="text-white"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Premium Processing</h4>
                <p style={{ color: "#68696C" }}>
                  Benefit from expedited application processing and dedicated support throughout your Golden Card
                  journey.
                </p>
              </div>
            </div>
          </div>

          {/* Categories Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-1 bg-red-600"></div>
              </div>
              <h3 className="text-4xl font-bold text-white mb-6">Eligibility Categories</h3>
              <p className="max-w-2xl mx-auto" style={{ color: "#68696C" }}>
                The Golden Card Program is designed for exceptional individuals across various fields who demonstrate
                outstanding achievements and potential contributions to the United States.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categories.map((category) => (
                <div key={category.id} className="rounded-xl overflow-hidden" style={{ backgroundColor: "#121315" }}>
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                        {category.icon}
                      </div>
                      <h4 className="text-2xl font-bold text-white">{category.title}</h4>
                    </div>
                    <p className="mb-8" style={{ color: "#68696C" }}>
                      {category.description}
                    </p>
                    <div className="space-y-3">
                      {category.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start">
                          <Check className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                          <span style={{ color: "#68696C" }}>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8">
                      <Link
                        href={`/${locale}/immigration-visas/golden-card/${category.id}`}
                        className="inline-flex items-center text-red-600 hover:text-red-500 font-medium"
                      >
                        Learn More <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Application Process */}
          <div className="p-10 mb-20 rounded-lg" style={{ backgroundColor: "#121315" }}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-6">Application Process</h3>
              <p className="max-w-2xl mx-auto" style={{ color: "#68696C" }}>
                Our streamlined application process is designed to be efficient while maintaining the exclusive
                standards of the Golden Card Program.
              </p>
            </div>

            <div className="relative">
              {/* Process Timeline */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-600"></div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center mb-16">
                  <div className="md:w-1/2 md:pr-16 md:text-right mb-8 md:mb-0">
                    <h4 className="text-xl font-bold text-white mb-3">Initial Assessment</h4>
                    <p style={{ color: "#68696C" }}>
                      Our experts evaluate your qualifications and achievements to determine eligibility for the Golden
                      Card Program.
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white z-10 mb-8 md:mb-0">
                    1
                  </div>
                  <div className="md:w-1/2 md:pl-16 hidden md:block"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center mb-16">
                  <div className="md:w-1/2 md:pr-16 hidden md:block"></div>
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white z-10 mb-8 md:mb-0">
                    2
                  </div>
                  <div className="md:w-1/2 md:pl-16">
                    <h4 className="text-xl font-bold text-white mb-3">Documentation Preparation</h4>
                    <p style={{ color: "#68696C" }}>
                      We assist in compiling a comprehensive application package that showcases your achievements and
                      contributions.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center mb-16">
                  <div className="md:w-1/2 md:pr-16 md:text-right mb-8 md:mb-0">
                    <h4 className="text-xl font-bold text-white mb-3">Application Submission</h4>
                    <p style={{ color: "#68696C" }}>
                      Your application is submitted through our premium processing channel for expedited review.
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white z-10 mb-8 md:mb-0">
                    3
                  </div>
                  <div className="md:w-1/2 md:pl-16 hidden md:block"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-16 hidden md:block"></div>
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white z-10 mb-8 md:mb-0">
                    4
                  </div>
                  <div className="md:w-1/2 md:pl-16">
                    <h4 className="text-xl font-bold text-white mb-3">Golden Card Issuance</h4>
                    <p style={{ color: "#68696C" }}>
                      Upon approval, you receive your Golden Card and comprehensive onboarding to maximize your
                      benefits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-1 bg-red-600"></div>
              </div>
              <h3 className="text-4xl font-bold text-white mb-6">Success Stories</h3>
              <p className="max-w-2xl mx-auto" style={{ color: "#68696C" }}>
                Hear from individuals who have transformed their lives and careers through the Golden Card Program.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-lg" style={{ backgroundColor: "#121315" }}>
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src="/confident-executive.png"
                        alt="Testimonial"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Michael Chen</h4>
                    <p className="text-red-600">Tech Entrepreneur</p>
                  </div>
                </div>
                <p className="italic" style={{ color: "#68696C" }}>
                  "The Golden Card Program provided me with the stability and opportunities I needed to scale my tech
                  startup in Silicon Valley. The premium processing and dedicated support made the entire process
                  seamless."
                </p>
              </div>

              <div className="p-8 rounded-lg" style={{ backgroundColor: "#121315" }}>
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src="/focused-researcher.png"
                        alt="Testimonial"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Dr. Sophia Rodriguez</h4>
                    <p className="text-red-600">Medical Researcher</p>
                  </div>
                </div>
                <p className="italic" style={{ color: "#68696C" }}>
                  "As a medical researcher, the Golden Card Program has given me unprecedented access to collaborate
                  with leading institutions. The 10-year residency allows me to focus on my groundbreaking work without
                  visa concerns."
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-red-600 rounded-xl p-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-6">Begin Your Golden Card Journey Today</h3>
              <p className="text-white/90 max-w-2xl mx-auto mb-8">
                Take the first step toward exclusive U.S. residency and unlock unprecedented opportunities for you and
                your family.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href={`/${locale}/contact`}
                  className="text-white px-8 py-3 rounded-md hover:bg-gray-900 transition-colors"
                  style={{ backgroundColor: "#111113" }}
                >
                  Apply Now
                </Link>
                <Link
                  href={`/${locale}/book-appointment`}
                  className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
