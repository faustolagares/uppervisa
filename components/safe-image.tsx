"use client"

import type React from "react"

import Image from "next/image"
import type { ImageProps } from "next/image"

interface SafeImageProps extends ImageProps {
  src: string
  alt: string
}

const SafeImage: React.FC<SafeImageProps> = ({ src, alt, ...props }) => {
  // Basic check to prevent errors if the image source is missing or invalid
  if (!src) {
    return <div className="w-full h-full bg-gray-200 flex items-center justify-center">No Image</div>
  }

  return <Image src={src || "/placeholder.svg"} alt={alt} {...props} />
}

export default SafeImage
