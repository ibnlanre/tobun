import { createFileRoute } from '@tanstack/react-router'
import { Fragment } from 'react'
import { FONTS } from '@/config/constants'
import { ROUTES } from '@/config/routes'

import { ProjectCard } from '@/components/project-card'

export const Route = createFileRoute('/_work/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Fragment>
      {/* Mobile Apps Section */}
      <section id="mobile-apps" className="py-8 md:py-12">
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
            link={ROUTES.ILLUSTRATION}
          />
        </div>
      </section>
    </Fragment>
  )
}
