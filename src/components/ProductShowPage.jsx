import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ProductShowPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product || {
    title: 'Product Name',
    price: 199,
    image: 'https://source.unsplash.com/featured/300x300/?product',
    rating: 4.5,
    reviews: 120,
    description: 'This is a sample product description. It highlights the features, quality, and benefits of the product.',
    buyers: 500,
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 xs:py-6 sm:py-8 px-1 xs:px-2 sm:px-6 flex justify-center relative">
      {/* Back Arrow */}
      <button
        className="absolute top-2 xs:top-3 left-2 xs:left-3 flex items-center gap-1 text-purple-700 hover:text-purple-900 font-semibold text-xl xs:text-2xl sm:text-xl bg-white rounded-full shadow p-3 xs:p-4 hover:bg-gray-100 transition z-20 focus:outline-none focus:ring-2 focus:ring-purple-300 active:scale-95"
        style={{ minWidth: 44, minHeight: 44 }}
        onClick={() => navigate(-1)}
        aria-label="Go back"
      >
        <svg className="w-7 h-7 xs:w-8 xs:h-8 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        <span className="hidden sm:inline">Back</span>
      </button>
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-2 xs:p-4 sm:p-8 flex flex-col md:flex-row gap-4 xs:gap-6 sm:gap-8">
        {/* Product Image */}
        <div className="flex-1 flex flex-col items-center justify-center mb-4 md:mb-0">
          <img src={product.image} alt={product.title} className="w-48 xs:w-56 sm:w-64 h-48 xs:h-56 sm:h-64 object-cover rounded-lg shadow mb-4" />
          <div className="flex flex-col xs:flex-row gap-2 w-full">
            <button className="w-full xs:w-auto px-4 py-2 xs:px-6 xs:py-2 bg-purple-600 text-white rounded-lg font-semibold shadow hover:bg-purple-700 transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300 active:scale-95 text-base xs:text-lg" onClick={() => alert('Buy Now!')}>Buy Now</button>
            <button className="w-full xs:w-auto px-4 py-2 xs:px-6 xs:py-2 bg-white border border-purple-600 text-purple-700 rounded-lg font-semibold shadow hover:bg-purple-50 transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300 active:scale-95 text-base xs:text-lg" onClick={() => alert('Added to Cart!')}>Add to Cart</button>
          </div>
        </div>
        {/* Product Details */}
        <div className="flex-1 flex flex-col gap-3 xs:gap-4 sm:gap-6">
          <h1 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-1 xs:mb-2">{product.title}</h1>
          <div className="flex flex-wrap items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
            <span className="text-base xs:text-lg font-semibold text-purple-700">₹{product.price}</span>
            <span className="text-yellow-500 font-bold flex items-center text-sm xs:text-base">⭐ {product.rating}</span>
            <span className="text-gray-500 text-xs xs:text-sm">({product.reviews} reviews)</span>
            <span className="text-green-600 text-xs font-semibold ml-2">{product.buyers || 0} buyers</span>
          </div>
          <p className="text-gray-700 text-sm xs:text-base mb-1 xs:mb-2">{product.description}</p>
          <div className="mt-2 xs:mt-4">
            <h2 className="text-base xs:text-lg font-semibold mb-1 xs:mb-2 text-gray-800">Product Reviews</h2>
            <div className="space-y-2 xs:space-y-3">
              <div className="bg-gray-100 rounded-lg p-2 xs:p-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-purple-700">Amit</span>
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-700 text-xs xs:text-sm">Great product! Quality is top-notch and delivery was fast.</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-2 xs:p-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-purple-700">Priya</span>
                  <span className="text-yellow-500">⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-700 text-xs xs:text-sm">Value for money. Would recommend to friends.</p>
              </div>
              {/* Add more reviews as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 