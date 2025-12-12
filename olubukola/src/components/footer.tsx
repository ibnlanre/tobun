import { FONTS } from '@/config/constants'

export function Footer() {
  return (
    <footer className="bg-[#0769e0] py-6 md:py-8 mt-12 md:mt-16">
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
