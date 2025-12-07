import { createFileRoute } from '@tanstack/react-router'
import Header from '../components/header'
import HeroSection from '../components/hero-section'
import Footer from '../components/footer'
import CTASection from '../components/cta-section'
import { FONTS } from '../config/constants'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const typographySizes = [
    { label: 'Typography', size: '36', fontClass: 'text-2xl md:text-3xl font-bold' },
    { label: 'Typography', size: '32', fontClass: 'text-xl md:text-2xl font-semibold' },
    { label: 'Typography', size: '24', fontClass: 'text-lg md:text-xl font-medium' },
    { label: 'Typography', size: '20', fontClass: 'text-base md:text-lg font-medium' },
    { label: 'Typography', size: '16', fontClass: 'text-sm md:text-base font-normal' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <HeroSection />
        
        {/* Category Description */}
        <section className="py-8 md:py-12">
          <p
            className="text-base md:text-lg lg:text-xl font-normal leading-relaxed mb-8 md:mb-12"
            style={{ fontFamily: FONTS.MONTSERRAT }}
          >
            Category: Food & Lifestyle | Mobile App Design ( 1 - Weeks )
            <br />
            <br />
            The Laurienla Cake app was designed to bring the joy of cakes closer
            to customers by offering a seamless and delightful ordering
            experience. I crafted the design with a focus on user-friendly
            navigation, vibrant visuals, and engaging interactions that reflect
            the celebratory spirit of the brand. This project allowed me to
            explore how UI/UX design can translate the sensory delight of cakes
            into a digital experience that feels just as indulgent
          </p>

          {/* App Screens 1 */}
          <div className="bg-[#fff6fe] rounded-lg p-4 mb-12">
            <img
              src="/vectors/laurienla-screens-1.svg"
              alt="Laurienla App Screens"
              className="w-full"
            />
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-8 md:py-12">
          <h2
            className="text-xl md:text-2xl font-normal mb-4 md:mb-6"
            style={{ fontFamily: FONTS.MONTSERRAT }}
          >
            Problem
          </h2>
          <p
            className="text-base md:text-lg lg:text-xl font-normal leading-relaxed"
            style={{ fontFamily: FONTS.MONTSERRAT }}
          >
            Customers often find it difficult to:
            <br />
            <br />
            Browse cake options easily.
            <br />
            Customize cakes according to flavors, sizes, or designs.
            <br />
            Place quick and seamless orders without confusion.
            <br />
            The challenge was to design an app that eliminates these pain points
            while keeping the experience visually indulgent and emotionally
            engaging.
          </p>

          {/* App Screens 2 */}
          <div className="bg-[#fff6fe] rounded-lg p-4 mt-12">
            <img
              src="/vectors/laurienla-screens-2.svg"
              alt="Laurienla App Screens"
              className="w-full"
            />
          </div>
        </section>

        {/* Research & Insights Section */}
        <section className="py-8 md:py-12">
          <h2
            className="text-xl md:text-2xl font-semibold mb-4 md:mb-6"
            style={{ fontFamily: FONTS.MONTSERRAT }}
          >
            Research & Insights
          </h2>
          <p
            className="text-base md:text-lg lg:text-xl font-semibold leading-relaxed"
            style={{ fontFamily: FONTS.MONTSERRAT }}
          >
            Competitive Analysis: Studied similar food & dessert apps to identify
            gaps in browsing, customization, and checkout processes.
            <br />
            User Needs: Quick access to popular cake options, simple
            customization features, and reliable ordering.
            <br />
            Brand Personality: Laurienla's entrepreneurial spirit, festive
            energy, and premium feel needed to come through in the design.
          </p>
        </section>

        {/* Design Process Section */}
        <section className="py-8 md:py-12">
          <h2
            className="text-xl md:text-2xl font-semibold mb-4 md:mb-6"
            style={{ fontFamily: FONTS.MONTSERRAT }}
          >
            Design Process
          </h2>
          <p
            className="text-base md:text-lg lg:text-xl font-semibold leading-relaxed mb-8 md:mb-12"
            style={{ fontFamily: FONTS.MONTSERRAT }}
          >
            Wireframing: Created low-fidelity sketches to outline the user flow
            (browse - customize -order - checkout).
            <br />
            UI Design: Color Palette: Warm, celebratory tones inspired by cakes
            and celebrations.
            <br />
            Typography: Playful yet elegant fonts to reflect Laurienla's brand.
            <br />
            Imagery: High-quality cake visuals to trigger delight and appetite.
            <br />
            Prototype: Developed an interactive prototype to simulate browsing,
            customization, and ordering flows.
          </p>

          {/* Color Gradient */}
          <div className="mb-12">
            <img
              src="/images/laurienla-color-gradient.png"
              alt="Color Gradient"
              className="w-full max-w-md"
            />
          </div>

          {/* Typography Samples */}
          <div className="mb-12">
            <img
              src="/images/laurienla-typography-samples.png"
              alt="Typography Samples"
              className="w-full max-w-4xl"
            />
        </div>
      </section>

        {/* Typography Section */}
        <section className="py-8 md:py-12">
          <div className="flex flex-col gap-4 md:gap-[26px] mb-8 md:mb-12">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold"
              style={{ fontFamily: FONTS.PLATYPI }}
            >
              Platypi
            </h2>
            <div className="flex flex-col md:flex-row gap-4 md:gap-[33px]">
              <div className="flex flex-col gap-4 md:gap-6">
                {typographySizes.map((item, index) => (
                  <span
                    key={index}
                    className={item.fontClass}
                    style={{ fontFamily: FONTS.PLATYPI }}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-4 md:gap-6">
                {typographySizes.map((item, index) => (
                  <span
                    key={index}
                    className={`${
                      index === 0
                        ? 'text-2xl md:text-3xl lg:text-4xl font-bold'
                        : index === 1
                          ? 'text-xl md:text-2xl lg:text-3xl font-bold'
                          : index === 2
                            ? 'text-lg md:text-xl lg:text-2xl font-bold'
                            : index === 3
                              ? 'text-base md:text-lg lg:text-xl font-bold'
                              : 'text-sm md:text-base font-bold'
                    }`}
                    style={{ fontFamily: FONTS.PLATYPI }}
                  >
                    {item.size}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* App Screens 3 */}
          <div className="bg-[#fff6fe] rounded-lg p-4">
            <img
              src="/vectors/laurienla-screens-3.svg"
              alt="Laurienla App Screens"
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