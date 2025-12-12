import { createFileRoute } from '@tanstack/react-router'
import {Header} from '../components/header'
import {HeroSection} from '../components/hero-section'
import {Footer} from '../components/footer'
import {CTASection} from '../components/cta-section'
import { ROUTES } from '../config/routes'
import { FONTS } from '../config/constants'

export const Route = createFileRoute('/swift-rate-app')({
  component: SwiftRateApp,
})

function SwiftRateApp() {
  const typographySizes = [
    {
      label: 'Typography',
      size: '36',
      fontClass: 'text-2xl md:text-3xl font-bold',
    },
    {
      label: 'Typography',
      size: '32',
      fontClass: 'text-xl md:text-2xl font-semibold',
    },
    {
      label: 'Typography',
      size: '24',
      fontClass: 'text-lg md:text-xl font-medium',
    },
    {
      label: 'Typography',
      size: '20',
      fontClass: 'text-base md:text-lg font-medium',
    },
    {
      label: 'Typography',
      size: '16',
      fontClass: 'text-sm md:text-base font-normal',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <HeroSection showBackButton backTo={ROUTES.HOME} />

        {/* Category Description */}
        <section className="py-8 md:py-12">
          <p
            className="text-base md:text-lg lg:text-xl font-normal leading-relaxed mb-8 md:mb-12"
            style={{ fontFamily: FONTS.MONTSERRAT }}
          >
            Category: Fintech | Mobile App Design ( 2 - Weeks )
            <br />
            <br />
            Swift Rate is a financial app designed to make currency exchange and
            international transfers simple, fast, and trustworthy. My focus was
            on creating a platform where users can track real-time rates,
            exchange currencies, and manage multiple wallets with ease. This
            project taught me how UI/UX design can shape financial trust,
            especially in fintech where clarity, security, and usability are
            essential. Swift Rate allowed me to craft a design that empowers
            users to manage money across borders with confidence.
          </p>

          {/* App Screens 1 */}
          <div className="bg-[#e3ecfe] rounded-lg p-4 mb-12">
            <img
              src="/vectors/swift-rate/screen-1.svg"
              alt="Swift Rate App Screens"
              className="w-full"
            />
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-8 md:py-12">
          <h2
            className="text-xl md:text-2xl font-semibold mb-4 md:mb-6"
            style={{ fontFamily: FONTS.MONTSERRAT }}
          >
            Problem
          </h2>
          <p
            className="text-base md:text-lg lg:text-xl font-semibold leading-relaxed"
            style={{ fontFamily: FONTS.MONTSERRAT }}
          >
            Users of international exchange apps often face
            <br />
            <br />
            Confusing or cluttered interfaces when tracking rates.
            <br />
            Lack of transparency in exchange flows.
            <br />
            Difficulty managing multiple currencies in one place.
            <br />
            The challenge was to design an app that combines clarity, speed, and
            reliability, giving users confidence in every transaction.
          </p>

          {/* App Screens 2 */}
          <div className="bg-[#e3ecfe] rounded-lg p-4 mt-12">
            <img
              src="/vectors/swift-rate/screen-2.svg"
              alt="Swift Rate App Screens"
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
            Competitive Analysis: Studied top exchange apps to identify gaps in
            usability and design trust.
            <br />
            User Needs: Quick access to live rates, a smooth exchange process,
            and clear transaction records.
            <br />
            Design Goal: Build trust through clean UI, strong information
            hierarchy, and financial transparency
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
            Wireframes: Outlined user journeys for rate checking, exchanging,
            and managing wallets.
            <br />
            UI Design: Color Palette: Professional tones (deep blues & neutrals)
            to communicate trust and reliability.
            <br />
            Typography: Play and Pridi
            <br />
            Icons & Visuals: Simple, universal icons for navigation (home,
            exchange, wallet, Payment, profile).
            <br />
            Prototype: Built an interactive flow that simulates real-time
            exchange and wallet management.
          </p>

          {/* App Screens 3 */}
          <div className="bg-[#e3ecfe] rounded-lg p-4">
            <img
              src="/vectors/swift-rate/screen-3.svg"
              alt="Swift Rate App Screens"
              className="w-full"
            />
          </div>
        </section>

        {/* Design System Section */}
        <section className="py-16">
          <div className="flex flex-col gap-[100px]">
            {/* Color Palette */}
            <div>
              <img
                src="/vectors/swift-rate/color-palette.svg"
                alt="Color Palette"
                className="w-full max-w-md"
              />
            </div>

            {/* Typography */}
            <div className="flex flex-col gap-4 md:gap-[26px]">
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold"
                style={{ fontFamily: FONTS.PRIDI }}
              >
                Pridi
              </h2>
              <div className="flex flex-col md:flex-row gap-4 md:gap-[33px]">
                <div className="flex flex-col gap-4 md:gap-6">
                  {typographySizes.map((item, index) => (
                    <span
                      key={index}
                      className={item.fontClass}
                      style={{ fontFamily: FONTS.PRIDI }}
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
                      style={{ fontFamily: FONTS.PRIDI }}
                    >
                      {item.size}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Typography Grid */}
            <div>
              <img
                src="/images/swift-rate-typography-grid.png"
                alt="Typography Grid"
                className="w-full max-w-3xl"
              />
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
