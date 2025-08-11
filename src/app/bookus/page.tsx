"use client"
import CategorySelector from '@/components/Homepage/Categorydevice'
import { Smartphone, Tablet, Watch } from 'lucide-react';
import React, { useState } from 'react'

const page = () => {
     const [selectedDevice, setSelectedDevice] = useState('');





   const devices: CategoryItem[] = [
  {
    id: "iphone",
    name: "Apple iPhone",
    icon: <Smartphone className="w-6 h-6 text-gray-600" />,
    subcategories: [
      {
        id: "iphone8-series",
        name: "iPhone 8 Series",
        subcategories: [
          { id: "iphone8", name: "iPhone 8" },
          { id: "iphone8plus", name: "iPhone 8 Plus" },
        ],
      },
      {
        id: "iphone9-series",
        name: "iPhone 9 Series",
        subcategories: [
          { id: "iphone9", name: "iPhone 9" },
          { id: "iphone9plus", name: "iPhone 9 Plus" },
        ],
      },
    ],
  },
  {
    id: "ipad",
    name: "Apple iPad",
    icon: <Tablet className="w-6 h-6 text-gray-600" />,
    subcategories: [
      { id: "ipad-air", name: "iPad Air" },
      { id: "ipad-pro", name: "iPad Pro" },
    ],
  },
  {
    id: "watch",
    name: "Apple Watch",
    icon: <Watch className="w-6 h-6 text-gray-600" />,
    subcategories: [
      { id: "series6", name: "Series 6" },
      { id: "series7", name: "Series 7" },
    ],
  },
];
  return (
<div className="w-[600px] m-auto p-10">
        <CategorySelector data={devices}/>
</div>
  )
}

export default page