import React, { useState } from 'react';
import { motion } from 'framer-motion';

const routeData = [
  {
    id: 1,
    state: 'मध्यप्रदेश',
    count: 6,
    places: ['ओंकारेश्वर', 'उज्जैन', 'चित्रकूट', 'गुप्तगोदावरी', 'सती अनुसया', 'मैहर'],
    showMax: 3,
  },
  {
    id: 2,
    state: 'उत्तरप्रदेश',
    count: 4,
    places: ['इलाहाबाद (प्रयागराज)', 'अयोध्या', 'काशी (वाराणसी)', 'गोरखपूर'],
    showMax: 3,
  },
  {
    id: 3,
    state: 'नेपाळ',
    count: 3,
    places: ['मनकामना देवी', 'काठमांडू (पशुपतिनाथ)', 'जनकपूर'],
    showMax: 3,
  },
  {
    id: 4,
    state: 'बिहार',
    count: 2,
    places: ['गया', 'बोधगया'],
    showMax: 3,
  },
  {
    id: 5,
    state: 'पश्चिम बंगाल',
    count: 2,
    places: ['कोलकाता', 'गंगासागर'],
    showMax: 3,
  },
  {
    id: 6,
    state: 'ओडिशा',
    count: 2,
    places: ['जगन्नाथपुरी', 'भुवनेश्वर'],
    showMax: 3,
  },
  {
    id: 7,
    state: 'महाराष्ट्र',
    count: 1,
    places: ['शेगाव'],
    showMax: 3,
  },
];

function RouteCard({ item, index }) {
  const [expanded, setExpanded] = useState(false);
  const visiblePlaces = expanded ? item.places : item.places.slice(0, item.showMax);
  const extraCount = item.places.length - item.showMax;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="bg-white rounded-2xl border border-orange-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-5 flex flex-col gap-3 min-w-0"
    >
      {/* Number badge */}
      <div className="flex justify-center">
        <span className="w-12 h-12 rounded-full bg-orange-500 text-white text-xl font-extrabold flex items-center justify-center shadow-md">
          {item.id}
        </span>
      </div>

      {/* State name */}
      <h3 className="text-center text-base font-extrabold text-gray-800 whitespace-nowrap">{item.state}</h3>

      {/* Place count */}
      <p className="text-center text-sm font-bold text-orange-500">
        {item.count} ठिकाणे
      </p>

      {/* Divider */}
      <div className="border-t border-orange-100" />

      {/* Places list */}
      <ul className="space-y-1">
        {visiblePlaces.map((place) => (
          <li key={place} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-orange-400 mt-0.5">•</span>
            <span>{place}</span>
          </li>
        ))}
      </ul>

      {/* Show more / less */}
      {extraCount > 0 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs font-bold text-orange-500 hover:text-orange-700 text-left transition-colors"
        >
          {expanded ? '▲ कमी दाखवा' : `+ ${extraCount} अधिक`}
        </button>
      )}
    </motion.div>
  );
}

export default function YatraRoute() {
  const firstRow = routeData.slice(0, 4);
  const secondRow = routeData.slice(4);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
            आमचा पवित्र यात्रा मार्ग
          </h1>
          <p className="text-gray-500 text-base font-medium">
            ७ राज्यांमधील 15+ पवित्र तीर्थक्षेत्रांना एकाच यात्रेत भेट द्या
          </p>
        </div>

        {/* Row 1 — 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          {firstRow.map((item, i) => (
            <RouteCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Row 2 — 3 cards, centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-3/4 lg:mx-auto">
          {secondRow.map((item, i) => (
            <RouteCard key={item.id} item={item} index={i + 4} />
          ))}
        </div>
      </div>
    </div>
  );
}
