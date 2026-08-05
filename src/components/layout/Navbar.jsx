import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'मुख्यपृष्ठ', path: '/' },
    { name: 'तीर्थयात्रा', path: '/yatra' },
    { name: 'बस सेवा', path: '/bus' },
    { name: 'यात्रा मार्ग', path: '/location' },
    { name: 'संपर्क सेवा', path: '/contact' }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <span className="text-2xl font-extrabold text-orange-600">श्री दत्त कृपा यात्रा</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-base font-extrabold transition-colors ${
                    isActive ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}
