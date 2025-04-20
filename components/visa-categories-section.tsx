"use client"
import { useLanguage } from "./language-provider"
import { Briefcase, GraduationCap, Plane, Home } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import SafeImage from "./safe-image"

export default function VisaCategoriesSection() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect()
      }
    }
  }, [])

  return (
    <section className="py-32 bg-gray-50 w-full flex justify-center" ref={sectionRef}>
      <div className="w-full max-w-[1440px] px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex flex-col items-center mb-4">
            <span className="text-sm uppercase tracking-wider text-gray-500 mb-1">{t("visaCategories.label")}</span>
            <div className="w-12 h-1 bg-red-600 mt-1"></div>
          </div>
          <h2 className="text-5xl font-medium text-gray-900 mb-6 max-w-3xl mx-auto">{t("visaCategories.title")}</h2> {/* Increased size */}
        </div>

        {/* Visa Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Tourist Visa */}
          <div
            className={`group relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="relative h-[280px] w-full">
              {/* Contorno especial que circula o ícone */}
              <div className="absolute inset-0 border border-gray-200 border-t-0 border-l-0"></div>
              <div className="absolute left-0 top-[100px] bottom-0 w-[1px] bg-gray-200"></div>
              <div className="absolute right-0 top-[100px] bottom-0 w-[1px] bg-gray-200"></div>
              <div className="absolute left-[30%] right-[30%] top-0 h-[1px] bg-gray-200"></div>
              <div className="absolute left-[30%] top-0 top-[100px] w-[1px] h-[100px] bg-gray-200"></div>
              <div className="absolute right-[30%] top-0 top-[100px] w-[1px] h-[100px] bg-gray-200"></div>
              <div className="absolute left-0 right-[70%] top-[100px] h-[1px] bg-gray-200"></div>
              <div className="absolute left-[70%] right-0 top-[100px] h-[1px] bg-gray-200"></div>

              {/* Default State (Icon) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white transition-opacity duration-500 group-hover:opacity-0">
                <div className="w-20 h-20 bg-red-600 flex items-center justify-center mb-4 z-10">
                  <Plane className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-2">{t("visaCategories.tourist.title")}</h3> {/* Increased size */}
                <p className="text-gray-600 text-center px-6">{t("visaCategories.tourist.description")}</p>
              </div>

              {/* Hover State (Image) */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <SafeImage
                  src="/images/tourist-visa.jpg"
                  alt={t("visaCategories.tourist.title")}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-red-600 py-3 px-4">
                  <h3 className="text-2xl font-medium text-white">{t("visaCategories.tourist.title")}</h3> {/* Increased size */}
                </div>
                <div className="absolute top-3 right-3 bg-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Business Visa */}
          <div
            className={`group relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            style={{ transitionDelay: "250ms" }}
          >
            <div className="relative h-[280px] w-full">
              {/* Contorno especial que circula o ícone */}
              <div className="absolute inset-0 border border-gray-200 border-t-0 border-l-0"></div>
              <div className="absolute left-0 top-[100px] bottom-0 w-[1px] bg-gray-200"></div>
              <div className="absolute right-0 top-[100px] bottom-0 w-[1px] bg-gray-200"></div>
              <div className="absolute left-[30%] right-[30%] top-0 h-[1px] bg-gray-200"></div>
              <div className="absolute left-[30%] top-0 top-[100px] w-[1px] h-[100px] bg-gray-200"></div>
              <div className="absolute right-[30%] top-0 top-[100px] w-[1px] h-[100px] bg-gray-200"></div>
              <div className="absolute left-0 right-[70%] top-[100px] h-[1px] bg-gray-200"></div>
              <div className="absolute left-[70%] right-0 top-[100px] h-[1px] bg-gray-200"></div>

              {/* Default State (Icon) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white transition-opacity duration-500 group-hover:opacity-0">
                <div className="w-20 h-20 bg-red-600 flex items-center justify-center mb-4 z-10">
                  <Briefcase className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-2">{t("visaCategories.business.title")}</h3> {/* Increased size */}
                <p className="text-gray-600 text-center px-6">{t("visaCategories.business.description")}</p>
              </div>

              {/* Hover State (Image) */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <SafeImage
                  src="/images/business-visa.jpg"
                  alt={t("visaCategories.business.title")}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-red-600 py-3 px-4">
                  <h3 className="text-2xl font-medium text-white">{t("visaCategories.business.title")}</h3> {/* Increased size */}
                </div>
                <div className="absolute top-3 right-3 bg-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Student Visa */}
          <div
            className={`group relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="relative h-[280px] w-full">
              {/* Contorno especial que circula o ícone */}
              <div className="absolute inset-0 border border-gray-200 border-t-0 border-l-0"></div>
              <div className="absolute left-0 top-[100px] bottom-0 w-[1px] bg-gray-200"></div>
              <div className="absolute right-0 top-[100px] bottom-0 w-[1px] bg-gray-200"></div>
              <div className="absolute left-[30%] right-[30%] top-0 h-[1px] bg-gray-200"></div>
              <div className="absolute left-[30%] top-0 top-[100px] w-[1px] h-[100px] bg-gray-200"></div>
              <div className="absolute right-[30%] top-0 top-[100px] w-[1px] h-[100px] bg-gray-200"></div>
              <div className="absolute left-0 right-[70%] top-[100px] h-[1px] bg-gray-200"></div>
              <div className="absolute left-[70%] right-0 top-[100px] h-[1px] bg-gray-200"></div>

              {/* Default State (Icon) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white transition-opacity duration-500 group-hover:opacity-0">
                <div className="w-20 h-20 bg-red-600 flex items-center justify-center mb-4 z-10">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-2">{t("visaCategories.student.title")}</h3> {/* Increased size */}
                <p className="text-gray-600 text-center px-6">{t("visaCategories.student.description")}</p>
              </div>

              {/* Hover State (Image) */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <SafeImage
                  src="/images/student-visa.jpg"
                  alt={t("visaCategories.student.title")}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-red-600 py-3 px-4">
                  <h3 className="text-2xl font-medium text-white">{t("visaCategories.student.title")}</h3> {/* Increased size */}
                </div>
                <div className="absolute top-3 right-3 bg-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Residence Visa */}
          <div
            className={`group relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            style={{ transitionDelay: "550ms" }}
          >
            <div className="relative h-[280px] w-full">
              {/* Contorno especial que circula o ícone */}
              <div className="absolute inset-0 border border-gray-200 border-t-0 border-l-0"></div>
              <div className="absolute left-0 top-[100px] bottom-0 w-[1px] bg-gray-200"></div>
              <div className="absolute right-0 top-[100px] bottom-0 w-[1px] bg-gray-200"></div>
              <div className="absolute left-[30%] right-[30%] top-0 h-[1px] bg-gray-200"></div>
              <div className="absolute left-[30%] top-0 top-[100px] w-[1px] h-[100px] bg-gray-200"></div>
              <div className="absolute right-[30%] top-0 top-[100px] w-[1px] h-[100px] bg-gray-200"></div>
              <div className="absolute left-0 right-[70%] top-[100px] h-[1px] bg-gray-200"></div>
              <div className="absolute left-[70%] right-0 top-[100px] h-[1px] bg-gray-200"></div>

              {/* Default State (Icon) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white transition-opacity duration-500 group-hover:opacity-0">
                <div className="w-20 h-20 bg-red-600 flex items-center justify-center mb-4 z-10">
                  <Home className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-2">{t("visaCategories.residence.title")}</h3> {/* Increased size */}
                <p className="text-gray-600 text-center px-6">{t("visaCategories.residence.description")}</p>
              </div>

              {/* Hover State (Image) */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <SafeImage
                  src="/images/residence-visa.jpg"
                  alt={t("visaCategories.residence.title")}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-red-600 py-3 px-4">
                  <h3 className="text-2xl font-medium text-white">{t("visaCategories.residence.title")}</h3> {/* Increased size */}
                </div>
                <div className="absolute top-3 right-3 bg-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
