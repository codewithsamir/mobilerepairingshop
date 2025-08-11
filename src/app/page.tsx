import ContactInfoCards from '@/components/Homepage/ContactInfoCards'
import Footer from '@/components/Homepage/Footer'
import Header from '@/components/Homepage/Header'
import Herosection from '@/components/Homepage/Herosection'
import ServiceOverview from '@/components/Homepage/ServiceOverview'
import StepByStepGuide from '@/components/Homepage/StepByStepGuide'
import React from 'react'

const page = () => {
  return (
<>

    <Herosection/>
    <ServiceOverview/>
    <StepByStepGuide />
    <ContactInfoCards />
    
</>
  )
}

export default page