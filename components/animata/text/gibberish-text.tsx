"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface GibberishTextProps {
  /**
   * The text to animate.
   */
  text: string

  /**
   * The class name to apply to each letter.
   */
  className?: string
}

const Letter = ({ letter, className }: { letter: string; className?: string }) => {
  const [code, setCode] = useState(letter.charCodeAt(0))
  const originalWidth = useRef<number | null>(null)
  const letterRef = useRef<HTMLSpanElement>(null)

  // Measure the original letter width on mount
  useEffect(() => {
    if (letterRef.current) {
      originalWidth.current = letterRef.current.getBoundingClientRect().width
    }
  }, [])

  useEffect(() => {
    // Reduce number of iterations for better performance
    let count = Math.floor(Math.random() * 8) + 5

    // Increase interval for better performance
    const interval = setInterval(() => {
      // Preserve case - use different ranges for uppercase and lowercase
      const isUpperCase = letter === letter.toUpperCase() && letter !== letter.toLowerCase()
      const range = isUpperCase ? [65, 90] : [97, 122]

      // For spaces and special characters, maintain the same character
      if (letter === " " || !letter.match(/[a-zA-Z]/)) {
        setCode(letter.charCodeAt(0))
      } else {
        setCode(() => Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0])
      }

      count--
      if (count === 0) {
        setCode(letter.charCodeAt(0))
        clearInterval(interval)
      }
    }, 100) // Slower animation for better performance

    return () => clearInterval(interval)
  }, [letter])

  // Apply fixed width based on the original letter to prevent layout shifts
  const style = originalWidth.current ? { width: `${originalWidth.current}px`, display: "inline-block" } : {}

  return (
    <span ref={letterRef} className={cn("inline-block", className)} style={style} aria-hidden="true">
      {String.fromCharCode(code)}
    </span>
  )
}

/**
 * Animate each letter in the text using gibberish text effect.
 * Renders a random letter first and then animates it to the correct letter.
 */
export default function GibberishText({ text, className }: GibberishTextProps) {
  // Add the actual text in a visually hidden span for accessibility
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split("").map((letter, index) => {
          return <Letter className={className} letter={letter} key={`${index}-${letter}`} />
        })}
      </span>
    </>
  )
}
