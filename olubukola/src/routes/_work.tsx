import { Outlet, createFileRoute } from '@tanstack/react-router'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/cta-section'
import { HeroSection } from '@/components/hero-section'

export const Route = createFileRoute('/_work')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-350 mx-auto px-4 sm:px-6 md:px-12">
        <HeroSection
          tagline="I turn your bold ideas into powerful digital experience"
          wavyUnderline
        />
        <Outlet />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
