import React from 'react';

const items = [
  {
    title: "Summer Dresses",
    image: "https://images.unsplash.com/photo-1618354691373-c12ce20e84ec?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "Baggy Jeans",
    image: "https://images.unsplash.com/photo-1618221199242-6f1a98c7a29e?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "Earrings",
    image: "https://images.unsplash.com/photo-1594007654729-bc8b8c1c7c6a?auto=format&fit=crop&w=300&q=80",
  },
  {
    title: "Chic Flats",
    image: "https://images.unsplash.com/photo-1616627452680-4ff9380f4c36?auto=format&fit=crop&w=300&q=80",
  },
];

const TrendzShowcase = () => {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-purple-900 p-3 xs:p-4 sm:p-8 lg:p-12 xl:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-4 xs:gap-6 md:gap-0">
      {/* Left Section */}
      <div className="text-center md:text-left mb-4 md:mb-0 w-full md:w-auto">
        <h2 className="text-xl xs:text-2xl sm:text-4xl lg:text-5xl font-extrabold">meesho <span className="text-yellow-400">#TRENDZ</span></h2>
        <button className="mt-3 sm:mt-4 bg-white text-purple-800 font-semibold px-4 sm:px-6 py-2 text-sm sm:text-base shadow-md hover:bg-purple-100 transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300 active:scale-95 rounded-lg">
          Shop Now
        </button>
      </div>

      {/* Right Items */}
      <div className="flex gap-2 xs:gap-3 sm:gap-4 overflow-x-auto scrollbar-hide w-full md:w-auto py-1 xs:py-2">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white text-purple-900 shadow-md w-28 xs:w-36 sm:w-44 flex-shrink-0 p-2 sm:p-3 text-center rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-300 active:scale-95"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-24 xs:h-32 sm:h-44 w-full object-cover mb-2 rounded"
            />
            <p className="font-bold text-xs xs:text-sm sm:text-base lg:text-lg">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendzShowcase;
