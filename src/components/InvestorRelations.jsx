import React, { useState } from "react";
import InvestorAbout from "./InvestorAbout";

const navItems = [
  { name: "Home", href: "#", active: true },
  { name: "Financials", href: "#" },
  { name: "Resources", href: "#" },
];

const stats = [
  { label: "Customers", value: "10M+", icon: "👥" },
  { label: "Sellers", value: "100K+", icon: "🏪" },
  { label: "Pan-India Delivery", value: "29 States", icon: "🚚" },
  { label: "Top Investors", value: "10+", icon: "💼" },
];

const leaders = [
  { name: "Amit Jain", title: "CEO & Co-Founder", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Ritu Sharma", title: "CFO", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Suresh Kumar", title: "CTO", img: "https://randomuser.me/api/portraits/men/65.jpg" },
  { name: "Priya Singh", title: "COO", img: "https://randomuser.me/api/portraits/women/68.jpg" },
];

export default function InvestorRelations() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* Header */}
      <header className="w-full bg-white shadow-sm border-b border-gray-100 py-3 px-2 xs:px-4 sm:px-6 flex items-center justify-between gap-2 sticky top-0 z-40">
        <div className="flex items-center gap-2 xs:gap-3">
          <img
            src="https://images.meesho.com/images/marketing/1661417516766.webp"
            alt="SmartMart Logo"
            className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-lg object-contain bg-[#fff0f6] p-2"
          />
          <span className="text-base xs:text-lg sm:text-xl font-semibold text-[#3d005e]" style={{fontFamily: 'Inter, sans-serif'}}>Investor Relations</span>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="sm:hidden flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none transition duration-300 ease-in-out active:scale-95 focus:ring-2 focus:ring-purple-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-2 xs:gap-4 sm:gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-xs xs:text-sm sm:text-base font-medium px-3 py-2 rounded-lg transition-colors duration-200 ${item.active ? 'bg-yellow-400 text-black shadow font-bold' : 'hover:bg-gray-100 text-black'} cursor-pointer`}
              style={{fontFamily: 'Inter, sans-serif'}}>{item.name}</a>
          ))}
        </nav>
        {/* Mobile Nav Drawer */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex sm:hidden" onClick={() => setMenuOpen(false)}>
            <div className="absolute top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg p-6 flex flex-col gap-2 animate-slide-in" onClick={e => e.stopPropagation()}>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-base font-medium px-4 py-3 rounded-lg transition-colors duration-200 ${item.active ? 'bg-yellow-400 text-black shadow font-bold' : 'hover:bg-gray-100 text-black'} cursor-pointer`}
                  style={{fontFamily: 'Inter, sans-serif'}}>{item.name}</a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[180px] xs:h-[260px] sm:h-[420px] md:h-[540px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.meesho.com/images/marketing/1661417516766.webp"
          alt="SmartMart Office Background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{filter: 'brightness(0.6)'}}
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-2 xs:px-4">
          <h1 className="text-white text-base xs:text-xl sm:text-4xl md:text-5xl font-extrabold text-center mb-2 xs:mb-4 leading-tight" style={{fontFamily: 'Inter, sans-serif', textShadow: '0 2px 16px rgba(0,0,0,0.25)'}}>
            SmartMart is democratising<br className="hidden xs:block" />internet commerce for everyone
          </h1>
          <p className="text-yellow-300 text-xs xs:text-base sm:text-xl font-semibold text-center mb-1 xs:mb-2" style={{fontFamily: 'Inter, sans-serif', textShadow: '0 1px 8px rgba(0,0,0,0.18)'}}>
            Empowering Every Entrepreneur, Every Day.
          </p>
          <p className="text-white text-xs xs:text-sm sm:text-lg md:text-xl text-center max-w-xs xs:max-w-md sm:max-w-2xl" style={{fontFamily: 'Inter, sans-serif', textShadow: '0 1px 8px rgba(0,0,0,0.18)'}}>
            For nearly a decade, SmartMart has built innovative technology to create an accessible and affordable e-commerce ecosystem for a billion Indians
          </p>
          <a href="#about" className="mt-4 px-5 xs:px-6 py-2 bg-yellow-400 text-black font-bold rounded-lg shadow hover:bg-yellow-300 transition text-xs xs:text-sm xs:text-base cursor-pointer">Learn More</a>
        </div>
      </section>

      {/* Highlights/Stats Section */}
      <section className="w-full py-5 xs:py-7 sm:py-12 bg-white" id="about">
        <div className="max-w-2xl xs:max-w-3xl sm:max-w-5xl mx-auto grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center bg-white border border-gray-200 rounded-xl shadow p-4 xs:p-5 sm:p-6 mb-2 cursor-pointer hover:shadow-lg transition">
              <span className="text-xl xs:text-2xl sm:text-3xl mb-1 xs:mb-2">{stat.icon}</span>
              <span className="text-base xs:text-xl sm:text-2xl font-bold text-[#6f2871]">{stat.value}</span>
              <span className="text-xs xs:text-sm text-gray-700 mt-1 text-center">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <InvestorAbout />

      {/* Leadership Section */}
      <section className="w-full py-5 xs:py-7 sm:py-12 bg-gray-50">
        <div className="max-w-2xl xs:max-w-3xl sm:max-w-5xl mx-auto">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-center mb-5 xs:mb-6" style={{fontFamily: 'Inter, sans-serif'}}>Leadership Team</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
            {leaders.map((leader) => (
              <div key={leader.name} className="flex flex-col items-center bg-white border border-gray-200 rounded-xl shadow p-4 xs:p-5 sm:p-6 mb-2 cursor-pointer hover:shadow-lg transition">
                <img src={leader.img} alt={leader.name} className="w-16 h-16 xs:w-20 xs:h-24 rounded-full object-cover mb-2 border-2 border-yellow-400" />
                <span className="font-bold text-xs xs:text-sm sm:text-base text-[#6f2871] text-center mt-1">{leader.name}</span>
                <span className="text-xs xs:text-sm text-gray-600 text-center">{leader.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="w-full py-7 bg-white flex flex-col items-center">
        <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-2 text-center" style={{fontFamily: 'Inter, sans-serif'}}>Contact Investor Relations</h3>
        <a href="mailto:investor@smartmart.com" className="px-5 xs:px-6 py-2 bg-[#6f2871] text-white font-semibold rounded-lg shadow hover:bg-[#a100a1] transition text-xs xs:text-sm xs:text-base cursor-pointer">Email Us</a>
        <div className="flex gap-4 mt-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition cursor-pointer"><img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" className="w-6 h-6 xs:w-7 xs:h-7" /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition cursor-pointer"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-6 h-6 xs:w-7 xs:h-7" /></a>
        </div>
      </section>
    </>
  );
} 