import { createFileRoute } from '@tanstack/react-router'
import Header from '../components/header'
import HeroSection from '../components/hero-section'
import Footer from '../components/footer'
import CTASection from '../components/cta-section'
import { ROUTES } from '../config/routes'
import { FONTS } from '../config/constants'

export const Route = createFileRoute('/little-luminaries')({
  component: LittleLuminaries,
})

function LittleLuminaries() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <HeroSection showBackButton backTo={ROUTES.HOME} />

        {/* Category Description */}
        <section className="py-8">
          <div
            className="text-base md:text-lg lg:text-xl font-normal leading-relaxed mb-4"
            style={{ fontFamily: FONTS.MONTSERRAT }}
          >
            <p className="text-base md:text-lg lg:text-xl font-semibold leading-relaxed mb-4">
              Full Project Overview: Little Luminaries (2 Weeks)
            </p>
            <p>
              Little Luminaries is a global education brand that needed a
              redesign to improve user experience, visual appeal, and
              functionality. The goal was to create a modern, intuitive, and
              visually appealing platform that reflects the brand's mission: to
              create a safe and inspiring space for children, while building
              trust with parents. This project demonstrates my ability to take a
              concept from research to fully polished design, merging aesthetics
              with usability. It shows how thoughtful design choices in color,
              typography, and layout can strengthen brand identity while
              improving user trust and engagement.
            </p>
            <p className="mt-4">
              <span className="font-semibold">My Role:</span> I handled every
              aspect of the design process: Research & Discovery, Color Palette,
              Typography, Components, Layouts, Illustrations & Graphics.
            </p>
          </div>
        </section>

        <ImageSection
          title="Low Fidelity"
          src="/vectors/little-luminaries/low-fidelity.svg"
          alt="Little Luminaries Low Fidelity Wireframes"
        />

        <ImageSection
          title="High Fidelity"
          src="/vectors/little-luminaries/high-fidelity.svg"
          alt="Little Luminaries High Fidelity Designs"
        />

        <ImageSection
          title="Components"
          src="/vectors/little-luminaries/components.svg"
          alt="Little Luminaries Design Components"
        />

        <ImageSection
          title="Prototype"
          src="/vectors/little-luminaries/prototype.svg"
          alt="Little Luminaries Interactive Prototype"
          showBorder
        />

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

interface ImageSectionProps {
  title: string
  src: string
  alt: string
  showBorder?: boolean
}

function ImageSection({
  title,
  src,
  alt,
  showBorder = false,
}: ImageSectionProps) {
  return (
    <section className="py-8 md:py-12">
      <h2
        className="text-xl md:text-2xl font-semibold mb-6 md:mb-8"
        style={{ fontFamily: FONTS.MONTSERRAT }}
      >
        {title}
      </h2>
      <div
        className={`rounded-lg overflow-hidden ${
          showBorder ? 'border-2 border-dashed border-blue-500 p-4' : ''
        }`}
      >
        <img src={src} alt={alt} className="w-full h-auto" />
      </div>
    </section>
  )
}
