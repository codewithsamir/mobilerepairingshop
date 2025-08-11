
import React from 'react';

import CategorySelector from './Categorydevice';
import { devices } from '@/lib/data';


const Herosection: React.FC = () => {


  return (
    <div className="min-h-[80vh] bg-gray-50">
  

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Brand Info */}
          <div className="text-center lg:text-left">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
  iCloud Wireless Mobile
</h2>
<p className="text-sm text-gray-700 font-medium mb-4">
  9658 Plano Rd, Suite 100, Dallas, TX 75238
</p>
<p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-2xl">
  Dallas' fastest, most convenient phone repair service — redefined by our revolutionary mobile solution. Proudly serving Dallas, Plano, Richardson, and surrounding areas.
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