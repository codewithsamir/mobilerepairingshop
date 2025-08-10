"use client"
import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Plus, ArrowRight } from 'lucide-react';
import Buttombar from './Buttombar';

const ServiceOverview: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + (window.innerHeight / 2 ) + 50;
      
      stepRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY ;
          const elementBottom = elementTop + rect.height ;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveStep(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Set first step as active by default
    setActiveStep(0);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: "On-Demand Phone Repair",
      description: "At ITECHS Mobile, we bring the ultimate solution in On-Demand Phone Repair right to your doorstep. Anytime, Anyplace, Day or Night, Rain or Shine, our skilled technicians are here to ensure your device is back in working order in no time.",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Book Anytime, Anywhere",
      description: "Plus, with our online scheduling available 24/7, booking your appointment has never been easier. Experience the fastest and most convenient phone repair service, redefined by our game-changing delivery.",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />
    }
  ];

  const timelineSteps = [
    {
      title: "Instant Quote - Easy Booking",
      description: "Instant quotes, hassle-free online booking: Secure your spot for in seconds for fast, convenient phone repairs, available 24/7. Get started now!",
      icon: <Plus className="w-6 h-6 text-white" />
    },
    {
      title: "Arrival - Repair Begins", 
      description: "Effortless service at your doorstep: Our expert technician arrives, gets to work quickly, and offers a choice to stay informed or continue your day uninterrupted.",
      icon: <Plus className="w-6 h-6 text-white" />
    },
    {
      title: "Payment - Departure",
      description: "With ITECHS®, there is no upfront payment required. Pay only after the repair is complete. Our technician departs, leaving you with a fully repaired cell phone.",
      icon: <Plus className="w-6 h-6 text-white" />
    }
  ];

  return (
    <div className=" bg-gray-50">
    <Buttombar />

      <div className="max-w-7xl mx-auto px-6 py-16 ">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Service Description */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium text-gray-600 tracking-wider uppercase mb-4">
                TECH REPAIR DELIVERED
              </p>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-8">
                Mobile Phone Repair,<br />
                Anytime, Anywhere
              </h1>
            </div>

            {/* Features */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                      {index === 1 && (
                        <span className="text-blue-600 underline ml-1">
                          booking your appointment
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="group flex items-center text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200">
                <span className="underline">Kickstart Your Repair!</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Right Side - Timeline */}
          <div className="relative">
            <div className="space-y-12">
              {timelineSteps.map((step, index) => (
                <div 
                  key={index} 
                  ref={(el) => stepRefs.current[index] = el}
                  className="flex items-start space-x-6"
                >
                  {/* Timeline Icon */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                      activeStep === index 
                        ? 'bg-blue-600 scale-110 shadow-lg shadow-blue-600/30' 
                        : 'bg-gray-400 scale-100'
                    }`}>
                      {step.icon}
                    </div>
                    {index < timelineSteps.length - 1 && (
                      <div className={`absolute top-12 left-1/2 w-0.5 h-16 transform -translate-x-1/2 transition-colors duration-500 ${
                        activeStep > index ? 'bg-blue-600' : 'bg-gray-300'
                      }`}></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pb-8 transition-all duration-500 ${
                    activeStep === index ? 'transform translate-x-2' : ''
                  }`}>
                    <h3 className={`text-xl font-semibold mb-3 transition-colors duration-500 ${
                      activeStep === index ? 'text-blue-600' : 'text-gray-900'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`leading-relaxed transition-colors duration-500 ${
                      activeStep === index ? 'text-gray-800' : 'text-gray-600'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ServiceOverview;