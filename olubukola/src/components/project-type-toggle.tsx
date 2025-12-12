'use client'

import { Link, useMatchRoute, useNavigate } from '@tanstack/react-router'
import { FONTS } from '@/config/constants'

export function ProjectTypeToggle() {
  const navigate = useNavigate()
  const matchRoute = useMatchRoute()
  const matches = !!matchRoute({ to: '/' })

  const handleClick = (route: string) => {
    if (!matches) return
    navigate({ to: '/', hash: route })
  }

  return (
    <div className="flex items-center justify-center gap-4 md:gap-7 bg-[#f5faff] rounded-[50px] px-4 md:px-6 py-2 md:py-4 w-fit mx-auto">
      <Link
        disabled={matches}
        onClick={() => handleClick('mobile-apps')}
        to="/mobile-apps"
        activeProps={{
          className: 'text-[#0769e0] bg-white shadow-sm',
        }}
        activeOptions={{
          exact: false,
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
        disabled={matches}
        onClick={() => handleClick('websites')}
        to="/websites"
        activeProps={{
          className: 'text-[#0769e0] bg-white shadow-sm',
        }}
        activeOptions={{
          exact: false,
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
