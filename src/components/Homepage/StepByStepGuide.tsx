"use client";
import React, { JSX, useState } from "react";
import { Calendar, CheckCircle } from "lucide-react";

interface TabContent {
  id: string;
  title: string;
  content: JSX.Element;
}

const StepByStepGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState("how-it-works");

  const tabs: TabContent[] = [
    {
      id: "how-it-works",
      title: "How It Works",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-800 underline mb-2">
              We Arrive for Your Appointment
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our technician will arrive at your location in Dallas or nearby areas on time, finding the closest safe parking to your address. Once there, we just need your device to begin the repair.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 underline mb-2">
              Address Details
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Please provide clear location details such as gate codes, apartment or suite numbers, building numbers, and any parking instructions when booking your repair.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 underline mb-2">
              Preparing Your Device
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Make sure your device has at least a 15% battery charge before the appointment to ensure a smooth, uninterrupted repair.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "what-to-expect",
      title: "What to Expect",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            Our certified technicians arrive with all the tools and high-quality parts needed for your repair. We work quickly while keeping you informed every step of the way.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>Thorough diagnostic check of your device</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>Genuine replacement parts where required</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>Full testing before you receive your device back</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "our-guarantee",
      title: "Our Guarantee",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            We’re committed to quality service and your satisfaction on every repair.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">30-Day Warranty</h4>
            <p className="text-blue-700 text-sm">
              All repairs are backed by a 30-day warranty on parts and labor. If an issue occurs within this period, we’ll fix it at no extra cost.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "your-privacy",
      title: "Your Privacy",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            Your privacy and data protection are important to us at every step of the repair process.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>No access to your personal data during repairs</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Secure handling of devices at all times</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Commitment to full confidentiality</span>
            </li>
          </ul>
        </div>
      ),
    },
  ];
  

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 ">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Step-by-Step Guide: How It Works, What to Expect, Our Guarantee.
        </h1>
        <p className="text-gray-600 text-lg tracking-wider uppercase">
          TRANSPARENCY IN EVERY STEP
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-stretch">
        {/* Left Side */}
        <div className="flex flex-col  bg-white rounded-full shadow-lg drop-shadow-lg  w-[500px] h-[500px]">
          <div className="relative w-full flex flex-col items-center justify-center">
            <div className="flex justify-center items-center my-5 ">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center text-white text-xl font-semibold mb-4">
                1
              </div>
            </div>
            <div className="flex flex-col items-center mb-12">
              <Calendar className="w-20 h-20 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                Book your Spot
              </h3>
              <p className="text-center text-gray-600 max-w-sm leading-relaxed">
                Conveniently book online anytime. Choose your service, set your availability, and get
                instant confirmation.
              </p>
            </div>
            <div className="absolute top-[130px] right-20">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                2
              </div>
            </div>
            <div className="absolute -bottom-[40px] right-[100px]">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                3
              </div>
            </div>
            <div className="absolute -bottom-10 left-[110px]">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                4
              </div>
            </div>
            <div className="absolute top-[130px] left-[70px]">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                5
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col min-h-[500px]">
          <div className="flex bg-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onMouseEnter={() => setActiveTab(tab.id)} // Hover switch
                onClick={() => setActiveTab(tab.id)} // Click still works
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? "bg-white text-gray-900 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="p-8 flex-1">
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepByStepGuide;
