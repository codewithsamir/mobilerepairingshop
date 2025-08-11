import Image from 'next/image'
import React from 'react'
import ConvenienceSection from './ConvenienceSection'
import FAQSection from './FAQSection'
import ServiceSection from './ServiceSection'
import LastFooter from './LastFooter'
import { imageData } from '@/lib/imagedata'


const Footer = () => {
  return (
   <footer className=' w-full h-full'>
    <Image className='w-full h-full' src={imageData.neighborhoodScape} alt='footer' width={1000} height={200}/>
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