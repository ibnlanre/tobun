import { Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { TypingText } from './typing-text'
import { ROUTES } from '@/config/routes'
import { FONTS } from '@/config/constants'

interface HeaderProps {
  variant?: 'default' | 'withBack'
}

export default function Header({ variant = 'default' }: HeaderProps) {
  const parts = ['Olubukola', ' Tobun', ' Portfolio']

  return (
    <header className="border-b border-[#eeeeee] shadow-[0px_1px_4px_rgba(71,71,71,0.20)] px-6 md:px-12 py-4 flex items-center justify-between">
      <h1
        className=" text-lg sm:text-xl font-medium"
        style={{ fontFamily: FONTS.MONTSERRAT }}
      >
        <TypingText parts={parts} />
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
          className="flex items-center gap-2 bg-[#ecf4ff] rounded-[25px] p-2 sm:px-4 sm:py-2 hover:bg-[#d6e7ff] transition-colors cursor-pointer"
        >
          <img
            src="/images/profile-image.png"
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover"
          />
          <span
            className="text-base font-medium hidden sm:block"
            style={{ fontFamily: FONTS.MONTSERRAT }}
          >
            My Profile
          </span>
        </Link>
      )}
    </header>
  )
}
