import { createFileRoute } from '@tanstack/react-router'
import {Header} from '../components/header'
import {Footer} from '../components/footer'
import {CTASection} from '../components/cta-section'
import {
  FONTS,
  MAX_WIDTH_CONTENT,
  SKILLS,
  SOCIAL_LINKS,
} from '../config/constants'

export const Route = createFileRoute('/profile')({ component: Profile })

function Profile() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="withBack" />

      <main
        className={`max-w-[${MAX_WIDTH_CONTENT}] mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-12`}
      >
        {/* Profile Introduction Section */}
        <section className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-[138px] mb-12 md:mb-20">
          {/* Profile Image */}
          <div
            className="relative w-full lg:w-fit mx-auto lg:mx-0 shrink-0"
            style={{ paddingRight: '16px', paddingTop: '12px' }}
          >
            {/* White frame (closely following image) */}
            <div
              className="absolute rounded-[22px] border-2 border-gray-200 bg-white"
              style={{
                aspectRatio: '454/470',
                width: '100%',
                maxWidth: '454px',
                top: '-10px',
                right: '-10px',
                zIndex: 1,
              }}
            />

            {/* Main image container */}
            <div
              className="relative rounded-[22px] overflow-hidden w-full max-w-[454px] mx-auto lg:mx-0 lg:w-[454px]"
              style={{ aspectRatio: '454/470', zIndex: 3 }}
            >
              <img
                src="/images/profile-image.png"
                alt="Olubukola Tobun - Product Designer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/10 backdrop-blur-sm px-6 md:px-8 py-3 md:py-4 rounded-b-[22px]">
                <span
                  className="text-white text-[20px] md:text-[28px] lg:text-[32px] font-semibold leading-tight block text-center"
                  style={{ fontFamily: FONTS.INTER }}
                >
                  She/Her
                </span>
              </div>
            </div>
          </div>

          {/* Introduction Text */}
          <div className="flex-1 flex flex-col gap-4 md:gap-5 lg:gap-6">
            <h2
              className="text-[28px] md:text-[32px] lg:text-[36px] font-semibold uppercase leading-tight"
              style={{ fontFamily: FONTS.MONTSERRAT }}
            >
              INTRODUCTION
            </h2>
            <p
              className="text-[18px] md:text-[21px] lg:text-[24px] font-medium text-[#6b6969] leading-relaxed"
              style={{ fontFamily: FONTS.MONTSERRAT }}
            >
              Tobun Bukola is a passionate Product Designer who thrives on
              solving complex problems and crafting seamless user experiences.
              With a focus on prioritizing user needs, I specialize in designing
              intuitive digital products that drive impact. Currently, I'm
              exploring the intersection of AI and Human-Computer Interaction,
              blending creativity with technology to create innovative solutions
              that enhance user satisfaction. Aside work, I love to paint, swim,
              travel, read, create Content design, exercise and advocate for
              mental health.
            </p>
          </div>
        </section>

        {/* Software Tools Section */}
        <section className="mb-12 md:mb-16 lg:mb-[73px]">
          <h2
            className="text-xl md:text-2xl lg:text-3xl font-semibold uppercase mb-4 md:mb-5"
            style={{ fontFamily: FONTS.MONTSERRAT }}
          >
            SOFTWARE TOOLS
          </h2>
          <img
            src="/vectors/software-tools.svg"
            alt="Software Tools - Figma, Sketch, Slack, Adobe XD, Adobe Photoshop, Framer, Notion, Pinterest, Microsoft Word"
            className="h-6 md:h-8 w-auto"
          />
        </section>

        {/* Connect With Me Section */}
        <section className="mb-12 md:mb-16 lg:mb-[73px]">
          <h2
            className="text-xl md:text-2xl lg:text-3xl font-semibold uppercase mb-4 md:mb-5"
            style={{ fontFamily: FONTS.MONTSERRAT }}
          >
            Connect with me
          </h2>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`${link.color} text-white px-4 md:px-6 py-2 md:py-3 rounded font-semibold text-base md:text-lg lg:text-xl underline hover:opacity-90 transition-opacity`}
                style={{ fontFamily: FONTS.INTER }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="mb-12 md:mb-16 lg:mb-[73px]">
          <h2
            className="text-xl md:text-2xl lg:text-3xl font-semibold uppercase mb-4 md:mb-5"
            style={{ fontFamily: FONTS.MONTSERRAT }}
          >
            Technical Skills
          </h2>
          <div className="flex flex-col gap-4 md:gap-5">
            {SKILLS.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-wrap gap-3 md:gap-3.5"
              >
                {row.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 md:px-4 py-1.5 md:py-2 border border-gray-300 rounded text-sm md:text-base lg:text-lg xl:text-xl font-medium capitalize hover:border-gray-400 transition-colors"
                    style={{ fontFamily: FONTS.MONTSERRAT }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  )
}
