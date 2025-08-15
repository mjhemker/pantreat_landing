import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import InteractiveWidgets from '@/components/InteractiveWidgets'
import DeepDiveSections from '@/components/DeepDiveSections'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Features />
      <InteractiveWidgets />
      <DeepDiveSections />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
