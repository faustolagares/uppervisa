"use client"; // Ensure "use client" is at the very top

import { useLanguage } from "./language-provider";
import { Check, Play } from "lucide-react"
import { useState, useEffect, useRef, useMemo } from "react" // Import useMemo
import SafeImage from "./safe-image"

export default function BenefitsSection() {
  const { t } = useLanguage()

  const statsRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    categories: 0,
    process: 0,
    success: 0,
    consultants: 0,
  })

  // Wrap targetCounts in useMemo
  const targetCounts = useMemo(
    () => ({
      categories: 30,
      process: 68,
      success: 99,
      consultants: 23,
    }),
    [],
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    const currentRef = statsRef.current // Store ref value in a variable
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) { // Use the variable in the cleanup
        observer.disconnect()
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // duração da animação em ms
    const frameDuration = 1000 / 60 // duração de cada frame (60fps)
    const totalFrames = Math.round(duration / frameDuration)
    let frame = 0

    const counter = setInterval(() => {
      frame++
      const progress = frame / totalFrames

      setCounts({
        categories: Math.floor(progress * targetCounts.categories),
        process: Math.floor(progress * targetCounts.process),
        success: Math.floor(progress * targetCounts.success),
        consultants: Math.floor(progress * targetCounts.consultants),
      })

      if (frame === totalFrames) {
        clearInterval(counter)
        setCounts(targetCounts)
      }
    }, frameDuration)

    return () => clearInterval(counter)
  }, [isVisible, targetCounts]) // Add targetCounts to dependency array

  return (
    <section className="w-full flex justify-center">
      <div className="w-full flex flex-col">
        {/* Parte superior com imagem de fundo e conteúdo */}
        <div className="relative w-full">
          {/* Imagem de fundo */}
          <div className="absolute inset-0">
            <SafeImage
              src="/images/CTA-UpperVisa.webp"
              alt="Happy couple receiving passports from immigration consultant"
              fill
              className="object-cover brightness-75"
            />
          </div>

          {/* Conteúdo sobreposto */}
          <div className="relative w-full max-w-[1350px] mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
            {/* Coluna esquerda - Card branco */}
            <div className="bg-white p-8 md:p-12 w-full md:w-1/2 mb-8 md:mb-0">
              <div className="flex flex-col items-start mb-4">
                <span className="text-sm uppercase tracking-wider text-gray-500 mb-1">{t("benefits.label")}</span>
                <div className="w-12 h-1 bg-red-600 mt-1"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8">{t("benefits.title")}</h2>

              {/* Lista de benefícios */}
              <div className="space-y-4">
                <div className="flex items-center bg-gray-100 p-4">
                  <Check className="text-red-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{t("benefits.fastProcess")}</span>
                </div>
                <div className="flex items-center bg-gray-100 p-4">
                  <Check className="text-red-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{t("benefits.citizenship")}</span>
                </div>
                <div className="flex items-center bg-gray-100 p-4">
                  <Check className="text-red-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{t("benefits.documentation")}</span>
                </div>
              </div>
            </div>

            {/* Coluna direita - Texto e botão de vídeo */}
            <div className="w-full md:w-1/2 md:pl-12 text-white flex flex-col items-center md:items-end">
              <p className="text-lg md:text-xl mb-8 text-center md:text-right max-w-md">{t("benefits.description")}</p>

              <div className="relative">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center cursor-pointer relative z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" />
                  </div>
                </div>
                <svg
                  className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M30,0 Q80,5 75,75" stroke="white" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                  <path d="M75,75 L70,65 M75,75 L65,70" stroke="white" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Parte inferior vermelha com estatísticas */}
        <div className="bg-red-600 w-full py-12">
          <div className="w-full max-w-[1350px] mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" ref={statsRef}>
              {/* Estatística 1 */}
              <div className="flex items-center justify-center md:justify-start">
                <div className="w-12 h-12 mr-4">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M36 12H12C9.79086 12 8 13.7909 8 16V32C8 34.2091 9.79086 36 12 36H36C38.2091 36 40 34.2091 40 32V16C40 13.7909 38.2091 12 36 12Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M32 12V8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 12V8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M32 40V36" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 40V36" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-medium text-white">{counts.categories}+</div>
                  <div className="text-white text-sm">{t("benefits.statsSection.categories")}</div>
                </div>
              </div>

              {/* Estatística 2 */}
              <div className="flex items-center justify-center md:justify-start">
                <div className="w-12 h-12 mr-4">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M32 20C32 17.7909 30.2091 16 28 16C25.7909 16 24 17.7909 24 20C24 22.2091 25.7909 24 28 24"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M28 24C30.2091 24 32 25.7909 32 28C32 30.2091 30.2091 32 28 32C25.7909 32 24 30.2091 24 28"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 28C20 30.2091 18.2091 32 16 32C13.7909 32 12 30.2091 12 28C12 25.7909 13.7909 24 16 24"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 24C18.2091 24 20 22.2091 20 20C20 17.7909 18.2091 16 16 16C13.7909 16 12 17.7909 12 20"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M22 16H28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 32H28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 22V28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M28 22V28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-medium text-white">{counts.process}k</div>
                  <div className="text-white text-sm">{t("benefits.statsSection.process")}</div>
                </div>
              </div>

              {/* Estatística 3 */}
              <div className="flex items-center justify-center md:justify-start">
                <div className="w-12 h-12 mr-4">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M24 4L30.24 16.68L44 18.96L34 28.68L36.48 42.36L24 35.88L11.52 42.36L14 28.68L4 18.96L17.76 16.68L24 4Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-medium text-white">{counts.success}+</div>
                  <div className="text-white text-sm">{t("benefits.statsSection.success")}</div>
                </div>
              </div>

              {/* Estatística 4 */}
              <div className="flex items-center justify-center md:justify-start">
                <div className="w-12 h-12 mr-4">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M32 20C34.2091 20 36 18.2091 36 16C36 13.7909 34.2091 12 32 12C29.7909 12 28 13.7909 28 16C28 18.2091 29.7909 20 32 20Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M32 20V28C32 30 30 32 28 32H20C18 32 16 30 16 28V20"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24 12C26.2091 12 28 10.2091 28 8C28 5.79086 26.2091 4 24 4C21.7909 4 20 5.79086 20 8C20 10.2091 21.7909 12 24 12Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M24 12V20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-medium text-white">{counts.consultants}+</div>
                  <div className="text-white text-sm">{t("benefits.statsSection.consultants")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
