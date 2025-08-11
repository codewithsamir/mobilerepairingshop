
import CategorySelector from '@/components/Homepage/Categorydevice'
import { devices } from '@/lib/data';

import React from 'react'

const page = () => {
   




  return (
<div className="w-[600px] m-auto p-10">
        <CategorySelector data={devices}/>
</div>
  )
}

export default page