import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, ArrowUp } from 'lucide-react'

export const Route = createFileRoute('/profile')({ component: Profile })

function Profile() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const skills = [
    ['UI Design', 'UX Design', 'wireframing', 'User Research', 'Team Player'],
    [
      'Information Architecture',
      'Prototyping',
      'Visual Design',
      'Problem Solving',
    ],
    [
      'Interaction Design',
      'Design System',
      'Accessibility Design',
      'Interaction Design',
    ],
    [
      'Communication',
      'Collaboration',
      'Logo Design',
      'Empathy',
      'Critical Thinking',
    ],
    [
      'Time Management',
      'Attention to Detail',
      'Content Designer',
      'Adaptability',
    ],
    [
      'Strategic Thinking',
      'Usability Testing',
      'Market Awareness',
      'Punctual delivery',
    ],
  ]

  const socialLinks = [
    { name: 'Linkedin', color: 'bg-[#0077B5]', href: '#' },
    { name: 'Dribbble', color: 'bg-[#EA4C89]', href: '#' },
    { name: 'Behance', color: 'bg-[#1769FF]', href: '#' },
    { name: 'Instagram', color: 'bg-[#C13584]', href: '#' },
  ]

  const projectTypes = [
    { name: 'App', highlighted: false },
    { name: 'Website', highlighted: true },
    { name: 'Graphics', highlighted: false },
    { name: 'Redesign', highlighted: false },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-[#eeeeee] shadow-[0px_1px_4px_rgba(71,71,71,0.20)] px-6 md:px-12 py-4 flex items-center justify-between">
        <h1
          className="text-xl font-medium"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Olubukola Tobun Profile
        </h1>
        <Link
          to="/"
          className="flex items-center gap-4 bg-[#0769e0] text-white px-6 py-3 rounded hover:bg-[#0558c0] transition-colors"
        >
          <ArrowLeft size={20} />
          <span
            className="text-[32px] font-extrabold"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Back
          </span>
        </Link>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
        {/* Profile Introduction Section */}
        <section className="flex flex-col lg:flex-row gap-12 lg:gap-[138px] mb-20">
          {/* Profile Image */}
          <div className="relative w-fit">
            <div className="relative rounded-[22px] border-[0.9px] border-black shadow-[0px_3.59px_3.59px_rgba(0,0,0,0.25)] overflow-hidden">
              <img
                src="/profile-image.png"
                alt="Olubukola Tobun"
                className="w-full max-w-[454px] h-auto"
              />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm px-8 py-3 rounded-lg">
                <span
                  className="text-white text-[32px] font-semibold"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  She/Her
                </span>
              </div>
            </div>
          </div>

          {/* Introduction Text */}
          <div className="flex-1 flex flex-col gap-6">
            <h2
              className="text-[36px] font-semibold uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              INTRODUCTION
            </h2>
            <p
              className="text-[24px] font-medium text-[#6b6969] leading-relaxed"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
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
        <section className="mb-[73px]">
          <h2
            className="text-[32px] font-semibold uppercase mb-5"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            SOFTWARE TOOLS
          </h2>
          <img
            src="/software-tools.svg"
            alt="Software Tools"
            className="h-8"
          />
        </section>

        {/* Connect With Me Section */}
        <section className="mb-[73px]">
          <h2
            className="text-[32px] font-semibold uppercase mb-5"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Connect with me
          </h2>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`${link.color} text-white px-6 py-3 rounded font-semibold text-xl underline hover:opacity-90 transition-opacity`}
                style={{ fontFamily: 'Inter, sans-serif' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="mb-[73px]">
          <h2
            className="text-[32px] font-semibold uppercase mb-5"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Technical Skills
          </h2>
          <div className="flex flex-col gap-5">
            {skills.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-wrap gap-3.5">
                {row.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 border border-gray-300 rounded text-xl font-medium capitalize hover:border-gray-400 transition-colors"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <h2
            className="text-[25.38px] font-bold mb-[55px]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Ready to work with me?
          </h2>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-[95px]">
            {/* Project Types */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-[27px]">
                {projectTypes.slice(0, 2).map((type) => (
                  <div
                    key={type.name}
                    className={`px-8 py-4 rounded text-[25.38px] font-medium ${
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
              <div className="flex flex-wrap gap-[27px]">
                {projectTypes.slice(2).map((type) => (
                  <div
                    key={type.name}
                    className="px-8 py-4 bg-gray-100 rounded text-[25.38px] font-medium hover:bg-gray-200 transition-colors"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {type.name}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Text and Button */}
            <div className="flex-1 flex flex-col gap-[27px]">
              <div className="flex flex-col gap-4">
                <h3
                  className="text-[28.55px] font-semibold"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Want to create something amazing?
                </h3>
                <p
                  className="text-[19.04px] font-medium text-[#6b6969]"
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
                className="text-white bg-[#0769e0] px-6 py-3 rounded text-[15.86px] font-semibold underline hover:bg-[#0558c0] transition-colors w-fit"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Email Me Here
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0769e0] py-8 relative">
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