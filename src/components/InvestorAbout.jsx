import React from "react";

const InvestorAbout = () => {
  return (
    <div className="px-6 md:px-20 py-12 space-y-16 bg-white text-gray-800">
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        <img
          src="https://images.meesho.com/images/marketing/1661417516766.webp"
          alt="SmartMart Shopping"
          className="rounded-lg w-full md:w-1/3"
        />
        <div>
          <h2 className="text-xl font-bold mb-2">
            Making e-commerce affordable and accessible
          </h2>
          <p className="text-sm text-gray-700">
            SmartMart is a multi-sided technology platform shaping e-commerce in
            India by connecting customers, manufacturers, suppliers, and resellers.
            We aim to make commerce inclusive, affordable, accessible and equitable,
            enabling all customer segments across the country.
          </p>
        </div>
      </div>

      {/* Section 2 - Videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <img
            src="https://images.meesho.com/images/marketing/1661417516766.webp"
            alt="Sanju"
            className="rounded-lg w-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-14 h-14 bg-white bg-opacity-75 rounded-full">
              ▶
            </button>
          </div>
          <p className="mt-2 text-sm font-medium">
            Watch how Sanju Sharma shops smarter, right from home
          </p>
        </div>

        <div className="relative">
          <img
            src="https://images.meesho.com/images/marketing/1661417516766.webp"
            alt="Yashwanth"
            className="rounded-lg w-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-14 h-14 bg-white bg-opacity-75 rounded-full">
              ▶
            </button>
          </div>
          <p className="mt-2 text-sm font-medium">
            Watch how Yashwanth chases style on a student budget
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        <img
          src="https://images.meesho.com/images/marketing/1661417516766.webp"
          alt="Digitizing India"
          className="rounded-lg w-full md:w-1/3"
        />
        <div>
          <h2 className="text-xl font-bold mb-2">Digitizing Indian businesses</h2>
          <p className="text-sm text-gray-700">
            Our India-first approach equips SmartMart’s sellers with the tools to succeed:
            online store creation, logistics, flexible return policies, low-cost
            operations, a customer management system, performance-based advertising, and
            seller care. Our low-cost policies help grow small businesses.
          </p>
        </div>
      </div>

      {/* Section 4 - More Videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <img
            src="https://images.meesho.com/images/marketing/1661417516766.webp"
            alt="Vatsal"
            className="rounded-lg w-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-14 h-14 bg-white bg-opacity-75 rounded-full">
              ▶
            </button>
          </div>
          <p className="mt-2 text-sm font-medium">
            Watch how Vatsal transformed everyday products with Indian healthcare
          </p>
        </div>

        <div className="relative">
          <img
            src="https://images.meesho.com/images/marketing/1661417516766.webp"
            alt="Kavin"
            className="rounded-lg w-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-14 h-14 bg-white bg-opacity-75 rounded-full">
              ▶
            </button>
          </div>
          <p className="mt-2 text-sm font-medium">
            Watch how Kavin scaled BodyGlove through e-commerce
          </p>
        </div>
      </div>

      {/* Section 5 */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        <img
          src="https://images.meesho.com/images/marketing/1661417516766.webp"
          alt="Delivery Network"
          className="rounded-lg w-full md:w-1/3"
        />
        <div>
          <h2 className="text-xl font-bold mb-2">
            Building a low cost delivery network
          </h2>
          <p className="text-sm text-gray-700">
            SmartMart operates through a nationwide delivery infrastructure and
            selection of logistics partners to support hyper-local fulfillment at scale,
            with a continued emphasis on reliability and cost-effectiveness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestorAbout;
