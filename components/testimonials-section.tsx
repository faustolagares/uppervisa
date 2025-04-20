"use client"

import { useState, useEffect, useCallback } from "react"
import { useLanguage } from "./language-provider"
import { Star, ArrowLeft, ArrowRight, MessageSquare } from "lucide-react"
import SafeImage from "./safe-image"

export default function TestimonialsSection() {
  const { t } = useLanguage()
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const testimonials = [
    {
      id: 1,
      name: "Michael Rodriguez",
      role: t("testimonials.happyClient"),
      image: "/images/testimonial-1.jpg",
      rating: 5,
      quote: t("testimonials.quote1"),
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: t("testimonials.businessOwner"),
      image: "/images/testimonial-2.jpg",
      rating: 5,
      quote: t("testimonials.quote2"),
    },
    {
      id: 3,
      name: "David Chen",
      role: t("testimonials.student"),
      image: "/images/testimonial-3.jpg",
      rating: 5,
      quote: t("testimonials.quote3"),
    },
  ]

  const goToNextSlide = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }, [isTransitioning, testimonials.length])

  const goToPrevSlide = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }, [isTransitioning, testimonials.length])

  // Auto-cycle testimonials every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        goToNextSlide()
      }
    }, 10000)

    return () => clearInterval(interval)
  }, [goToNextSlide, isTransitioning])

  return (
    <section className="py-20 bg-gray-50 w-full flex justify-center">
      <div className="w-full max-w-[1350px] mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="flex flex-col items-center mb-4">
            <span className="text-sm uppercase tracking-wider text-gray-500 mb-1">{t("testimonials.label")}</span>
            <div className="w-12 h-1 bg-red-600 mt-1"></div>
          </div>
          <h2 className="text-5xl font-medium text-gray-900 mb-6">{t("testimonials.title")}</h2> {/* Increased size */}
          <p className="text-gray-600 max-w-2xl mx-auto">{t("testimonials.description")}</p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden">
          <div className="bg-gray-100 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`flex flex-col md:flex-row transition-opacity duration-500 ${
                  currentTestimonial === index ? "opacity-100 block" : "opacity-0 hidden"
                }`}
              >
                <div className="md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                  <div className="text-red-600 mb-6">
                    <MessageSquare className="w-12 h-12 text-gray-200" />
                  </div>

                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? "text-red-600 fill-red-600" : "text-gray-300"}`}
                      />
                    ))}
                  </div>

                  <blockquote className="text-gray-700 text-lg mb-8 italic">"{testimonial.quote}"</blockquote>

                  <div className="mt-auto">
                    <div className="flex items-center">
                      <div className="w-12 h-1 bg-red-600 mr-4"></div>
                      <div>
                        <h3 className="font-medium text-2xl text-gray-900">{testimonial.name}</h3> {/* Increased size */}
                        <p className="text-gray-500 text-sm uppercase tracking-wider">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-8 right-8 flex space-x-2">
                    <button
                      onClick={goToPrevSlide}
                      className="p-2 border border-gray-300 hover:border-red-600 hover:text-red-600 transition-colors"
                      aria-label="Previous testimonial"
                      disabled={isTransitioning}
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={goToNextSlide}
                      className="p-2 border border-gray-300 hover:border-red-600 hover:text-red-600 transition-colors"
                      aria-label="Next testimonial"
                      disabled={isTransitioning}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="md:w-1/2 relative">
                  <div className="relative h-[300px] md:h-full w-full">
                    <SafeImage
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10"></div>

                    {/* Watermark/Stamp */}
                    <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 opacity-10 rotate-12">
                      <div className="border-4 border-white w-32 h-32 flex items-center justify-center">
                        <span className="text-white text-xl font-bold">APPROVED</span>
                      </div>
                    </div>

                    {/* US Skyline Silhouette */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 h-16">
                        <svg viewBox="0 0 1200 200" className="w-full h-full text-gray-800 opacity-20">
                          <path
                            d="M0,150 L50,145 L100,155 L150,140 L200,150 L250,145 L300,160 L350,150 L380,120 L385,80 L390,120 L400,150 L450,145 L500,150 L550,140 L600,150 L650,130 L700,150 L750,140 L800,150 L850,145 L900,150 L950,140 L1000,150 L1050,145 L1100,155 L1150,140 L1200,150 L1200,200 L0,200 Z"
                            fill="currentColor"
                          />
                          <path
                            d="M585,150 L585,100 L590,100 L590,150 M600,150 L600,80 L605,80 L605,150 M620,150 L620,110 L625,110 L625,150 M640,150 L640,90 L645,90 L645,150 M660,150 L660,120 L665,120 L665,150 M680,150 L680,70 L685,70 L685,150 M700,150 L700,100 L705,100 L705,150"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <path
                            d="M500,150 L500,130 L510,130 L510,150 M520,150 L520,100 L525,100 L525,150 M540,150 L540,120 L545,120 L545,150"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <path
                            d="M380,150 L380,120 L385,120 L385,80 L390,80 L390,120 L395,120 L395,150"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true)
                    setCurrentTestimonial(index)
                    setTimeout(() => setIsTransitioning(false), 500)
                  }
                }}
                className={`w-3 h-3 transition-colors ${currentTestimonial === index ? "bg-red-600" : "bg-gray-300"}`}
                aria-label={`Go to testimonial ${index + 1}`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
