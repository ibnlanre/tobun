import { createFileRoute } from '@tanstack/react-router'
import { Fragment } from 'react'
import { FONTS } from '@/config/constants'
import { ROUTES } from '@/config/routes'

import { ProjectCard } from '@/components/project-card'

export const Route = createFileRoute('/_work/graphic-designs/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Fragment>
      {/* Graphic Design Section */}
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
