import React from "react";
import InvestorAbout from "./InvestorAbout";

const navItems = [
  { name: "Home", href: "#", active: true },
  { name: "Financials", href: "#" },
  { name: "Resources", href: "#" },
];

export default function InvestorRelations() {
  return (
    <>
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-white shadow-sm border-b border-gray-100 py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://images.meesho.com/images/marketing/1661417516766.webp"
            alt="SmartMart Logo"
            className="w-14 h-14 rounded-lg object-contain bg-[#fff0f6] p-2"
          />
          <span className="text-lg sm:text-xl font-semibold text-[#3d005e]" style={{fontFamily: 'Inter, sans-serif'}}>Investor Relations</span>
        </div>
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-base font-medium px-4 py-2 rounded-lg transition-colors duration-200 ${item.active ? 'bg-yellow-400 text-black shadow font-bold' : 'hover:bg-gray-100 text-black'}`}
              style={{fontFamily: 'Inter, sans-serif'}}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[420px] sm:h-[480px] md:h-[540px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="SmartMart Office Background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{filter: 'brightness(0.6)'}}
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold text-center mb-4" style={{fontFamily: 'Inter, sans-serif', textShadow: '0 2px 16px rgba(0,0,0,0.25)'}}>
            SmartMart is democratising<br />internet commerce for everyone
          </h1>
          <p className="text-yellow-300 text-lg sm:text-2xl font-semibold text-center mb-2" style={{fontFamily: 'Inter, sans-serif', textShadow: '0 1px 8px rgba(0,0,0,0.18)'}}>
            Empowering Every Entrepreneur, Every Day.
          </p>
          <p className="text-white text-base sm:text-lg md:text-xl text-center max-w-2xl" style={{fontFamily: 'Inter, sans-serif', textShadow: '0 1px 8px rgba(0,0,0,0.18)'}}>
            For nearly a decade, SmartMart has built innovative technology to create an accessible and affordable e-commerce ecosystem for a billion Indians
          </p>
        </div>
      </section>
    </div>
    <InvestorAbout />
    </>
  );
} 