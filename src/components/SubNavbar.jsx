import React, { useState } from "react";

const categories = [
  {
    name: "Women Ethnic",
    dropdown: ["Sarees", "Kurtis", "Lehenga", "Blouses"]
  },
  {
    name: "Women Western",
    dropdown: ["Dresses", "Tops", "Jeans", "Jumpsuits"]
  },
  { name: "Men", dropdown: ["T-Shirts", "Shirts", "Jeans", "Trousers"] },
  { name: "Kids", dropdown: ["Boys Clothing", "Girls Clothing", "Toys"] },
  { name: "Home & Kitchen", dropdown: ["Bedsheets", "Curtains", "Cookware"] },
  { name: "Beauty & Health", dropdown: ["Makeup", "Skincare", "Haircare"] },
  { name: "Jewellery & Accessories", dropdown: ["Jewellery Set", "Earrings", "Bags"] },
  { name: "Bags & Footwear", dropdown: ["Handbags", "Sandals", "Shoes"] },
  { name: "Electronics", dropdown: ["Mobiles", "Speakers", "Smartwatches"] },
  { name: "Sports & Fitness", dropdown: ["Sportswear", "Equipment"] },
  { name: "Car & Motorbike", dropdown: ["Car Accessories", "Bike Accessories"] },
  { name: "Office", dropdown: ["Stationery", "Chairs"] },
];

export default function SubNavbar() {
  const [hovered, setHovered] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  return (
    <div className="w-full bg-white border-b border-gray-200 sticky top-20 z-20 select-none">
      <div className="max-w-screen-2xl mx-auto flex items-center px-2 sm:px-6 lg:px-16 h-14 overflow-x-auto scrollbar-hide gap-2 sm:gap-0">
        {categories.map((cat, idx) => (
          <div
            key={cat.name}
            className="relative h-full flex items-center flex-shrink-0"
            onMouseEnter={() => !isMobile && setHovered(idx)}
            onMouseLeave={() => !isMobile && setHovered(null)}
          >
            <button
              type="button"
              className={`px-3 py-1 text-xs sm:text-sm font-medium text-gray-700 hover:text-[#6f2871] transition-colors duration-150 whitespace-nowrap rounded-md focus:outline-none transition duration-300 ease-in-out hover:scale-105 active:scale-95 focus:ring-2 focus:ring-purple-300 ${((hovered === idx && !isMobile) || (dropdownOpen === idx && isMobile)) ? 'border-b-2 border-[#6f2871] bg-gray-50' : ''}`}
              style={{fontFamily: 'Inter, sans-serif'}}
              onClick={() => {
                if (isMobile) setDropdownOpen(dropdownOpen === idx ? null : idx);
              }}
            >
              {cat.name}
            </button>
            {/* Dropdown (show for first 4 categories as example) */}
            {((hovered === idx && !isMobile) || (dropdownOpen === idx && isMobile)) && idx < 4 && (
              <div className="absolute left-0 top-full mt-2 w-44 sm:w-48 bg-white shadow-lg rounded-md py-2 z-30 animate-fade-in border border-gray-100 min-w-max transition-all duration-300 ease-in-out origin-top scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100">
                {cat.dropdown.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#6f2871] text-xs sm:text-sm transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:text-[#a100a1] active:scale-95"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 