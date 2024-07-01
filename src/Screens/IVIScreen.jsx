import React from 'react'
import HeroSection from '../Sections/IVI/HeroSection'
import ContactCard from '../components/common/ContactCard'
import { contactSec } from '../constants/ivi'
import VisionSection from '../Sections/IVI/VisionSection'
import DigitalSection from '../Sections/IVI/DigitalScrollSection'
import TechnologySection from '../Sections/IVI/TechnologySection'
import IntegrationSection from '../Sections/IVI/IntegrationSection'

function IVIScreen() {
  return (
    <>
      <HeroSection />
      <VisionSection />
      <DigitalSection />
      <TechnologySection />
      <IntegrationSection />
      <div className="">
        <ContactCard contactSec={contactSec} />
      </div>
    </>
  )
}

export default IVIScreen
