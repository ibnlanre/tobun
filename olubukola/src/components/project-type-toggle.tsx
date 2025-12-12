'use client'

import { Link } from '@tanstack/react-router'
import { PROJECT_TYPES } from '../config/routes'
import { FONTS } from '../config/constants'

export function ProjectTypeToggle() {
  return (
    <div className="flex items-center justify-center gap-4 md:gap-7 bg-[#f5faff] rounded-[50px] px-4 md:px-6 py-2 md:py-4 w-fit mx-auto">
      <Link
        to="/"
        search={{ type: PROJECT_TYPES.MOBILE_APPS }}
        activeProps={{
          className: 'text-[#0769e0] bg-white shadow-sm',
        }}
        activeOptions={{
          includeSearch: true,
        }}
        inactiveProps={{
          className: 'text-[#6d7784]',
        }}
        className="text-base md:text-lg lg:text-xl font-semibold transition-colors px-3 md:px-4 py-1 md:py-2 rounded-full cursor-pointer"
        style={{ fontFamily: FONTS.MONTSERRAT }}
      >
        Mobile Apps
      </Link>

      <Link
        to="/"
        search={{ type: PROJECT_TYPES.WEBSITES }}
        activeProps={{
          className: 'text-[#0769e0] bg-white shadow-sm',
        }}
        activeOptions={{
          includeSearch: true,
        }}
        inactiveProps={{
          className: 'text-[#6d7784]',
        }}
        className="text-base md:text-lg lg:text-xl font-semibold transition-colors px-3 md:px-4 py-1 md:py-2 rounded-full cursor-pointer"
        style={{ fontFamily: FONTS.MONTSERRAT }}
      >
        Websites
      </Link>
    </div>
  )
}
