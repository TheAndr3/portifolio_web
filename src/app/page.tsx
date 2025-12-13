import Link from "next/link"
import { ExternalLink } from 'lucide-react'

export default function Component() {
  const links = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/theandr3/" },
    { name: "GitHub", href: "https://github.com/TheAndr3" },
    { name: "Dev.to", href: "https://dev.to/theandr3" },
    { name: "YouTube", href: "https://www.youtube.com/@andrevinicius2c887" },
    { name: "Download my CV", href: "https://drive.google.com/file/d/1GE1HxBg7vrRKF0yfmuAsUSUoJ0B90HTl/view?usp=sharing" },
  ]

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl space-y-6 sm:space-y-8 lg:space-y-10">
        {/* Header */}
        <div className="text-center space-y-2 sm:space-y-3 lg:space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
            André Vinícius  
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl xl:text-2xl">
            Software Engineer
          </p>
        </div>

        {/* Links */}
        <div className="space-y-3 sm:space-y-4">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="flex items-center justify-between w-full px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5 text-foreground border border-border rounded-lg sm:rounded-xl hover:border-foreground/50 hover:bg-accent transition-all duration-200 group touch-manipulation"
            >
              <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-medium">
                {link.name}
              </span>
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 opacity-70 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0 ml-2" />
            </Link>
          ))}
        </div>

        {/* About Me */}
        <div className="text-center text-muted-foreground space-y-4 pt-6">
          <p className="text-base sm:text-lg">
            A Computer Engineering student with a passion for innovation and projects. I was a participant in the 13th Campus Mobile competition, where I developed solutions that bridge technology with positive impact.
          </p>
          <a href="mailto:andrevinciusdiz@gmail.com" className="inline-block text-foreground hover:text-muted-foreground transition-colors duration-200">
            andrevinciusdiz@gmail.com
          </a>
        </div>

        {/* Footer spacing for mobile */}
        <div className="h-4 sm:h-6 lg:h-8" />
      </div>
    </div>
  )
}
