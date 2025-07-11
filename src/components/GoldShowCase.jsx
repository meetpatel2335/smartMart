import React from "react";

const GoldShowcase = () => {
  return (
    <div className="bg-gradient-to-r from-[#3b1f0b] to-[#140d04] text-white p-3 xs:p-4 sm:p-6 md:p-12 lg:p-16 flex flex-col md:flex-row justify-between items-center shadow-lg gap-4 xs:gap-6 md:gap-0">
      {/* Left Section */}
      <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0">
        <h1 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 flex items-center gap-2">
          <span className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl">✨</span> Gold
        </h1>
        <p className="text-xs xs:text-sm sm:text-lg mt-2 sm:mt-3 text-[#f3e6d0]">
          Products you <span className="font-semibold">Love</span>. Quality we <span className="font-semibold">Trust</span>.
        </p>
        <button className="mt-3 sm:mt-6 px-3 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold shadow-md transition duration-300 text-xs xs:text-sm sm:text-base lg:text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 hover:scale-105 active:scale-95">Shop Now</button>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-2 xs:gap-3 sm:gap-6">
        <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
          <div className="w-full max-w-[120px] aspect-square bg-white p-2 sm:p-3 rounded-lg border-4 border-yellow-500 shadow-md flex items-center justify-center overflow-hidden mx-auto">
            <img src="/images/lehngas.webp" alt="Lehengas" className="max-h-full max-w-full object-contain" />
          </div>
          <span className="mt-1 sm:mt-2 font-medium text-xs xs:text-sm sm:text-base lg:text-lg text-yellow-200">Lehengas</span>
        </div>
        <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
          <div className="w-full max-w-[120px] aspect-square bg-white p-2 sm:p-3 rounded-lg border-4 border-yellow-500 shadow-md flex items-center justify-center overflow-hidden mx-auto">
            <img src="/images/menswear.webp" alt="Menwear" className="max-h-full max-w-full object-contain" />
          </div>
          <span className="mt-1 sm:mt-2 font-medium text-xs xs:text-sm sm:text-base lg:text-lg text-yellow-200">Menwear</span>
        </div>
        <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
          <div className="w-full max-w-[120px] aspect-square bg-white p-2 sm:p-3 rounded-lg border-4 border-yellow-500 shadow-md flex items-center justify-center overflow-hidden mx-auto">
            <img src="/images/saree.webp" alt="Sarees" className="max-h-full max-w-full object-contain" />
          </div>
          <span className="mt-1 sm:mt-2 font-medium text-xs xs:text-sm sm:text-base lg:text-lg text-yellow-200">Sarees</span>
        </div>
        <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
          <div className="w-full max-w-[120px] aspect-square bg-white p-2 sm:p-3 rounded-lg border-4 border-yellow-500 shadow-md flex items-center justify-center overflow-hidden mx-auto">
            <img src="/images/jewellery.webp" alt="Jewellery" className="max-h-full max-w-full object-contain" />
          </div>
          <span className="mt-1 sm:mt-2 font-medium text-xs xs:text-sm sm:text-base lg:text-lg text-yellow-200">Jewellery</span>
        </div>
      </div>
    </div>
  );
};

export default GoldShowcase;
