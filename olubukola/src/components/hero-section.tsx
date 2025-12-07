import { Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import { ROUTES } from '../config/routes'
import { PROJECT_TYPES } from '../config/routes'
import {  FONTS } from '../config/constants'

interface HeroSectionProps {
  showBackButton?: boolean
  backTo?: string
  onProjectTypeChange?: (type: string) => void
}

export default function HeroSection({
  showBackButton = false,
  backTo = ROUTES.HOME,
  onProjectTypeChange,
}: HeroSectionProps) {
  const [selectedType, setSelectedType] = useState<string>(PROJECT_TYPES.MOBILE_APPS)

  const handleTypeChange = (type: string) => {
    setSelectedType(type)
    onProjectTypeChange?.(type)
  }

  return (
    <section className="py-8 md:py-16 text-center">
      <div className="max-w-4xl mx-auto flex flex-col gap-8 md:gap-14">
        <div className="flex flex-col gap-4 md:gap-5">
          <p
            className="text-base md:text-lg lg:text-xl font-medium text-[#807784]"
            style={{ fontFamily: FONTS.MONTSERRAT }}
          >
            Welcome Client,
          </p>
          <div className="flex flex-col gap-4 md:gap-5">
            <h1
              className="text-xl md:text-2xl lg:text-3xl font-bold px-4"
              style={{ fontFamily: FONTS.MONTSERRAT }}
            >
              Build a beautiful Website/ Apps with me in weeks
            </h1>
            <div className="flex items-center justify-center gap-3 md:gap-[18px] flex-wrap px-4">
              <span
                className="text-lg md:text-xl lg:text-2xl font-bold"
                style={{ fontFamily: FONTS.MONTSERRAT }}
              >
                Enjoy
              </span>
              <span
                className="text-lg md:text-xl lg:text-2xl font-normal text-[#0769e0] underline"
                style={{ fontFamily: FONTS.MOOLI }}
              >
                Free
              </span>
              <span
                className="text-lg md:text-xl lg:text-2xl font-bold"
                style={{ fontFamily: FONTS.MONTSERRAT }}
              >
                Animations
              </span>
            </div>
          </div>
          <p
            className="text-base md:text-lg font-medium text-[#807784] px-4"
            style={{ fontFamily: FONTS.MONTSERRAT }}
          >
            I turn simple ideas into powerful digital experience
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex items-center justify-center gap-4 md:gap-7 bg-[#f5faff] rounded-[50px] px-4 md:px-8 py-2 md:py-4 w-fit mx-auto">
          <button
            onClick={() => handleTypeChange(PROJECT_TYPES.MOBILE_APPS)}
            className={`text-base md:text-lg lg:text-xl font-semibold transition-colors px-3 md:px-4 py-1 md:py-2 rounded-full ${
              selectedType === PROJECT_TYPES.MOBILE_APPS
                ? 'text-[#0769e0] bg-white shadow-sm'
                : 'text-[#6d7784]'
            }`}
            style={{ fontFamily: FONTS.MONTSERRAT }}
          >
            Mobile Apps
          </button>
          <button
            onClick={() => handleTypeChange(PROJECT_TYPES.WEBSITES)}
            className={`text-base md:text-lg lg:text-xl font-semibold transition-colors px-3 md:px-4 py-1 md:py-2 rounded-full ${
              selectedType === PROJECT_TYPES.WEBSITES
                ? 'text-[#0769e0] bg-white shadow-sm'
                : 'text-[#6d7784]'
            }`}
            style={{ fontFamily: FONTS.MONTSERRAT }}
          >
            Websites
          </button>
        </div>
      </div>

      {/* Back Button */}
      {showBackButton && (
        <Link
          to={backTo}
          className="fixed top-20 md:top-32 right-4 md:right-6 lg:right-12 flex items-center gap-2 md:gap-4 bg-[#0769e0] text-white px-4 md:px-6 py-2 md:py-3 rounded hover:bg-[#0558c0] transition-colors z-10"
        >
          <ArrowLeft size={18} className="md:w-5 md:h-5" />
          <span
            className="text-base md:text-lg lg:text-xl font-extrabold"
            style={{ fontFamily: FONTS.POPPINS }}
          >
            Back
          </span>
        </Link>
      )}
    </section>
  )
}

