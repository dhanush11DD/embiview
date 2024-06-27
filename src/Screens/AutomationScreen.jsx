import React from 'react'
import HeroSection from '../Sections/Automation/HeroSection'
import VisionSection from '../Sections/Automation/VisionSection'
import LifeStyleSection from '../Sections/Automation/LifeStyleSection'
import TechnologySection from '../Sections/Automation/TechnologySection'
import KeyBenefits from '../Sections/Automation/KeyBenefits'
import HomeExp from '../Sections/Automation/HomeExp'
import ContactCard from '../components/common/ContactCard'
import { contactSec } from '../constants/automation.jsx'

function AutomationScreen() {
  return (
    <>
      <HeroSection />
      <VisionSection />
      <LifeStyleSection />
      <TechnologySection />
      <KeyBenefits />
      <HomeExp />
      <ContactCard contactSec={contactSec} />
    </>
  )
}

export default AutomationScreen
