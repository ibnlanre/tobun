import { createFileRoute } from '@tanstack/react-router'
import { Carousel } from '@mantine/carousel'
import { Fragment } from 'react'
import { FONTS } from '@/config/constants'

export const Route = createFileRoute('/_work/websites/heikenma-solar')({
  component: HeikenmaSolar,
})

function HeikenmaSolar() {
  return (
    <Fragment>
      {/* Category Description */}
      <section className="py-8">
        <div
          className="text-base md:text-lg lg:text-xl font-normal leading-relaxed mb-4"
          style={{ fontFamily: FONTS.MONTSERRAT }}
        >
          <p className="text-base md:text-lg lg:text-xl font-semibold leading-relaxed mb-4">
            Full Project Overview: Helkenma ( 2 -Weeks )
          </p>
          <p>
            Helkenma Solar is a renewable energy brand dedicated to delivering
            high-quality, future-ready solar solutions for homes, businesses,
            and communities. The company focuses on solar panel installations,
            smart battery storage, and EV charging solutions that help customers
            reduce costs, achieve energy independence, and contribute to a
            sustainable future.
          </p>
          <p className="mt-4">
            <span className="font-semibold">My Role:</span> For this project, I
            worked on the visual design, color systems, typography, and layout
            structure to ensure the brand communicates trust, innovation, and
            sustainability. The result is a clean, modern, and impactful design
            that reflects Helkenma Solar's mission to power a brighter tomorrow.
          </p>
        </div>
      </section>

      <div className="mt-8 md:mt-12">
        <Carousel
          withIndicators
          slideGap="md"
          slideSize="100%"
          controlSize={40}
          styles={{
            indicator: {
              width: 10,
              height: 10,
              transition: 'width 150ms ease',
            },
          }}
          className="p-4 md:p-6"
        >
          {[1, 2, 3, 4, 5].map((index) => (
            <Carousel.Slide key={index}>
              <div className="overflow-hidden rounded-xl shadow-md bg-white flex items-center justify-center">
                <img
                  src={`/vectors/helkenma/section-${index}.svg`}
                  alt={`Helkenma slide ${index}`}
                  loading="lazy"
                  className="w-full h-auto object-contain bg-white"
                />
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </Fragment>
  )
}
