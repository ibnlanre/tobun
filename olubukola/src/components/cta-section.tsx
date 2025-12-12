import { FONTS, PROJECT_TYPES } from '../config/constants'

export default function CTASection() {
  return (
    <section className="py-8 md:py-12">
      <h2
        className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 md:mb-12 lg:mb-[70px]"
        style={{ fontFamily: FONTS.MONTSERRAT }}
      >
        Ready to work with me?
      </h2>

      <div className="flex flex-col items-center  justify-center lg:flex-row gap-8 md:gap-12 lg:gap-[120px] bg-[#F7F9FB] rounded-lg sm:p-24 p-6">
        {/* Project Types */}
        <div className="flex flex-col gap-6 md:gap-[29px] max-w-[500px]">
          <div className="flex flex-wrap gap-4 md:gap-[34px]">
            {PROJECT_TYPES.slice(0, 2).map((type) => (
              <ProjectType
                key={type.name}
                name={type.name}
                color={type.color}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-4 md:gap-[34px]">
            {PROJECT_TYPES.slice(2).map((type) => (
              <ProjectType
                key={type.name}
                name={type.name}
                color={type.color}
              />
            ))}
          </div>
        </div>

        {/* CTA Text and Button */}
        <div className="flex-1 flex flex-col gap-6 lg:justify-between">
          <div className="flex flex-col gap-4 md:gap-6">
            <h3
              className="text-2xl md:text-3xl lg:text-4xl font-semibold"
              style={{ fontFamily: FONTS.MONTSERRAT }}
            >
              Want to create something amazing?
            </h3>
            <p
              className="text-base md:text-lg lg:text-xl font-medium text-[#6b6969]"
              style={{ fontFamily: FONTS.MONTSERRAT }}
            >
              Your BOLD idea? My journey of bringing it into meaningful life in
              ways that will truly satisfy you. Through mind intuitive design,
              thoughtful details, and a creative approach, I transform concepts
              functioning into digital products
            </p>
          </div>
          <a
            href="mailto:contact@example.com"
            className="text-white bg-[#0769e0] px-5 md:px-6 py-2.5 md:py-5 text-base md:text-lg lg:text-xl font-semibold underline hover:bg-[#0558c0] transition-colors w-fit"
            style={{ fontFamily: FONTS.MONTSERRAT }}
          >
            Email Me Here
          </a>
        </div>
      </div>
    </section>
  )
}

interface ProjectTypeProps {
  name: string
  color: string
}

function ProjectType({ name, color }: ProjectTypeProps) {
  return (
    <div
      className={`flex-1 text-center px-12 py-16 rounded text-base md:text-lg lg:text-xl xl:text-2xl font-medium transition-colors ${color}`}
      style={{ fontFamily: FONTS.MONTSERRAT }}
    >
      {name}
    </div>
  )
}
