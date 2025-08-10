"use client"
import React, { useState } from 'react';
import { Smartphone, Tablet, Watch, ChevronDown } from 'lucide-react';
import Buttombar from './Buttombar';
import Header from './Header';
import CategorySelector from './Categorydevice';


const Herosection: React.FC = () => {
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
    <div className="min-h-[80vh] bg-gray-50">
  

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Brand Info */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              ICloud Wiress Mobile • San Francisco, Ca
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-2xl">
              SF'S FASTEST, MOST CONVENIENT PHONE REPAIR, REDEFINED BY OUR REVOLUTIONARY MOBILE 
              SERVICE. SERVING SAN FRANCISCO, SAN BRUNO, SAN MATEO, SAN JOSE
            </p>

            {/* Large Logo */}
            {/* <div className="flex justify-center lg:justify-start mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <Smartphone className="w-12 h-12 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-700 opacity-80"></div>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-gray-900">ITECHS</h3>
                  <p className="text-lg text-gray-600">On-Demand iPhone Repair</p>
                </div>
              </div>
            </div> */}
            <video autoPlay loop muted   preload="auto" id="myVideo">
<source src="https://www.iphonetechnicians.com/wp-content/uploads/2022/09/1-Main-Compressed.mp4" type="video/mp4"/>
</video>
          </div>

          {/* Right Side - Device Selection */}
         <CategorySelector data={devices} />
        </div>

      </main>

   
        

    
    </div>
  );
};

export default Herosection;