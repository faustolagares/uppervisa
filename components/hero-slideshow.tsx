"use client"

import React, { useState, useEffect, useCallback } from "react"
import translations from "@/translations"
import SafeImage from "./safe-image"

export default function HeroSlideshow({ locale }: { locale: string }) {
  // Forçar uma altura maior no componente pai
  useEffect(() => {
    const parentContainer = document.querySelector(".hero-slideshow-container")
    if (parentContainer instanceof HTMLElement) { // Check if it's an HTMLElement
      parentContainer.style.height = "800px" // Now style property is accessible
    }
  }, [])

  const t = translations[locale as keyof typeof translations] || translations["en-US"]

  // Create slides with proper formatting for each language
  const slides = [
    {
      id: 1,
      title: t.hero.slide1.title,
      image:
        "https://neecplxfgfdludxo.public.blob.vercel-storage.com/UpperVisa/Hero%20Section/UpperVisa%201-U6W5z0wAJACYfQaTtMBhwhllKxJqLF.webp",
      alt: "Immigration consultation meeting",
    },
    {
      id: 2,
      title: t.hero.slide2.title,
      image:
        "https://neecplxfgfdludxo.public.blob.vercel-storage.com/UpperVisa/Hero%20Section/UpperVisa%202-ZjHT0uEnVhYCsvCPCqaev3UEdxcdhR.webp",
      alt: "Passport handover during visa consultation",
    },
    {
      id: 3,
      title: t.hero.slide3.title,
      image:
        "https://neecplxfgfdludxo.public.blob.vercel-storage.com/UpperVisa/Hero%20Section/UpperVisa%203-NTRFspsceIPhkts4jIEDiuR2AAYDF1.webp",
      alt: "Woman traveling on airplane after successful visa application",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const transitionToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return

      setIsTransitioning(true)

      // Start transition
      setTimeout(() => {
        setCurrentSlide(index)

        // End transition after animation completes
        setTimeout(() => {
          setIsTransitioning(false)
        }, 1000) // Match this with the CSS transition duration
      }, 500) // Short delay before changing slide
    },
    [isTransitioning],
  )

  const goToNextSlide = useCallback(() => {
    const nextSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1
    transitionToSlide(nextSlide)
  }, [currentSlide, transitionToSlide, slides.length])

  const goToPrevSlide = useCallback(() => {
    const prevSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1
    transitionToSlide(prevSlide)
  }, [currentSlide, transitionToSlide, slides.length])

  useEffect(() => {
    // Only set up the interval if we're not in the middle of a transition
    if (!isTransitioning) {
      const interval = setInterval(() => {
        goToNextSlide()
      }, 10000) // 10 seconds per slide

      return () => clearInterval(interval)
    }
  }, [goToNextSlide, isTransitioning])

  // Function to format slide titles with line breaks and remove "Since 2010"
  const formatTitle = (title: string) => {
    return title
      .split("<br>")
      .map((part) => part.replace("Since 2010", "").trim())
      .map((part, i) => (
        <React.Fragment key={i}>
          {i > 0 && <br />}
          {part}
        </React.Fragment>
      ))
  }

  return (
    <>
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1200 ease-in-out ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ zIndex: currentSlide === index ? 1 : 0 }}
          >
            <SafeImage
              src={slide.image || "/placeholder.svg"}
              alt={slide.alt}
              fill
              className="brightness-75"
              priority={index === 0}
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>

      <div className="relative w-full max-w-[1440px] h-full">
        {/* Content for each slide */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 flex flex-col justify-center px-6 md:px-16 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            style={{ zIndex: currentSlide === index ? 2 : 0 }}
          >
            <div className="max-w-3xl">
              {/* Removed text-5xl md:text-7xl lg:text-8xl and leading-tight to use global h1 style */}
              <h1 className="font-medium text-white mb-8"> 
                {formatTitle(slide.title)}
              </h1>
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 font-medium transition-colors">
                {t.common.discoverMore}
              </button>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <div className="absolute bottom-8 right-8 flex space-x-2 z-10">
          <button
            className={`bg-white/20 hover:bg-white/30 p-3 backdrop-blur-sm transition-opacity ${
              isTransitioning ? "opacity-50 cursor-not-allowed" : "opacity-100"
            }`}
            onClick={goToPrevSlide}
            disabled={isTransitioning}
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-white"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            className={`bg-white/20 hover:bg-white/30 p-3 backdrop-blur-sm transition-opacity ${
              isTransitioning ? "opacity-50 cursor-not-allowed" : "opacity-100"
            }`}
            onClick={goToNextSlide}
            disabled={isTransitioning}
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-white"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
