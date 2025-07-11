import { useNavigate } from "react-router-dom";

const brands = [
  { name: "Tokyo Talkies", img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=256&q=80" },
  { name: "Ziyaa", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=256&q=80" },
  { name: "Mitera", img: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=facearea&w=256&q=80" },
  { name: "Libas", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=256&q=80" },
  { name: "Ahalyaa", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=256&q=80" },
  { name: "Anouk", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=256&q=80" },
  { name: "Sangria", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=256&q=80" },
  { name: "Vishudh", img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=facearea&w=256&q=80" },
  { name: "W", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=256&q=80" },
  { name: "Aurelia", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=256&q=80" },
];

export default function BrandShowcase() {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/brands");
  };

  return (
    <section className="w-full bg-white py-6 xs:py-8 sm:py-10 md:py-14">
      <div className="max-w-screen-2xl mx-auto px-1 xs:px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 xs:mb-4 sm:mb-6 gap-2 sm:gap-0">
          <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
            Original Brands
          </h2>
          <button
            onClick={handleViewAll}
            className="text-purple-600 hover:text-purple-800 font-semibold text-base transition"
          >
            View All
          </button>
        </div>

        {/* Brand cards with fade edges */}
        <div className="relative">
          {/* Fade effect */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-6 xs:w-8 sm:w-12 z-10 bg-gradient-to-r from-white via-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-6 xs:w-8 sm:w-12 z-10 bg-gradient-to-l from-white via-white to-transparent" />

          {/* Brand Scroll */}
          <div className="flex gap-2 xs:gap-3 sm:gap-4 overflow-x-auto scrollbar-hide py-2 sm:py-3 px-0 sm:px-1" style={{ scrollSnapType: 'x mandatory' }}>
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex flex-col items-center min-w-[90px] xs:min-w-[110px] sm:min-w-[140px] max-w-[140px] bg-white shadow-md hover:shadow-2xl border border-gray-200 py-2 xs:py-3 sm:py-5 px-1 xs:px-2 sm:px-3 mx-0 sm:mx-1 transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-95 cursor-pointer rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="w-12 xs:w-16 sm:w-20 h-12 xs:h-16 sm:h-20 overflow-hidden shadow-inner mb-2 sm:mb-3 border border-gray-300 rounded-full">
                  <img
                    src={brand.img}
                    alt={brand.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs xs:text-sm sm:text-base lg:text-lg font-semibold text-gray-700 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {brand.name}
                </span>
              </div>
            ))}

            {/* View All Card at End */}
            <div
              onClick={handleViewAll}
              className="flex flex-col items-center justify-center min-w-[90px] xs:min-w-[110px] sm:min-w-[140px] max-w-[140px] bg-purple-50 hover:bg-purple-100 shadow-md border border-purple-300 py-2 xs:py-3 sm:py-5 px-1 xs:px-2 sm:px-3 mx-0 sm:mx-1 transition duration-300 ease-in-out hover:scale-110 active:scale-95 cursor-pointer rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              style={{ scrollSnapAlign: 'start' }}
            >
              <span className="text-purple-700 text-sm xs:text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                View All
              </span>
              <svg
                width="28"
                height="28"
                fill="none"
                stroke="#7c3aed"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
