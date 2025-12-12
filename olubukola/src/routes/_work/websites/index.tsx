import { createFileRoute } from '@tanstack/react-router'
import { Fragment } from 'react'
import { FONTS } from '@/config/constants'
import { ROUTES } from '@/config/routes'

import { ProjectCard } from '@/components/project-card'

export const Route = createFileRoute('/_work/websites/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Fragment>
      {/* Websites Section */}
      <section className="py-8 md:py-12">
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
    </Fragment>
  )
}
