import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { FONTS } from '../config/constants'
import { PROJECT_TYPES as ROUTE_PROJECT_TYPES } from '../config/routes'

import Header from '../components/header'
import Footer from '../components/footer'
import CTASection from '../components/cta-section'
import HeroSection from '../components/hero-section'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const [selectedType, setSelectedType] = useState<string>(ROUTE_PROJECT_TYPES.MOBILE_APPS)

  const handleTypeChange = (type: string) => {
    setSelectedType(type)
    // Scroll to the appropriate section
    const sectionId = type === ROUTE_PROJECT_TYPES.MOBILE_APPS ? 'mobile-apps' : 'websites'
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 100 // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <HeroSection
          selectedType={selectedType}
          onTypeChange={handleTypeChange}
          tagline="I turn your bold ideas into powerful digital experience"
          wavyUnderline
        />

        {/* Mobile Apps Section */}
        <section id="mobile-apps" className="py-8 md:py-12 scroll-mt-24">
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
              link="/tulip-app"
            />
            <ProjectCard
              title="Swift Rate"
              image="/vectors/swift-rate.svg"
              link="/swift-rate-app"
            />
            <ProjectCard
              title="Laurienla Cake"
              image="/vectors/laurienla-cake.svg"
              link="/laurienla-cake"
            />
          </div>
        </section>

        {/* Websites Section */}
        <section id="websites" className="py-8 md:py-12 scroll-mt-24">
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
              link="#"
            />
            <ProjectCard
              title="Ladywid"
              image="/vectors/ladywid.svg"
              link="#"
            />
            <ProjectCard
              title="Little Luminaries"
              image="/vectors/little-luminaries.svg"
              link="#"
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
              link="/atm-card"
            />
            <ProjectCard
              title="Illustration"
              image="/vectors/illustration.svg"
              link="/graphic"
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
    <Link
      to={link}
      className="group cursor-pointer"
    >
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
