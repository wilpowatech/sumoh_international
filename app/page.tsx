import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { Services } from '@/components/services'
import { HomeCollection } from '@/components/home-collection'
import { WhyUs } from '@/components/why-us'
import { Locations } from '@/components/locations'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItWorks />
      <Services />
      <HomeCollection />
      <WhyUs />
      <Locations />
      <Contact />
      <Footer />
    </div>
  )
}
