import Link from "next/link"
import { ExternalLink } from 'lucide-react'

export default function Component() {
  const links = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/theandr3/" },
    { name: "YouTube", href: "https://www.youtube.com/@andrevinicius2c887" },
    { name: "GitHub", href: "https://github.com/TheAndr3" },
    { name: "Dev.to", href: "https://dev.to/theandr3" },
    { name: "Download my CV", href: "https://drive.google.com/file/d/14Nn1CNV7VewnKWf_Ls89fpTyIMfkR4-X/view" },
  ]

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl space-y-6 sm:space-y-8 lg:space-y-10">
        {/* Header */}
        <div className="text-center space-y-2 sm:space-y-3 lg:space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
            André Vinícius  
          </h1>
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl xl:text-2xl">
            Software Engineer
          </p>
        </div>

        {/* Links */}
        <div className="space-y-3 sm:space-y-4">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="flex items-center justify-between w-full px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5 text-white border border-gray-600 rounded-lg sm:rounded-xl hover:border-gray-400 hover:bg-gray-900/20 transition-all duration-200 group touch-manipulation"
            >
              <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-medium">
                {link.name}
              </span>
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 opacity-70 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0 ml-2" />
            </Link>
          ))}
        </div>

        {/* About Me */}
        <div className="text-center text-gray-400 space-y-4 pt-6">
          <p className="text-base sm:text-lg">
            Estudante de Engenharia de Computação apaixonado por inovação e projetos. Participei da 13ª edição da Campus Mobile, desenvolvendo soluções que conectam tecnologia e impacto positivo.
          </p>
          <a href="mailto:andrevinciusdiz@gmail.com" className="inline-block text-white hover:text-gray-300 transition-colors duration-200">
            andrevinciusdiz@gmail.com
          </a>
        </div>

        {/* Footer spacing for mobile */}
        <div className="h-4 sm:h-6 lg:h-8" />
      </div>
    </div>
  )
}
