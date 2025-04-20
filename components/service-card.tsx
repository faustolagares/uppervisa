import type React from "react"
import Image from "next/image"

// Remover: import SafeImage from "@/components/safe-image"

// Substituir todos os componentes <SafeImage> por <Image>

interface ServiceCardProps {
  title: string
  description: string
  imageSrc: string
  altText: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageSrc, altText }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={altText}
        width={500} // Ajuste conforme necessário
        height={300} // Ajuste conforme necessário
        className="rounded-md mb-2"
      />
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}

export default ServiceCard
