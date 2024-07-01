import React from 'react'
import HeroSection from '../Sections/About/HeroSection'
import AboutUsSection from '../Sections/About/AboutUsSection'
import VisionSection from '../Sections/About/VisionSection'
import ConnectingSection from '../Sections/About/ConnectingSection'
import OurTeamSection from '../Sections/About/OurTeamSection'
import ContactCard from '../components/common/ContactCard'
import { contactSec } from '../constants/about'

function AboutScreen() {
  return (
    <>
    <HeroSection />
    <AboutUsSection />
    <VisionSection /> 
    <ConnectingSection />
    <OurTeamSection />
    <div className="">
        <ContactCard contactSec={contactSec} />
      </div>
      
    </>
  )
}

export default AboutScreen
