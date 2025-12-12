import { Link, createFileRoute } from '@tanstack/react-router'
import { zodValidator } from '@tanstack/zod-adapter'
import { z } from 'zod'
import { useEffect } from 'react'
import { FONTS } from '../config/constants'
import { PROJECT_TYPES, ROUTES } from '../config/routes'

import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { CTASection } from '../components/cta-section'
import { HeroSection } from '../components/hero-section'

const searchSchema = z.object({
  type: z
    .enum([PROJECT_TYPES.MOBILE_APPS, PROJECT_TYPES.WEBSITES])
    .default(PROJECT_TYPES.MOBILE_APPS),
})

export const Route = createFileRoute('/')({
  component: Home,
  validateSearch: zodValidator(searchSchema),
})

function Home() {
  const { type } = Route.useSearch()

  useEffect(() => {
    const element = document.getElementById(type)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }, [type])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-350 mx-auto px-4 sm:px-6 md:px-12">
        <HeroSection
          tagline="I turn your bold ideas into powerful digital experience"
          wavyUnderline
        />

        {/* Mobile Apps Section */}
        <section id="mobile_apps" className="py-8 md:py-12">
          <h2
            className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 md:mb-12"
            style={{ fontFamily: FONTS.MONTSERRAT }}
          >
            Mobile App
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ProjectCard
              title="Tulip"
              image="/vectors/tulip.svg"
              link={ROUTES.TULIP_APP}
            />
            <ProjectCard
              title="Swift Rate"
              image="/vectors/swift-rate.svg"
              link={ROUTES.SWIFT_RATE_APP}
            />
            <ProjectCard
              title="Laurienla Cake"
              image="/vectors/laurienla-cake.svg"
              link={ROUTES.LAURIENLA_CAKE}
            />
          </div>
        </section>

        {/* Websites Section */}
        <section id="websites" className="py-8 md:py-12">
          <h2
            className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 md:mb-12"
            style={{ fontFamily: FONTS.MONTSERRAT }}
          >
            Website
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ProjectCard
              title="Helkenma"
              image="/vectors/helkenma.svg"
              link={ROUTES.HEIKENMA_SOLAR}
            />
            <ProjectCard
              title="Ladywid"
              image="/vectors/ladywid.svg"
              link={ROUTES.LADYWID}
            />
            <ProjectCard
              title="Little Luminaries"
              image="/vectors/little-luminaries.svg"
              link={ROUTES.LITTLE_LUMINARIES}
            />
          </div>
        </section>

        {/* Graphic Design Section - Always visible */}
        <section className="py-8 md:py-12">
          <h2
            className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 md:mb-12"
            style={{ fontFamily: FONTS.MONTSERRAT }}
          >
            Graphic Design
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <ProjectCard
              title="ATM Card"
              image="/vectors/atm-card.svg"
              link={ROUTES.ATM_CARD}
            />
            <ProjectCard
              title="Illustration"
              image="/vectors/illustration.svg"
              link={ROUTES.GRAPHIC}
            />
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

interface ProjectCardProps {
  title: string
  image: string
  link: string
}

function ProjectCard({ title, image, link }: ProjectCardProps) {
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
