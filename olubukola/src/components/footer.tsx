import { ArrowUp } from 'lucide-react'
import { FONTS, COLORS } from '../config/constants'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0769e0] py-6 md:py-8 relative mt-12 md:mt-16">
      <button
        onClick={scrollToTop}
        className="absolute right-4 md:right-8 -top-6 md:-top-8 bg-black p-3 md:p-4 rounded-full hover:bg-gray-800 transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} className="md:w-[30px] md:h-[30px] text-white" />
      </button>
      <p
        className="text-white text-sm md:text-base lg:text-lg xl:text-xl text-center px-4"
        style={{ fontFamily: FONTS.POPPINS }}
      >
        Olubukola Tobun © 2025 Design User Driven Optimization. All Rights
        Reserved.
      </p>
    </footer>
  )
}

