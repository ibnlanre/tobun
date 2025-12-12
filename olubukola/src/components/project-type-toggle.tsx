import { PROJECT_TYPES } from '../config/routes'
import { FONTS } from '../config/constants'

import type { ProjectType } from '../config/routes'

interface ProjectTypeToggleProps {
  selectedType: ProjectType
  onChange: (type: ProjectType) => void
}

export function ProjectTypeToggle({
  selectedType,
  onChange,
}: ProjectTypeToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4 md:gap-7 bg-[#f5faff] rounded-[50px] px-4 md:px-6 py-2 md:py-4 w-fit mx-auto">
      <button
        onClick={() => onChange(PROJECT_TYPES.MOBILE_APPS)}
        className={`text-base md:text-lg lg:text-xl font-semibold transition-colors px-3 md:px-4 py-1 md:py-2 rounded-full cursor-pointer ${
          selectedType === PROJECT_TYPES.MOBILE_APPS
            ? 'text-[#0769e0] bg-white shadow-sm'
            : 'text-[#6d7784] hover:text-[#0769e0]'
        }`}
        style={{ fontFamily: FONTS.MONTSERRAT }}
      >
        Mobile Apps
      </button>
      <button
        onClick={() => onChange(PROJECT_TYPES.WEBSITES)}
        className={`text-base md:text-lg lg:text-xl font-semibold transition-colors px-3 md:px-4 py-1 md:py-2 rounded-full cursor-pointer ${
          selectedType === PROJECT_TYPES.WEBSITES
            ? 'text-[#0769e0] bg-white shadow-sm'
            : 'text-[#6d7784]'
        }`}
        style={{ fontFamily: FONTS.MONTSERRAT }}
      >
        Websites
      </button>
    </div>
  )
}
