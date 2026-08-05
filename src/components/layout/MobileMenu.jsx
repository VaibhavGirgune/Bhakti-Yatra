import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileMenu({ isOpen, setIsOpen }) {
  const links = [
    { name: 'मुख्यपृष्ठ', path: '/' },
    { name: 'तीर्थयात्रा', path: '/yatra' },
    { name: 'बस सेवा', path: '/bus' },
    { name: 'यात्रा मार्ग', path: '/location' },
    { name: 'संपर्क सेवा', path: '/contact' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-16 left-0 w-full bg-white shadow-lg z-40 md:hidden flex flex-col pt-2 pb-4 border-t border-gray-100"
        >
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-6 py-3 text-lg font-medium transition-colors ${
                  isActive ? 'text-orange-600 bg-orange-50 border-l-4 border-orange-500' : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
