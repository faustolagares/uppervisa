"use client"

import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"

interface VideoBackgroundProps {
  videoId: string
  startTime?: number
  endTime?: number
}

export default function OptimizedVideoBackground({ videoId, startTime = 11, endTime = 132 }: VideoBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    // Set fixed dimensions immediately to prevent layout shifts
    if (containerRef.current) {
      containerRef.current.style.width = "100%"
      containerRef.current.style.height = "100%"
      containerRef.current.style.backgroundColor = "#1a1a1a" // Placeholder color
    }

    // Use Intersection Observer to only load the video when it's in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { threshold: 0.1 } // 10% of the element is visible
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  // Only load the video when it's in viewport and after a delay
  useEffect(() => {
    if (isIntersecting) {
      const timer = setTimeout(() => {
        setShouldLoadVideo(true)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [isIntersecting])

  // Create YouTube iframe only when shouldLoadVideo is true
  useEffect(() => {
    if (!shouldLoadVideo || !containerRef.current) return

    const iframe = document.createElement("iframe")
    iframe.src = `https://www.youtube.com/embed/${videoId}?start=${startTime}&end=${endTime}&autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&disablekb=1&iv_load_policy=3`
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    iframe.loading = "lazy" // Use native lazy loading
    iframe.style.position = "absolute"
    iframe.style.top = "0"
    iframe.style.left = "0"
    iframe.style.width = "100%"
    iframe.style.height = "100%"
    iframe.style.border = "none"
    iframe.style.opacity = "0"
    iframe.style.transition = "opacity 0.5s ease-in-out"
    iframe.title = "Background Video"

    iframe.onload = () => {
      // Fade in the video after it loads
      iframe.style.opacity = "1"
    }

    containerRef.current.appendChild(iframe)

    return () => {
      if (containerRef.current && containerRef.current.contains(iframe)) {
        containerRef.current.removeChild(iframe)
      }
    }
  }, [videoId, startTime, endTime, shouldLoadVideo])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <div ref={containerRef} className="relative w-full h-full bg-gray-900" style={{ aspectRatio: "16/9" }}></div>
    </div>
  )
}
