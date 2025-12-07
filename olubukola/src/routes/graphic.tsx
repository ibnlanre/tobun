import { createFileRoute } from '@tanstack/react-router'
import Header from '../components/header'
import HeroSection from '../components/hero-section'
import Footer from '../components/footer'
import CTASection from '../components/cta-section'
import { ROUTES } from '../config/routes'
import { FONTS } from '../config/constants'

export const Route = createFileRoute('/graphic')({ component: Graphic })

function Graphic() {

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <HeroSection showBackButton backTo={ROUTES.HOME} />

        {/* Graphic Design Section */}
        <section className="py-8 md:py-12">
          <div className="mb-6 md:mb-8">
            <h2
              className="text-base md:text-lg lg:text-xl xl:text-2xl font-normal mb-4 md:mb-6"
              style={{ fontFamily: FONTS.MONTSERRAT }}
            >
              Created this Illustrations & Graphic Design ( 1 - Weeks )
            </h2>
            <p
              className="text-base md:text-lg lg:text-xl font-normal leading-relaxed"
              style={{ fontFamily: FONTS.MONTSERRAT }}
            >
              Every line, color, and detail you see here was created by me from
              concept to execution. My illustrations and graphic designs are
              more than visuals; they are stories brought to life through
              creativity and craft. I experiment with bold colors, expressive
              forms, and thoughtful composition to capture attention and
              communicate meaning. Whether it's a playful illustration, a sleek
              graphic layout, or a detailed artwork, each piece is designed to
              be both visually striking and emotionally engaging.
            </p>
            <p
              className="text-base md:text-lg lg:text-xl font-normal mt-4 md:mt-6 leading-relaxed"
              style={{ fontFamily: FONTS.MONTSERRAT }}
            >
              These works reflect my belief that design is not just decoration,
              it's a powerful way to connect, inspire, and leave a lasting
              impression
            </p>
          </div>

          {/* Graphics Grid */}
          <div className="my-12">
            <img
              src="/vectors/graphics-grid.svg"
              alt="Graphic Design Works"
              className="w-full"
            />
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}