"use client"

import { useState, useEffect, useRef } from "react"
import { useLanguage } from "./language-provider"
import SafeImage from "./safe-image"

export default function ServicesSection() {
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
        threshold: 0.2, // Quando 20% do elemento estiver visível
        rootMargin: "0px 0px -50px 0px", // Ativa um pouco antes de entrar completamente na viewport
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
    <section className="py-16 bg-white w-full flex justify-center">
      <div className="w-full max-w-[1350px] px-4" ref={sectionRef}>
        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Online Form */}
          <div
            className={`relative overflow-hidden group transition-all duration-700 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="relative h-[300px] w-full">
              <SafeImage
                src="/images/online-form.jpg"
                alt={t("services.onlineForm.alt")}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-start p-8">
                <span className="text-sm font-medium uppercase text-gray-700 mb-1">
                  {t("services.onlineForm.label")}
                 </span>
                 {/* Removed text-3xl to use global h3 style */}
                 <h3 className="font-medium text-black mb-6 pr-8 w-[70%]">{t("services.onlineForm.title")}</h3> 
                 <div className="mt-auto">
                   <a
                    href="#"
                    className="inline-block bg-white text-gray-800 px-6 py-3 font-medium hover:bg-gray-100 transition-colors"
                  >
                    {t("common.learnMore")}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Positive Result */}
          <div
            className={`relative overflow-hidden group transition-all duration-700 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="relative h-[300px] w-full">
              <SafeImage
                src="/images/positive-result.jpg"
                alt={t("services.positiveResult.alt")}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-start p-8">
                <span className="text-sm font-medium uppercase text-gray-700 mb-1">
                  {t("services.positiveResult.label")}
                 </span>
                 {/* Removed text-3xl to use global h3 style */}
                 <h3 className="font-medium text-black mb-6 pr-8 w-[70%]"> 
                   {t("services.positiveResult.title")}
                 </h3>
                <div className="mt-auto">
                  <a
                    href="#"
                    className="inline-block bg-white text-gray-800 px-6 py-3 font-medium hover:bg-gray-100 transition-colors"
                  >
                    {t("common.learnMore")}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Download Form */}
          <div
            className={`relative overflow-hidden group transition-all duration-700 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="relative h-[300px] w-full">
              <SafeImage
                src="/images/download-form.jpg"
                alt={t("services.downloadForm.alt")}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-start p-8">
                <span className="text-sm font-medium uppercase text-gray-700 mb-1">
                  {t("services.downloadForm.label")}
                 </span>
                 {/* Removed text-3xl to use global h3 style */}
                 <h3 className="font-medium text-black mb-6 pr-8 w-[70%]"> 
                   {t("services.downloadForm.title")}
                 </h3>
                <div className="mt-auto">
                  <a
                    href="#"
                    className="inline-block bg-white text-gray-800 px-6 py-3 font-medium hover:bg-gray-100 transition-colors"
                  >
                    {t("common.learnMore")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700">
            {t("services.tagline.prefix")}{" "}
            <span className="font-medium border-b-2 border-red-500">{t("services.tagline.visa")}</span> &{" "}
            <span className="font-medium border-b-2 border-red-500">{t("services.tagline.immigration")}</span>{" "}
            {t("services.tagline.suffix")}
          </p>
        </div>
      </div>
    </section>
  )
}
