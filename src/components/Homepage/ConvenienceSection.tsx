"use client";

export default function ConvenienceSection() {
  return (
    <section className=" text-white px-6 py-20 text-center border-b border-gray-700">
      <div className="max-w-5xl mx-auto">
        {/* Top Heading */}
        <p className="uppercase tracking-widest text-sm text-gray-300 mb-4">
          Unparalleled Convenience
        </p>

        {/* Main Text */}
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-16">
          Say hello to service that has –<br /> won the hearts of countless clients.
        </h2>

        {/* Timeline */}
        <div className="relative flex justify-between items-center text-sm font-mono">
          {/* Labels */}
          <span>Book us Online</span>
          <span>We&apos;re On-Demand</span>
          <span>7 Days a Week</span>

          {/* Line */}
          <div className="absolute top-6 left-0 w-full h-1 bg-gray-300">
            {/* Circle at Start */}
            <div className="absolute -top-2 left-0 w-5 h-5 bg-[#0b1e3f] border-4 border-gray-300 rounded-full"></div>
          </div>

          {/* Vertical lines under middle and end */}
          <div className="absolute top-6 left-1/2 w-px h-4 bg-gray-300"></div>
          <div className="absolute top-6 right-0 w-px h-4 bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
}
