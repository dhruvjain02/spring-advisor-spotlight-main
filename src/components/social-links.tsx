import { Linkedin, Globe, Twitter } from 'lucide-react'

interface SocialMedia {
  twitter?: string
  linkedin?: string
  website?: string
}

export function SocialLinks({ socialMedia }: { socialMedia: SocialMedia }) {
  return (
    <div className="flex space-x-4">
      {socialMedia.twitter && (
        <a
          href={socialMedia.twitter}
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-spring-green"
        >
          <Twitter className="w-5 h-5" />
        </a>
      )}
      {socialMedia.linkedin && (
        <a
          href={socialMedia.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-spring-green"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      )}
      {socialMedia.website && (
        <a
          href={socialMedia.website}
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-spring-green"
        >
          <Globe className="w-5 h-5" />
        </a>
      )}
    </div>
  )
}
