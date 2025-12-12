import { createFileRoute } from '@tanstack/react-router'
import { Fragment } from 'react'
import { FONTS } from '@/config/constants'

export const Route = createFileRoute('/_work/mobile-apps/tulip-app')({
  component: TulipApp,
})

function TulipApp() {
  const typographySizes = [
    { label: 'Typography', size: '36' },
    { label: 'Typography', size: '32' },
    { label: 'Typography', size: '24' },
    { label: 'Typography', size: '20' },
    { label: 'Typography', size: '16' },
  ]

  return (
    <Fragment>
      {/* Category Description */}
      <section className="py-8 md:py-12">
        <div
          className="text-base md:text-lg lg:text-xl font-normal leading-relaxed mb-8 md:mb-12"
          style={{ fontFamily: FONTS.MONTSERRAT }}
        >
          <p className="text-base md:text-lg lg:text-xl font-semibold leading-relaxed mb-8">
            Category: Food & Lifestyle | Mobile App Design ( 3 - Weeks )
          </p>
          <br />
          <p>
            Tulip is a mobile app designed to make ordering food simple, fast,
            and enjoyable. The goal was to build a platform where users can
            discover meals, explore cuisines, and order seamlessly, all while
            enjoying a vibrant and engaging interface.
          </p>
        </div>

        {/* App Screens 1 */}
        <div className="bg-[#fff6fe] rounded-lg p-4 mb-12">
          <img
            src="/vectors/tulip-app/screen-1.svg"
            alt="Tulip App Screens"
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
          Food lovers often face challenges such as:
          <br />
          <br />
          Too many restaurant choices without clear guidance.
          <br />
          Complicated ordering and checkout flows.
          <br />
          Limited personalization in food discovery.
          <br />
          The challenge was to design Tulip as an app that combines clarity,
          speed, and visual delight for a smooth dining experience.
        </p>

        {/* App Screens 2 */}
        <div className="bg-[#fff6fe] rounded-lg p-4 mt-12">
          <img
            src="/vectors/tulip-app/screen-2.svg"
            alt="Tulip App Screens"
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
          Competitive Analysis: Reviewed leading food apps to uncover gaps in
          personalization and user engagement.
          <br />
          User Needs: Quick browsing, clear menus, and personalized suggestions.
          <br />
          Brand Personality: Fresh, inviting, and appetite-inducing Tulip
          reflects the joy of food and the ease of access.
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
          Wireframes: Built low-fidelity flows for browsing, customizing meals,
          and checking out.
          <br />
          UI Design:
          <br />
          Color Palette: Bright, fresh tones inspired by natural ingredients.
          <br />
          Typography: Montserrat & Poppins
          <br />
          Imagery: High-quality food photography and visuals that spark
          appetite.
          <br />
          Prototype: Created an interactive prototype that highlights food
          discovery, smooth ordering, and quick checkout.
        </p>

        {/* App Screens 3 */}
        <div className="bg-[#fff6fe] rounded-lg p-4 mb-12">
          <img
            src="/vectors/tulip-app/screen-3.svg"
            alt="Tulip App Screens"
            className="w-full"
          />
        </div>

        {/* App Screens 4 */}
        <div className="bg-[#fff6fe] rounded-lg p-4">
          <img
            src="/vectors/tulip-app/screen-4.svg"
            alt="Tulip App Screens"
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
              src="/vectors/tulip-app/color-palette.svg"
              alt="Color Palette"
              className="w-full max-w-md"
            />
          </div>

          {/* Typography */}
          <div className="flex flex-col gap-4 md:gap-[26px]">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold"
              style={{ fontFamily: FONTS.MONTSERRAT }}
            >
              Montserrat
            </h2>
            <div className="flex flex-col md:flex-row gap-4 md:gap-[33px]">
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
                              : 'text-sm md:text-base font-normal'
                    }`}
                    style={{ fontFamily: FONTS.MONTSERRAT }}
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
                    style={{ fontFamily: FONTS.MONTSERRAT }}
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
              src="/images/typography-grid.png"
              alt="Typography Grid"
              className="w-full max-w-2xl"
            />
          </div>
        </div>
      </section>
    </Fragment>
  )
}
