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
    {/* Top Bar */}
      <div className="bg-blue-900 text-white px-6 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <span>Mon – Sun | 8:00 AM – 08:00 PM</span>
          <span>Book by Phone: 415-483-9625</span>
        </div>
      </div>

      <Header />
    <Herosection/>
    <ServiceOverview/>
    <StepByStepGuide />
    <ContactInfoCards />
    <Footer />
</>
  )
}

export default page