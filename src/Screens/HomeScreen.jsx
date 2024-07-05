import React from 'react'
import HomeHeroSection from '../Sections/Home/HomeHeroSection'
import OsCreatingSection from '../Sections/Home/OsCreatingSection'
import ContactCard from '../components/common/ContactCard'
import { contactSec } from '../constants/home.jsx'
import SupportSection from './../Sections/Home/SupportSection';
import WhatSetSection from '../Sections/Home/WhatSetSection'
import KeyBenefits from '../Sections/Home/KeyBenefits'
import SpecializeSection from '../Sections/Home/SpecializeSection'
import SmartLivingSection from '../Sections/Home/SmartLivingSection'

function HomeScreen() {
  return ( 
    <div>
      <HomeHeroSection />
      <OsCreatingSection />
      <SupportSection />
      <WhatSetSection />
      <KeyBenefits />
      <SpecializeSection />
      <SmartLivingSection />
      <ContactCard contactSec={contactSec} />
    </div>
  )
}

export default HomeScreen