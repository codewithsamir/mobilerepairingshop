"use client";

import Image from "next/image";
import { Phone, Truck, CreditCard } from "lucide-react";

export default function ServiceSection() {
  return (
    <section className=" text-white px-6 py-12 rounded-2xl border-b border-gray-700">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-8">
            Revolutionary Service, <br />
            Delivered Curbside to You, at <br />
            Your Beck and Call.
          </h2>

          <div className="space-y-8">
            {/* 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 bg-white/10 p-3 rounded-full">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">You Call, We’ll Deliver!</h3>
                <p className="text-sm text-gray-300">
                  Call us, and our certified technicians will come to you for on-site
                  repairs, ensuring convenience and efficiency.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 bg-white/10 p-3 rounded-full">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">We Fix on the Spot.</h3>
                <p className="text-sm text-gray-300">
                  Our experts come to you, fixing your device on the spot for fast,
                  hassle-free repairs wherever you are.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 bg-white/10 p-3 rounded-full">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">No upfront payment required.</h3>
                <p className="text-sm text-gray-300">
                  No upfront payment needed. Pay only after your device is fully
                  repaired with our convenient, on-site service.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="bg-white/5 rounded-xl overflow-hidden">
          {/* Video Thumbnail */}
          <div className="relative">
            <Image
              src="/video-thumbnail.jpg" // Replace with your image
              alt="Service Video"
              width={600}
              height={340}
              className="w-full"
            />
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-red-600 p-4 rounded-full">
                ▶
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="p-6">
            <p className="text-sm text-gray-300 mb-4">
              What sets us apart is our mobility. With our mobile service, we don’t
              have a traditional store—you won’t need to come to us because we come to
              you!
            </p>
            <p className="text-sm text-gray-300">
              Whether you’re at home, at the office, or on-the-go, our certified
              technicians stand ready equipped to repair your device, even on short
              notice, allowing you to continue with your daily routines with the least
              possible disruptions to your day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
