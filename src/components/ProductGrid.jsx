import React, { useState } from 'react';

const filters = [
  { label: 'Category', options: ['Saree', 'Women Kurtis', 'Men Tshirts', 'Bags & Bracelets', 'Bedsheets', 'Blouses', 'Suits', 'Dress Material', 'Dupatta & Stoles', 'Earrings & Studs'] },
  { label: 'Gender', options: ['Men', 'Women'] },
  { label: 'Color', options: ['Red', 'Blue', 'Green', 'Black', 'White'] },
  { label: 'Fabric', options: ['Cotton', 'Silk', 'Polyester'] },
  { label: 'Size', options: ['S', 'M', 'L', 'XL'] },
  // Add more filter sections as needed
];

const productNames = [
  'Saree', 'Women Kurti', 'Men Tshirt', 'Bag', 'Bedsheet', 'Blouse', 'Suit', 'Dress Material', 'Dupatta', 'Earrings',
  'Scrub', 'Towel', 'Flip Flops', 'Wall Clock', 'Sketchbook', 'Tool Kit', 'Shirt', 'Shorts', 'Handbag', 'Lehenga'
];

const products = Array.from({ length: 20 }).map((_, i) => {
  const name = productNames[i % productNames.length];
  return {
    title: name,
    price: Math.floor(Math.random() * 200) + 50,
    image: `https://source.unsplash.com/featured/300x300/?${encodeURIComponent(name)}`,
    rating: (Math.random() * 5).toFixed(1),
    reviews: Math.floor(Math.random() * 1000),
    tag: i % 3 === 0 ? 'Free Delivery' : '',
    badge: i % 5 === 0 ? 'Best Seller' : i % 4 === 0 ? 'Trending' : '',
  };
});

export default function ProductGrid() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-gray-50 py-4 px-1 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Sidebar */}
          <div className="md:w-64 w-full md:sticky md:top-24 flex-shrink-0">
            {/* Mobile sidebar toggle */}
            <button
              className="md:hidden mb-2 px-4 py-2 bg-white border rounded shadow text-sm font-semibold"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? 'Hide Filters' : 'Show Filters'}
            </button>
            <div className={`bg-white border rounded-lg shadow p-4 space-y-4 ${sidebarOpen ? '' : 'hidden'} md:block`}>
              <h3 className="font-bold text-lg mb-2">FILTERS</h3>
              {filters.map((filter, idx) => (
                <div key={filter.label}>
                  <div className="font-semibold text-sm mb-1">{filter.label}</div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {filter.options.map(opt => (
                      <button key={opt} className="px-2 py-1 bg-gray-100 rounded text-xs hover:bg-purple-100 transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300 active:scale-95">{opt}</button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
              <h2 className="text-xl sm:text-2xl font-bold">Products For You</h2>
              <select className="w-full sm:w-auto px-3 py-2 border rounded text-sm">
                <option>Sort by Relevance</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {products.map((p, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border shadow-lg p-2 flex flex-col group transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:scale-105 active:scale-95 cursor-pointer relative overflow-hidden"
                >
                  {/* Badges */}
                  {p.badge && (
                    <span className={`absolute top-2 left-2 z-10 px-2 py-1 text-xs font-bold rounded ${p.badge === 'Best Seller' ? 'bg-yellow-400 text-yellow-900' : 'bg-pink-200 text-pink-800'}`}>
                      {p.badge}
                    </span>
                  )}
                  {/* Product Image */}
                  <div className="relative w-full h-32 sm:h-36 md:h-40 mb-2 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
                      loading="lazy"
                    />
                    {p.tag && (
                      <span className="absolute bottom-2 right-2 bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded">
                        {p.tag}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="font-semibold text-xs sm:text-sm mb-1 line-clamp-2">{p.title}</div>
                    <div className="text-purple-800 font-bold text-base sm:text-lg mb-1">₹{p.price}</div>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                      <span>⭐ {p.rating}</span>
                      <span>({p.reviews})</span>
                    </div>
                  </div>
                  <button className="mt-2 px-2 py-1 bg-purple-600 text-white rounded text-xs font-semibold hover:bg-purple-700 transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300 active:scale-95">Add to Cart</button>
                </div>
              ))}
            </div>
            <div className="text-center text-gray-400 text-sm mt-6">Please wait, loading content</div>
          </div>
        </div>
      </div>
    </div>
  );
} 