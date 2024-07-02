import React from 'react'
import HeroSection from '../Sections/Contact/HeroSection'
import CareerFormSection from '../Sections/Contact/CareerFormSection'
import ContactCard from '../components/common/ContactCard'
import { contactSec } from '../constants/contact'

function ContactScreen() {
  return (
    <div>
      <HeroSection />
      <CareerFormSection />
      <ContactCard contactSec={contactSec} />
    </div>
  )
}

export default ContactScreen
