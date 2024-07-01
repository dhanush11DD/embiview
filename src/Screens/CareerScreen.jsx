import React from 'react'
import HeroSection from '../Sections/Career/HeroSection'
import JoinOursSection from '../Sections/Career/JoinOursSection'
import CareerFormSection from '../Sections/Career/CareerFormSection'
import ContactCard from '../components/common/ContactCard'
import { contactSec } from '../constants/career'

function CareerScreen() {
  return (
    <div>
      <HeroSection />
      <JoinOursSection />
      <CareerFormSection />
      <ContactCard contactSec={contactSec} />
    </div>
  )
}

export default CareerScreen
