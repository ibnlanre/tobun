import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, ArrowUp } from 'lucide-react'

export const Route = createFileRoute('/laurienla-app')({
  component: LaurienlaApp,
})

function LaurienlaApp() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const projectTypes = [
    { name: 'App', highlighted: false },
    { name: 'Website', highlighted: true },
    { name: 'Graphics', highlighted: false },
    { name: 'Redesign', highlighted: false },
  ]

  const typographySizes = [
    { label: 'Typography', size: '36', fontClass: 'text-[36px] font-bold' },
    { label: 'Typography', size: '36', fontClass: 'text-[32px] font-semibold' },
    { label: 'Typography', size: '36', fontClass: 'text-2xl font-medium' },
    { label: 'Typography', size: '36', fontClass: 'text-xl font-medium' },
    { label: 'Typography', size: '36', fontClass: 'text-base font-normal' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-[#eeeeee] shadow-[0px_1px_4px_rgba(71,71,71,0.20)] px-6 md:px-12 py-4 flex items-center justify-between">
        <h1
          className="text-xl font-medium"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Olubukola Tobun Portfolio
        </h1>
        <div className="flex items-center gap-2 bg-[#ecf4ff] rounded-[25px] px-4 py-2">
          <img
            src="/profile-image.png"
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover"
          />
          <span
            className="text-base font-medium"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            My Profile
          </span>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <section className="py-16 text-center">
          <div className="max-w-4xl mx-auto flex flex-col gap-14">
            <div className="flex flex-col gap-5">
              <p
                className="text-2xl font-medium text-[#807784]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Welcome Client,
              </p>
              <div className="flex flex-col gap-5">
                <h1
                  className="text-[32px] font-bold"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Build a beautiful Website/ Apps with me in weeks
                </h1>
                <div className="flex items-center justify-center gap-[18px]">
                  <span
                    className="text-[32px] font-bold"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Enjoy
                  </span>
                  <span
                    className="text-[32px] font-normal text-[#0769e0] underline"
                    style={{ fontFamily: 'Mooli, sans-serif' }}
                  >
                    Free
                  </span>
                  <span
                    className="text-[32px] font-bold"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Animations
                  </span>
                </div>
              </div>
              <p
                className="text-xl font-medium text-[#807784]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                I turn simple ideas into powerful digital experience
              </p>
            </div>

            {/* Toggle Buttons */}
            <div className="flex items-center justify-center gap-7 bg-[#f5faff] rounded-[50px] px-8 py-4 w-fit mx-auto">
              <button
                className="text-2xl font-semibold text-[#0769e0]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Mobile Apps
              </button>
              <button
                className="text-2xl font-semibold text-[#6d7784]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Websites
              </button>
            </div>
          </div>

          {/* Back Button */}
          <Link
            to="/"
            className="fixed top-24 right-6 md:right-12 flex items-center gap-4 bg-[#0769e0] text-white px-6 py-3 rounded hover:bg-[#0558c0] transition-colors z-10"
          >
            <ArrowLeft size={20} />
            <span
              className="text-[32px] font-extrabold"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Back
            </span>
          </Link>
        </section>

        {/* Category Description */}
        <section className="py-12">
          <p
            className="text-2xl font-normal leading-relaxed mb-12"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
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
              src="/laurienla-screens-1.svg"
              alt="Laurienla App Screens"
              className="w-full"
            />
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-12">
          <h2
            className="text-2xl font-normal mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Problem
          </h2>
          <p
            className="text-2xl font-normal leading-relaxed"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
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
              src="/laurienla-screens-2.svg"
              alt="Laurienla App Screens"
              className="w-full"
            />
          </div>
        </section>

        {/* Research & Insights Section */}
        <section className="py-12">
          <h2
            className="text-[32px] font-semibold mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Research & Insights
          </h2>
          <p
            className="text-[32px] font-semibold leading-relaxed"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
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
        <section className="py-12">
          <h2
            className="text-[32px] font-semibold mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Design Process
          </h2>
          <p
            className="text-[32px] font-semibold leading-relaxed mb-12"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
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
              src="/laurienla-color-gradient.png"
              alt="Color Gradient"
              className="w-full max-w-md"
            />
          </div>

          {/* Typography Samples */}
          <div className="mb-12">
            <img
              src="/laurienla-typography-samples.png"
              alt="Typography Samples"
              className="w-full max-w-4xl"
            />
          </div>
        </section>

        {/* Typography Section */}
        <section className="py-12">
          <div className="flex flex-col gap-[26px] mb-12">
            <h2
              className="text-[36px] font-bold"
              style={{ fontFamily: 'Platypi' }}
            >
              Platypi
            </h2>
            <div className="flex gap-[33px]">
              <div className="flex flex-col gap-6">
                {typographySizes.map((item, index) => (
                  <span
                    key={index}
                    className={item.fontClass}
                    style={{ fontFamily: 'Platypi' }}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-6">
                {typographySizes.map((item, index) => (
                  <span
                    key={index}
                    className={`${
                      index === 0
                        ? 'text-[36px] font-bold'
                        : index === 1
                          ? 'text-[32px] font-bold'
                          : index === 2
                            ? 'text-2xl font-bold'
                            : index === 3
                              ? 'text-xl font-bold'
                              : 'text-base font-bold'
                    }`}
                    style={{ fontFamily: 'Platypi' }}
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
              src="/laurienla-screens-3.svg"
              alt="Laurienla App Screens"
              className="w-full"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <h2
            className="text-[32px] font-bold mb-[70px]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Ready to work with me?
          </h2>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-[120px]">
            {/* Project Types */}
            <div className="flex flex-col gap-[29px]">
              <div className="flex flex-wrap gap-[34px]">
                {projectTypes.slice(0, 2).map((type) => (
                  <div
                    key={type.name}
                    className={`px-10 py-5 rounded text-[32px] font-medium ${
                      type.highlighted
                        ? 'bg-[#fff2e5]'
                        : 'bg-gray-100 hover:bg-gray-200'
                    } transition-colors`}
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {type.name}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-[34px]">
                {projectTypes.slice(2).map((type) => (
                  <div
                    key={type.name}
                    className="px-10 py-5 bg-gray-100 rounded text-[32px] font-medium hover:bg-gray-200 transition-colors"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {type.name}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Text and Button */}
            <div className="flex-1 flex flex-col gap-[34px]">
              <div className="flex flex-col gap-5">
                <h3
                  className="text-[36px] font-semibold"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Want to create something amazing?
                </h3>
                <p
                  className="text-2xl font-medium text-[#6b6969]"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Your BOLD idea? My journey of bringing it into meaningful life
                  in ways that will truly satisfy you. Through mind intuitive
                  design, thoughtful details, and a creative approach, I
                  transform concepts functioning into digital products
                </p>
              </div>
              <a
                href="mailto:contact@example.com"
                className="text-white bg-[#0769e0] px-6 py-3 rounded text-xl font-semibold underline hover:bg-[#0558c0] transition-colors w-fit"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Email Me Here
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0769e0] py-8 relative mt-16">
        <button
          onClick={scrollToTop}
          className="absolute right-8 -top-8 bg-black p-4 rounded-full hover:bg-gray-800 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={30} className="text-white" />
        </button>
        <p
          className="text-white text-xl text-center"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Olubukola Tobun © 2025 Design User Driven Optimization. All Rights
          Reserved.
        </p>
      </footer>
    </div>
  )
}