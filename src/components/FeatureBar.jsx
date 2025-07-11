import React from "react";

export default function FeatureBar() {
  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white rounded-lg shadow flex flex-col sm:flex-row items-center justify-center py-3 px-2 sm:px-6 space-y-2 sm:space-y-0 sm:space-x-0">
      <div className="flex items-center px-6 transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-50 rounded-lg cursor-pointer">
        <span className="text-[#a100a1] mr-2">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="10"/></svg>
        </span>
        <span className="text-gray-700 font-medium text-base">7 Days Easy Return</span>
      </div>
      <div className="hidden sm:block h-6 w-px bg-gray-300 mx-2" />
      <div className="flex items-center px-6 transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-50 rounded-lg cursor-pointer">
        <span className="text-[#a100a1] mr-2">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 9V7a5 5 0 00-10 0v2"/><rect x="5" y="9" width="14" height="10" rx="2"/><path d="M8 13h8v4H8z"/></svg>
        </span>
        <span className="text-gray-700 font-medium text-base">Cash on Delivery</span>
      </div>
      <div className="hidden sm:block h-6 w-px bg-gray-300 mx-2" />
      <div className="flex items-center px-6 transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-50 rounded-lg cursor-pointer">
        <span className="text-[#a100a1] mr-2">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17l-5 3 1.9-5.6L4 9.5l5.7-.4L12 4l2.3 5.1 5.7.4-4.9 4.9L17 20z"/></svg>
        </span>
        <span className="text-gray-700 font-medium text-base">Lowest Prices</span>
      </div>
    </div>
  );
} 