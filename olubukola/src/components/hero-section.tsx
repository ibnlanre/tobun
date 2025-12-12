import { Link, useRouter, useRouterState } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import { PROJECT_TYPES, ROUTES } from '../config/routes'
import { FONTS } from '../config/constants'

import ProjectTypeToggle from './project-type-toggle'

interface HeroSectionProps {
  showBackButton?: boolean
  backTo?: string
  onProjectTypeChange?: (type: string) => void
  selectedType?: string
  onTypeChange?: (type: string) => void
  tagline?: string
  wavyUnderline?: boolean
}

export default function HeroSection({
  showBackButton = false,
  backTo = ROUTES.HOME,
  onProjectTypeChange,
  selectedType: controlledSelectedType,
  onTypeChange: controlledOnTypeChange,
  tagline = 'I turn simple ideas into powerful digital experience',
  wavyUnderline = true,
}: HeroSectionProps) {
  const [internalSelectedType, setInternalSelectedType] = useState<string>(
    PROJECT_TYPES.MOBILE_APPS
  )
  const selectedType = controlledSelectedType ?? internalSelectedType
  const isControlled =
    controlledSelectedType !== undefined && controlledOnTypeChange !== undefined

  const router = useRouter()
  const isHomeRoute = useRouterState({
    select: (state) => state.location.pathname === ROUTES.HOME,
  })

  const handleTypeChange = (type: string) => {
    if (!isHomeRoute) {
      if (!isControlled) {
        setInternalSelectedType(type)
      }
      router.navigate({
        to: ROUTES.HOME,
        search: (prev) => ({ ...prev, type }),
      })
      return
    }

    if (isControlled) {
      controlledOnTypeChange(type)
    } else {
      setInternalSelectedType(type)
      onProjectTypeChange?.(type)
    }
  }

  return (
    <section className="py-8 md:py-16 text-center">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col gap-4 md:gap-5">
          <p
            className="text-base md:text-lg lg:text-xl font-medium text-[#807784]"
            style={{ fontFamily: FONTS.MONTSERRAT }}
          >
            Welcome Client,
          </p>
          <div className="flex flex-col gap-3">
            <h2
              className="text-xl md:text-2xl lg:text-3xl font-bold px-4"
              style={{ fontFamily: FONTS.MONTSERRAT }}
            >
              Build a beautiful Website/ Apps with me in weeks
            </h2>
            <div className="flex items-center justify-center gap-3 md:gap-[18px] flex-wrap px-4">
              <span
                className="text-xl md:text-2xl lg:text-3xl font-bold"
                style={{ fontFamily: FONTS.MONTSERRAT }}
              >
                Enjoy
              </span>
              <span
                className="text-xl md:text-2xl lg:text-3xl font-normal text-[#0769e0] relative"
                style={{
                  fontFamily: FONTS.MOOLI,
                  textDecoration: 'underline',
                  textDecorationStyle: wavyUnderline ? 'wavy' : 'solid',
                  textDecorationColor: '#0769e0',
                }}
              >
                Free
              </span>
              <span
                className="text-xl md:text-2xl lg:text-3xl font-bold"
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
            {tagline}
          </p>
        </div>

        {/* Toggle Buttons */}
        <ProjectTypeToggle
          selectedType={selectedType}
          onChange={handleTypeChange}
        />
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
