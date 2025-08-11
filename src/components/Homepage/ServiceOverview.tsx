"use client";
import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Plus, ArrowRight, Clock } from 'lucide-react';
import Buttombar from './Buttombar';

const ServiceOverview: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2 + 50;

      stepRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveStep(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    setActiveStep(0);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: "Same-Day Mobile Repair",
      description:
        "iCloud Wireless brings fast, reliable phone and tablet repair directly to your doorstep. Whether you’re in Dallas, Plano, or surrounding areas, our certified technicians deliver high-quality service—rain or shine—with genuine spare parts and a 30-day warranty.",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Free Parking & On-Site Service",
      description:
        "Prefer to visit us? Enjoy free parking right outside our Dallas location while you experience a friendly, quick, and professional repair process.",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    },
  ];

  const timelineSteps = [
    {
      title: "Free Diagnostic Fee Applied to Repair",
      description:
        "Get a fast, no-hassle diagnosis of your device. If you choose to proceed with the repair, the diagnostic fee is applied to the total cost—so you only pay once.",
      icon: <Clock className="w-6 h-6 text-white" />,
    },
    {
      title: "Certified Tech Repairs on Spot",
      description:
        "Once booked, our certified technician arrives promptly, starts the repair work on-site using genuine parts, and keeps you updated throughout.",
      icon: <Plus className="w-6 h-6 text-white" />,
    },
    {
      title: "Quality Assurance & Departure",
      description:
        "Enjoy peace of mind with a 30-day warranty on parts and labor. Pay only after the repair is complete, then your device and technician are on their way—quick, convenient, and worry-free.",
      icon: <Plus className="w-6 h-6 text-white" />,
    },
  ];

  // Faults We Repair Data
  const faultsWeRepair = [
    {
      title: "LCD Repair / Replacement",
      description: "Broken LCD, lines on screen, blank display, backlight issues",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Battery Replacement",
      description: "Swollen battery, fast drain, not charging, overheating",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Charging Port Repair",
      description: "Loose connection, not charging, debris damage",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Camera Repair",
      description: "Blurry image, black screen, front/rear camera not working",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Water Damage Repair",
      description: "Liquid contact, corrosion, power failure, silent device",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Speaker & Microphone",
      description: "No sound, low volume, mic not working, echo issues",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Button Repair",
      description: "Power, volume, home, mute button stuck or not responding",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Software Issues",
      description: "Stuck on boot, iOS/Android update, virus, unlocking",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    },
  ];

  return (
    <div className="bg-gray-50">
      <Buttombar />

      {/* Main Service Section (Original Design) */}
      <div className="max-w-7xl mx-auto px-6 py-16">
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
                  <div className="flex-shrink-0 mt-1">{feature.icon}</div>
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
                  ref={(el) => (stepRefs.current[index] = el)}
                  className="flex items-start space-x-6"
                >
                  {/* Timeline Icon */}
                  <div className="relative flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                        activeStep === index
                          ? 'bg-blue-600 scale-110 shadow-lg shadow-blue-600/30'
                          : 'bg-gray-400 scale-100'
                      }`}
                    >
                      {step.icon}
                    </div>
                    {index < timelineSteps.length - 1 && (
                      <div
                        className={`absolute top-12 left-1/2 w-0.5 h-16 transform -translate-x-1/2 transition-colors duration-500 ${
                          activeStep > index ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      ></div>
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 pb-8 transition-all duration-500 ${
                      activeStep === index ? 'transform translate-x-2' : ''
                    }`}
                  >
                    <h3
                      className={`text-xl font-semibold mb-3 transition-colors duration-500 ${
                        activeStep === index ? 'text-blue-600' : 'text-gray-900'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`leading-relaxed transition-colors duration-500 ${
                        activeStep === index ? 'text-gray-800' : 'text-gray-600'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* New Section: Faults We Repair - Added Below */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Faults We Repair – Mobiles & Tablets
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We fix all common hardware and software issues across all major brands. From cracked screens to software glitches, we've got you covered.
          </p>
        </div>

        {/* Grid of Faults */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {faultsWeRepair.map((fault, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-4">{fault.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {fault.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {fault.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceOverview;