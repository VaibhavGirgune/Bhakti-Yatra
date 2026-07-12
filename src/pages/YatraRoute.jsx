import React from 'react';
import { motion } from 'framer-motion';

const ROUTE_STOPS = [
  'राहुरी',
  'त्र्यंबकेश्वर ज्योतिर्लिंग',
  'गंगाद्वार',
  'स्टॅच्यू ऑफ युनिटी (केवडिया)',
  'कुबेर भंडारी मंदिर',
  'नीलकंठ धाम (पोइचा)',
  'उनाई माता मंदिर',
  'जलाराम मंदिर (वीरपूर)',
  'गिरनार (BAPS स्वामीनारायण मंदिर)',
  'गिरनार परिक्रमा',
  'जटा शंकर',
  'अंबा माता मंदिर',
  'गोरखनाथ शिखर',
  'गुरु दत्तात्रेय शिखर',
  'सोमनाथ महादेव मंदिर',
  'त्रिवेणी संगम',
  'भालका तीर्थ',
  'गीता मंदिर',
  'लक्ष्मी नारायण मंदिर',
  'सूर्य मंदिर',
  'पंच पांडव गुफा',
  'बाण गंगा',
  'द्वारका धाम',
  'नागेश्वर ज्योतिर्लिंग',
  'बेट द्वारका',
  'सप्तश्रृंगी देवी मंदिर (वणी)',
];

// Color per region
const REGION_COLOR = (stop) => {
  const mh = ['राहुरी', 'त्र्यंबकेश्वर ज्योतिर्लिंग', 'सप्तश्रृंगी देवी मंदिर (वणी)'];
  if (mh.includes(stop)) return { bg: 'bg-green-500', text: 'text-green-600', border: 'border-green-200', light: 'bg-green-50', label: 'MH' };
  return { bg: 'bg-amber-500', text: 'text-amber-600', border: 'border-amber-200', light: 'bg-amber-50', label: 'GJ' };
};

export default function YatraRoute() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            🛕 यात्रा मार्ग
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
            आमचा पवित्र यात्रा मार्ग
          </h1>
          <p className="text-gray-500 text-base font-medium mb-2">
            राहुरी ते गुजरात-महाराष्ट्र — {ROUTE_STOPS.length - 1} पवित्र तीर्थक्षेत्रे
          </p>
          {/* Legend */}
          <div className="flex justify-center gap-4 mt-3">
            <span className="flex items-center gap-1.5 text-xs font-bold text-green-700">
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block" /> महाराष्ट्र
            </span>
            <span className="flex items-center gap-1.5 text-xs font-bold text-amber-700">
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" /> गुजरात
            </span>
          </div>
        </div>

        {/* Route Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {ROUTE_STOPS.map((stop, i) => {
            const isHome = i === 0 || i === ROUTE_STOPS.length - 1;
            const region = REGION_COLOR(stop);
            return (
              <motion.div
                key={`${stop}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 10) * 0.05 }}
                className={`bg-white rounded-2xl border p-4 flex flex-col items-center text-center gap-2 shadow-sm hover:shadow-md transition-all
                  ${isHome ? 'border-orange-400 bg-orange-50' : region.border}`}
              >
                <span className={`w-8 h-8 rounded-full text-sm font-extrabold flex items-center justify-center shadow text-white
                  ${isHome ? 'bg-orange-500' : region.bg}`}>
                  {isHome ? '🏠' : i}
                </span>
                <p className="text-xs font-bold text-gray-800 leading-snug">{stop}</p>
                {!isHome && (
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${region.light} ${region.text}`}>
                    {region.label}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Full route strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 bg-white rounded-2xl border border-orange-100 shadow-sm p-5"
        >
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">📍 संपूर्ण मार्ग</p>
          <p className="text-sm font-semibold text-gray-700 leading-relaxed">
            {ROUTE_STOPS.join(' → ')}
          </p>
        </motion.div>

      </div>
    </div>
  );
}
