"use client"

import Image from "next/image"
import { useLanguage } from "./language-provider"
import { ArrowUpRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"

type CourseType = {
  id: string
  title: string
  description: string
  image: string
}

export default function CoursesSection() {
  const { t } = useLanguage()
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null)
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

  const courses: CourseType[] = [
    {
      id: "citizenship",
      title: t("courses.citizenship.title"),
      description: t("courses.citizenship.description"),
      image: "/images/citizenship-test.jpg",
    },
    {
      id: "ielts",
      title: t("courses.ielts.title"),
      description: t("courses.ielts.description"),
      image: "/images/ielts-coaching.jpg",
    },
    {
      id: "toefl",
      title: t("courses.toefl.title"),
      description: t("courses.toefl.description"),
      image: "/images/toefl-coaching.jpg",
    },
    {
      id: "pte",
      title: t("courses.pte.title"),
      description: t("courses.pte.description"),
      image: "/images/pte-coaching.jpg",
    },
  ]

  return (
    <section className="py-32 bg-white w-full flex justify-center" ref={sectionRef}>
      <div className="w-full max-w-[1350px] mx-auto px-4">
        {/* Section Header */}
        <div
          className={`mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex flex-col items-start mb-4">
            <span className="text-sm uppercase tracking-wider text-gray-500 mb-1">{t("courses.label")}</span>
            <div className="w-12 h-1 bg-red-600 mt-1"></div>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <h2 className="text-4xl font-medium text-gray-900 mb-6 md:mb-0 max-w-xl">{t("courses.title")}</h2>
            <p className="text-gray-600 max-w-xl">{t("courses.description")}</p>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`relative group overflow-hidden transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCourse(course.id)}
              onMouseLeave={() => setHoveredCourse(null)}
            >
              {/* Course Image */}
              <div
                className={`relative h-[300px] w-full transition-all duration-300 ${
                  hoveredCourse === course.id ? "border border-red-600" : ""
                }`}
              >
                <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
              </div>

              {/* Course Title Bar (Always Visible) */}
              <div className="absolute bottom-0 left-0 right-0 bg-red-600 py-3 px-4 flex justify-between items-center">
                <h3 className="text-xl font-medium text-white">{course.title}</h3>
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>

              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 bg-white p-6 flex flex-col transition-all duration-300 ${
                  hoveredCourse === course.id
                    ? "opacity-100 translate-y-0 translate-x-0"
                    : "opacity-0 -translate-x-full"
                }`}
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-red-600"
                  >
                    <path
                      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">{course.title}</h3>
                <p className="text-gray-600 mb-6">{course.description}</p>
                <div className="mt-auto self-end">
                  <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-red-600 hover:text-red-600 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
