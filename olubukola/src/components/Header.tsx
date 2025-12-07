import { FONTS } from '@/config/constants'
import { ROUTES } from '@/config/routes'
import { Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

interface HeaderProps {
  variant?: 'default' | 'withBack'
}

export default function Header({ variant = 'default' }: HeaderProps) {
  return (
    <header className="border-b border-[#eeeeee] shadow-[0px_1px_4px_rgba(71,71,71,0.20)] px-6 md:px-12 py-4 flex items-center justify-between">
      <h1
        className="text-xl font-medium"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        Olubukola Tobun Portfolio
      </h1>

      {variant === 'withBack' ? (
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 md:gap-4 bg-[#0769e0] text-white px-4 md:px-6 py-2 md:py-3 rounded hover:bg-[#0558c0] transition-colors z-10"
          type="button"
        >
          <ArrowLeft size={18} className="md:w-5 md:h-5" />
          <span
            className="text-base md:text-lg lg:text-xl font-extrabold"
            style={{ fontFamily: FONTS.POPPINS }}
          >
            Back
          </span>
        </button>
      ) : (
        <Link
          to={ROUTES.PROFILE}
          className="flex items-center gap-2 bg-[#ecf4ff] rounded-[25px] px-4 py-2 hover:bg-[#d6e7ff] transition-colors cursor-pointer"
        >
          <img
            src="/images/profile-image.png"
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover"
          />
          <span
            className="text-base font-medium"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            My Profile
          </span>
        </Link>
      )}
    </header>
  )
}
