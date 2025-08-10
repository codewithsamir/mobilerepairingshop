import Image from 'next/image'
import React from 'react'
import ConvenienceSection from './ConvenienceSection'
import FAQSection from './FAQSection'
import ServiceSection from './ServiceSection'
import LastFooter from './LastFooter'

const Footer = () => {
  return (
   <footer className=' w-full h-full'>
    <Image className='w-full h-full' src="/assets/1-neighborhood-scape.png" alt='footer' width={1000} height={200}/>
    <div className="footercontent bg-[#051a4c] ">
<ConvenienceSection/>
<ServiceSection/>
<FAQSection/>
<LastFooter />
    </div>
   </footer>
  )
}

export default Footer