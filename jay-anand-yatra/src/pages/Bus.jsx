import React from 'react';
import { motion } from 'framer-motion';
import { busSections, busInfoText } from '../data/data';

export default function Bus() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4">आमची बस सुविधा</h1>
          <p className="text-lg font-semibold text-gray-600 max-w-2xl mx-auto">
            {busInfoText}
          </p>
        </div>

        <div className="space-y-16">
          {busSections.map((section, idx) => {
            const isReversed = idx % 2 !== 0;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col gap-8 lg:gap-16 items-center ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-900 relative group">
                    <img 
                      src={section.image} 
                      alt={section.title} 
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = section.fallback;
                      }}
                      className="w-full h-auto object-contain max-h-[400px] group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Information Side */}
                <div className="w-full lg:w-1/2 bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-orange-50">
                  <h2 className="text-3xl font-extrabold text-gray-800 mb-6 border-b border-orange-100 pb-3">
                    {section.title}
                  </h2>
                  <ul className="space-y-5">
                    {section.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 mt-1 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-lg shadow-sm">
                          ✓
                        </div>
                        <span className="text-xl text-gray-700 font-bold leading-relaxed pt-1">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

