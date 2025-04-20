import type { Metadata } from "next"
import Link from "next/link"
import DynamicContactForm from "@/components/dynamic-contact-form"
import ContactInfo from "@/components/contact-info"
import USAMap from "@/components/usa-map"
import FAQSection from "@/components/contact-faq-section"
import FormDataRecovery from "@/components/form-data-recovery"
// Removed unused import: import translations from "@/translations"

export const metadata: Metadata = {
  title: "Contact UpperVisa | Immigration & Visa Consulting Experts",
  description:
    "Connect with UpperVisa's immigration specialists for personalized visa assistance, citizenship guidance, and expert consultation for your global journey.",
}

export default function ContactPage({
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
          <h1 className="text-4xl md:text-5xl font-medium mb-4">Contact Us</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our immigration experts are ready to assist you with your visa and immigration needs.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-gray-50">
        <div className="w-full max-w-[1350px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 text-sm">
              <ContactInfo locale={locale} />
            </div>

            {/* Dynamic Contact Form (Strapi-powered) */}
            <div className="lg:col-span-2">
              <DynamicContactForm />
              <FormDataRecovery />
            </div>
          </div>
        </div>
      </div>

      {/* USA Map Section */}
      <div className="py-16 bg-white">
        <div className="w-full max-w-[1350px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-900 mb-4">Our Locations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We have offices across the United States to better serve your immigration needs.
            </p>
          </div>
          <div className="h-[650px] w-full">
            <USAMap />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection locale={locale} />

      {/* CTA Section */}
      <div className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-medium mb-6">Ready to Start Your Immigration Journey?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Schedule a consultation with one of our immigration experts today and take the first step toward your new
            life.
          </p>
          <Link href={`/${locale}/book-appointment`}>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 font-medium transition-colors">
              Book an Appointment
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
