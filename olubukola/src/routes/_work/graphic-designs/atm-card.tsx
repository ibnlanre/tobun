import { createFileRoute } from '@tanstack/react-router'
import { Fragment } from 'react'
import { FONTS } from '@/config/constants'

export const Route = createFileRoute('/_work/graphic-designs/atm-card')({
  component: ATMCard,
})

function ATMCard() {
  return (
    <Fragment>
      {/* ATM Card Section */}
      <section className="py-8 md:py-12">
        <h2
          className="text-base md:text-lg lg:text-xl xl:text-2xl font-normal mb-6 md:mb-8 max-w-6xl"
          style={{ fontFamily: FONTS.MONTSERRAT }}
        >
          <p className="text-base md:text-lg lg:text-xl font-semibold leading-relaxed">
            ATM Card Redesign Concept for: Better Readability, Better Experience
            ( 24 Hours)
          </p>
          <br />
          ATM cards are a part of everyday life, yet many designs often overlook
          readability and visual harmony. For this project, I explored how these
          cards could look and feel better by adjusting color palettes, refining
          text structures, and improving overall clarity. This wasn't about
          reinventing the card from scratch, it was about showing how small but
          thoughtful changes can enhance usability, strengthen brand identity,
          and create a more enjoyable user experience
        </h2>

        {/* ATM Cards Grid */}
        <div className="bg-[#f7f9fb] rounded-lg p-8">
          <img
            src="/vectors/atm-cards-grid.svg"
            alt="ATM Card Designs"
            className="w-full"
          />
        </div>
      </section>
    </Fragment>
  )
}
