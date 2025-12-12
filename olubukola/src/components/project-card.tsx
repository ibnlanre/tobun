import { Link } from '@tanstack/react-router'
import { FONTS } from '@/config/constants'

interface ProjectCardProps {
  title: string
  image: string
  link: string
}

export function ProjectCard({ title, image, link }: ProjectCardProps) {
  return (
    <Link to={link} className="group cursor-pointer">
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
        <div className="w-full aspect-4/3 bg-gray-50 flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              // Fallback if image doesn't exist
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
              target.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-400" style="font-family: ${FONTS.MONTSERRAT}">${title}</div>`
            }}
          />
        </div>
        <div className="p-4 md:p-6">
          <h3
            className="text-lg md:text-xl font-semibold"
            style={{ fontFamily: FONTS.MONTSERRAT }}
          >
            {title}
          </h3>
        </div>
      </div>
    </Link>
  )
}
