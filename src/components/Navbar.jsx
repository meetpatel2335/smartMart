import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-30 bg-white shadow-sm border-b border-gray-100 font-sans">
        <div className="max-w-screen-2xl mx-auto flex items-center h-20 px-4 sm:px-6 lg:px-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 mr-4 sm:mr-6">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#6f2871] tracking-tight select-none" style={{fontFamily: 'Inter, sans-serif'}}>SmartMart</span>
          </div>

          {/* Hamburger for mobile */}
          <button
            className="sm:hidden ml-auto flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none transition duration-300 ease-in-out active:scale-95 focus:ring-2 focus:ring-purple-300"
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

          {/* Center Search Bar (hidden on mobile) */}
          <div className="flex-1 flex justify-center max-w-xl mx-auto hidden sm:flex">
            <div className="w-full flex items-center border border-gray-300 rounded-md bg-white h-12 px-4">
              <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" /></svg>
              <input
                type="text"
                placeholder="Try Saree, Kurti or Search by Product Code"
                className="w-full h-full outline-none border-none bg-transparent text-base text-gray-700 placeholder-gray-400"
                style={{fontFamily: 'Inter, sans-serif'}}
              />
            </div>
          </div>

          {/* Right Nav (hidden on mobile) */}
          <div className="hidden sm:flex items-center space-x-0 ml-6">
            <a href="#" className="flex items-center px-5 h-20 text-gray-700 hover:text-[#6f2871] font-medium text-base transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:text-[#a100a1] active:scale-95" style={{fontFamily: 'Inter, sans-serif'}}>Become a Supplier</a>
            <div className="h-8 w-px bg-gray-300 mx-1" />
            <Link to="/investor-relations" className="flex items-center px-5 h-20 text-gray-700 hover:text-[#6f2871] font-medium text-base transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:text-[#a100a1] active:scale-95" style={{fontFamily: 'Inter, sans-serif'}}>Investor Relations</Link>
            <div className="h-8 w-px bg-gray-300 mx-1" />
            <a href="#" className="flex flex-col items-center px-5 h-20 text-gray-700 hover:text-[#6f2871] font-medium text-base justify-center transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:text-[#a100a1] active:scale-95">
              <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25v-1.5A2.25 2.25 0 016.75 16.5h10.5a2.25 2.25 0 012.25 2.25v1.5" /></svg>
              <span>Profile</span>
            </a>
            <div className="h-8 w-px bg-gray-300 mx-1" />
            <a href="#" className="flex flex-col items-center px-5 h-20 text-gray-700 hover:text-[#6f2871] font-medium text-base justify-center transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:text-[#a100a1] active:scale-95">
              <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0L7.5 14.25A2.25 2.25 0 009.664 16.5h7.086a2.25 2.25 0 002.164-1.687l1.622-6.486A1.125 1.125 0 0020.5 6.75H5.106m0 0L4.125 3.75m0 0H2.25" /></svg>
              <span>Cart</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu Drawer with slide-in effect */}
        <div className={`sm:hidden fixed inset-0 z-40 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          style={{background: menuOpen ? 'rgba(0,0,0,0.4)' : 'transparent'}}
          onClick={() => setMenuOpen(false)}
        >
          <div
            className={`absolute top-0 right-0 h-full bg-white shadow-lg p-6 flex flex-col w-4/5 max-w-xs transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} rounded-l-xl animate-slide-in`}
            onClick={e => e.stopPropagation()}
          >
            {/* Search Bar */}
            <div className="mb-6">
              <div className="w-full flex items-center border border-gray-300 rounded-md bg-white h-12 px-4">
                <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" /></svg>
                <input
                  type="text"
                  placeholder="Try Saree, Kurti or Search by Product Code"
                  className="w-full h-full outline-none border-none bg-transparent text-base text-gray-700 placeholder-gray-400"
                  style={{fontFamily: 'Inter, sans-serif'}}
                />
              </div>
            </div>
            <a href="#" className="py-3 px-2 text-gray-700 hover:text-[#6f2871] font-medium text-base border-b border-gray-100 transition duration-300 ease-in-out hover:bg-gray-50 hover:scale-105 focus:outline-none focus:text-[#a100a1] active:scale-95" style={{fontFamily: 'Inter, sans-serif'}}>Become a Supplier</a>
            <Link to="/investor-relations" className="py-3 px-2 text-gray-700 hover:text-[#6f2871] font-medium text-base border-b border-gray-100 transition duration-300 ease-in-out hover:bg-gray-50 hover:scale-105 focus:outline-none focus:text-[#a100a1] active:scale-95" style={{fontFamily: 'Inter, sans-serif'}}>Investor Relations</Link>
            <a href="#" className="py-3 px-2 flex items-center text-gray-700 hover:text-[#6f2871] font-medium text-base border-b border-gray-100 transition duration-300 ease-in-out hover:bg-gray-50 hover:scale-105 focus:outline-none focus:text-[#a100a1] active:scale-95">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25v-1.5A2.25 2.25 0 016.75 16.5h10.5a2.25 2.25 0 012.25 2.25v1.5" /></svg>
              Profile
            </a>
            <a href="#" className="py-3 px-2 flex items-center text-gray-700 hover:text-[#6f2871] font-medium text-base transition duration-300 ease-in-out hover:bg-gray-50 hover:scale-105 focus:outline-none focus:text-[#a100a1] active:scale-95">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0L7.5 14.25A2.25 2.25 0 009.664 16.5h7.086a2.25 2.25 0 002.164-1.687l1.622-6.486A1.125 1.125 0 0020.5 6.75H5.106m0 0L4.125 3.75m0 0H2.25" /></svg>
              Cart
            </a>
          </div>
        </div>
      </nav>
      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
} 