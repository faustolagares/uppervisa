import type React from "react"
import Image from "next/image"

interface TeamMemberCardProps {
  name: string
  title: string
  imageUrl: string
  linkedinUrl?: string
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, title, imageUrl, linkedinUrl }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white">
      <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
        <Image src={imageUrl || "/placeholder.svg"} alt={name} layout="fill" objectFit="cover" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600">{title}</p>
      {linkedinUrl && (
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-blue-500 hover:text-blue-700"
        >
          LinkedIn
        </a>
      )}
    </div>
  )
}

export default TeamMemberCard
