import React from "react";
import FeatureBar from './FeatureBar';

export default function HomeSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#a100a1] to-[#e94057] relative overflow-hidden pt-6 pb-8 sm:pt-8 sm:pb-12 lg:pt-16 lg:pb-20 xl:pt-24 xl:pb-28">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center md:justify-start mb-6 md:mb-0">
          {/* Replace with actual image if available */}
          <img
            src="https://images.meesho.com/images/marketing/1661417516766.webp"
            alt="SmartMart Shopping"
            className="w-36 xs:w-48 sm:w-72 md:w-[400px] lg:w-[440px] xl:w-[500px] 2xl:w-[600px] rounded-xl shadow-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            style={{background: '#fff'}}
          />
        </div>
        {/* Right: Text and Button */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-white text-xl xs:text-2xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold leading-tight mb-3 sm:mb-4 xl:mb-6" style={{fontFamily: 'Inter, sans-serif'}}>
            SmartMart Shopping<br />Trusted by Millions
          </h1>
          <button className="mt-3 sm:mt-4 xl:mt-6 px-4 sm:px-8 xl:px-12 py-2.5 sm:py-3 xl:py-4 bg-white text-[#a100a1] text-base sm:text-lg xl:text-xl font-semibold rounded-lg shadow hover:bg-gray-100 transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300 active:scale-95">
            Shop Now
          </button>
        </div>
      </div>
      {/* Feature Bar */}
      <FeatureBar />
    </section>
  );
} 