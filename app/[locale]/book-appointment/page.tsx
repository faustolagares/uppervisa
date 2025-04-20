import type { Metadata } from "next"
import AppointmentForm from "@/components/appointment-form"
// Removed unused import: import translations from "@/translations"

export const metadata: Metadata = {
  title: "Book an Appointment | UpperVisa Immigration & Visa Consulting",
  description:
    "Schedule a consultation with our immigration experts to discuss your visa application and immigration needs.",
}

export default function BookAppointmentPage({
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
          <h1 className="text-4xl md:text-5xl font-medium mb-4">Book an Appointment</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Schedule a consultation with our immigration experts to discuss your visa application and immigration needs.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-gray-50">
        <div className="w-full max-w-[1350px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Appointment Information */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 md:p-8 shadow-sm rounded-lg h-full">
                <h2 className="text-2xl font-medium text-gray-900 mb-6">Appointment Information</h2>

                <div className="space-y-6 text-gray-600">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2" style={{
                      WebkitTextSizeAdjust: "100%",
                      tabSize: 4,
                      fontFeatureSettings: "normal",
                      fontVariationSettings: "normal",
                      WebkitTapHighlightColor: "transparent",
                      fontFamily: "Aeonik, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                      fontSize: "1.125rem",
                      lineHeight: "1.75rem",
                      fontWeight: 500,
                      color: "rgb(17 24 39 / 1)"
                    }}>Our Office Hours</h3>
                    <p className="mb-1">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="mb-1">Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-2" style={{
                      WebkitTextSizeAdjust: "100%",
                      tabSize: 4,
                      fontFeatureSettings: "normal",
                      fontVariationSettings: "normal",
                      WebkitTapHighlightColor: "transparent",
                      fontFamily: "Aeonik, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                      fontSize: "1.125rem",
                      lineHeight: "1.75rem",
                      fontWeight: 500,
                      color: "rgb(17 24 39 / 1)"
                    }}>Consultation Types</h3>
                    <p className="mb-4">We offer both in-person and virtual consultations to accommodate your needs.</p>

                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-red-600"
                          >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h4 className="font-medium text-gray-900">In-Person Consultation</h4>
                          <p className="text-sm">
                            Meet with our immigration experts at our office for personalized guidance.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-red-600"
                          >
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h4 className="font-medium text-gray-900">Virtual Consultation</h4>
                          <p className="text-sm">
                            Connect with our experts via video call from the comfort of your home.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-2" style={{
                      WebkitTextSizeAdjust: "100%",
                      tabSize: 4,
                      fontFeatureSettings: "normal",
                      fontVariationSettings: "normal",
                      WebkitTapHighlightColor: "transparent",
                      fontFamily: "Aeonik, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                      fontSize: "1.125rem",
                      lineHeight: "1.75rem",
                      fontWeight: 500,
                      color: "rgb(17 24 39 / 1)"
                    }}>What to Bring</h3>
                    <p className="mb-2">To make the most of your consultation, please bring:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Valid passport</li>
                      <li>Current visa documents (if applicable)</li>
                      <li>Any immigration notices you've received</li>
                      <li>Employment or education documentation</li>
                      <li>List of questions or concerns</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Form */}
            <div className="lg:col-span-2">
              <AppointmentForm locale={locale} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
