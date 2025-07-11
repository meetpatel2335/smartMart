import React from "react";

const categories = [
  { name: "Books", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=facearea&w=256&q=80" },
  { name: "Electronics", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=facearea&w=256&q=80" },
  { name: "Toys", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=256&q=80" },
  { name: "Stationery", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=256&q=80" },
  { name: "Kitchen", img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=facearea&w=256&q=80" },
  { name: "Fitness", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=256&q=80" },
  { name: "Music", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=256&q=80" },
  { name: "Gardening", img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=256&q=80" },
];

export default function CategoryShowcase() {
  return (
    <section className="w-full py-4 xs:py-6 sm:py-8 md:py-12 bg-white">
      <div className="max-w-screen-2xl mx-auto flex flex-nowrap sm:flex-wrap overflow-x-auto sm:overflow-visible gap-y-4 xs:gap-y-6 gap-x-2 md:gap-x-6 px-1 xs:px-2 sm:px-4 md:px-8 scrollbar-hide">
        {categories.map((cat) => (
          <div key={cat.name} className="flex flex-col items-center w-20 xs:w-28 sm:w-32 md:w-36 flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300">
            <div className="w-16 h-16 xs:w-24 xs:h-24 sm:w-28 sm:h-28 bg-pink-50 flex items-center justify-center mb-2 overflow-hidden border border-gray-200 rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110">
              <img src={cat.img} alt={cat.name} className="w-12 h-12 xs:w-20 xs:h-20 sm:w-24 sm:h-24 object-cover rounded transition-transform duration-300 ease-in-out group-hover:scale-110" />
            </div>
            <span className="mt-1 text-xs xs:text-sm sm:text-base md:text-lg font-medium text-gray-800 text-center" style={{fontFamily: 'Inter, sans-serif'}}>{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
} 