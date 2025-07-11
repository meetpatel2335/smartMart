import React from "react";

const highlights = [
  { title: "Founded", value: "2015", icon: "🎉" },
  { title: "Employees", value: "2000+", icon: "👩‍💼" },
  { title: "Cities Served", value: "500+", icon: "🌏" },
  { title: "Awards", value: "15+", icon: "🏆" },
];

const testimonials = [
  {
    name: "Rina Patel",
    text: "SmartMart helped me start my own business from home. The support and platform are amazing!",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Ajay Kumar",
    text: "The reach and logistics of SmartMart are unmatched. My sales have doubled!",
    img: "https://randomuser.me/api/portraits/men/43.jpg",
  },
];

export default function InvestorAbout() {
  return (
    <section className="w-full bg-white py-8 xs:py-10 sm:py-14 px-2 xs:px-4 sm:px-8 md:px-20">
      {/* About/Mission Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
        <img
          src="https://images.meesho.com/images/marketing/1661417516766.webp"
          alt="SmartMart About"
          className="rounded-lg w-full md:w-1/2 mb-4 md:mb-0 shadow-lg"
        />
        <div className="flex-1">
          <h2 className="text-2xl xs:text-3xl font-bold mb-3 text-[#6f2871]">Who We Are</h2>
          <p className="text-sm xs:text-base text-gray-700 mb-3">
            SmartMart is India’s leading e-commerce platform, empowering millions of entrepreneurs and customers nationwide. Our mission is to make commerce accessible, affordable, and inclusive for all.
          </p>
          <h3 className="text-lg xs:text-xl font-semibold mb-2 text-[#a100a1]">Our Mission</h3>
          <p className="text-xs xs:text-sm text-gray-600">
            We believe in democratizing internet commerce, supporting small businesses, and building a sustainable, tech-driven future for India.
          </p>
        </div>
      </div>

      {/* Highlights/Timeline Section */}
      <div className="grid grid-cols-2 xs:grid-cols-4 gap-4 xs:gap-6 mb-10">
        {highlights.map((item) => (
          <div key={item.title} className="flex flex-col items-center bg-gray-50 rounded-lg shadow p-4 xs:p-6">
            <span className="text-2xl xs:text-3xl mb-2">{item.icon}</span>
            <span className="text-xl xs:text-2xl font-bold text-[#6f2871]">{item.value}</span>
            <span className="text-xs xs:text-sm text-gray-700 mt-1">{item.title}</span>
          </div>
        ))}
      </div>

      {/* Testimonials/Video Section */}
      <div className="w-full bg-gradient-to-r from-[#a100a1] to-[#e94057] rounded-xl shadow-lg p-6 xs:p-8 flex flex-col md:flex-row items-center gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="flex flex-col items-center text-center flex-1">
            <img src={t.img} alt={t.name} className="w-16 h-16 xs:w-20 xs:h-20 rounded-full object-cover mb-2 border-2 border-yellow-400" />
            <p className="text-white text-sm xs:text-base mb-2">“{t.text}”</p>
            <span className="text-yellow-200 text-xs xs:text-sm font-semibold">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
