"use client"

import { useState, useEffect, useRef } from "react"
import { useLanguage } from "./language-provider"
import { User, FileCheck } from "lucide-react"
import SafeImage from "./safe-image"

export default function AboutSection() {
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
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    const currentRef = sectionRef.current // Store ref value in a variable
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) { // Use the variable in the cleanup
        observer.disconnect()
      }
    }
  }, [])

  return (
    <section className="py-20 bg-white w-full flex justify-center">
      <div className="w-full max-w-[1440px] px-4" ref={sectionRef}>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          {/* Left Side - Image */}
          <div
            className={`w-full lg:w-[60%] transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative lg:pr-0">
              <SafeImage
                src="/images/about-section.webp"
                alt="UPPERVISA Consulting"
                width={800}
                height={700}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`w-full lg:w-[40%] lg:pl-4 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="w-full">
              {/* Section Label */}
              <div className="flex flex-col items-start mb-4">
                <span className="text-sm uppercase tracking-wider text-gray-500 mb-1">{t("about.label")}</span>
                <div className="w-12 h-1 bg-red-600 mt-1"></div>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl font-medium text-gray-900 mb-6">{t("about.title")}</h2>

              {/* Description */}
              <p className="text-gray-600 mb-10">{t("about.description")}</p>

              {/* Features */}
              <div className="space-y-8">
                {/* Feature 1 */}
                <div
                  className={`flex items-start transition-all duration-700 delay-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-md flex items-center justify-center bg-red-50">
                      <User className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">{t("about.feature1.title")}</h3>
                    <p className="text-gray-600">{t("about.feature1.description")}</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div
                  className={`flex items-start transition-all duration-700 delay-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-md flex items-center justify-center bg-red-50">
                      <FileCheck className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">{t("about.feature2.title")}</h3>
                    <p className="text-gray-600">{t("about.feature2.description")}</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div
                className={`mt-10 transition-all duration-700 delay-900 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <a
                  href="#"
                  className="inline-block bg-red-600 text-white px-8 py-4 font-medium hover:bg-red-700 transition-colors"
                >
                  {t("about.cta")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
