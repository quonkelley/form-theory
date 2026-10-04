import { Hero } from '@/components/home/hero'
import { CapabilityStrip } from '@/components/home/capability-strip'
import { Services } from '@/components/home/services'
import { SelectedWork } from '@/components/home/selected-work'
import { About } from '@/components/home/about'
import { Process } from '@/components/home/process'
import { ContactSection } from '@/components/home/contact-section'

export default function HomePage() {
  return (
    <>
      <Hero />
      <CapabilityStrip />
      <Services />
      <SelectedWork />
      <About />
      <Process />
      <ContactSection />
    </>
  )
}
