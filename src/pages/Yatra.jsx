import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { tours } from '../data/data';

// Show only Gujarat & Maharashtra yatra routes
const sortedTours = tours.filter(t =>
  t.state === 'महाराष्ट्र (विशेष यात्रा)' || t.state === 'गुजरात (विशेष यात्रा)'
);

export default function Yatra() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4">आमची धार्मिक यात्रा</h1>
          <p className="text-lg font-semibold text-gray-600 max-w-2xl mx-auto">
            मध्यप्रदेश, उत्तरप्रदेश, नेपाळ, बिहार, गुजरात आणि महाराष्ट्र राज्यांमधील पवित्र स्थळांची नयनरम्य सफर.
          </p>
        </div>

        <div className="space-y-10">
          {sortedTours.map((tour, stateIndex) => (
            <motion.div 
              key={tour.state}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-8 border-b border-orange-100 pb-4">
                <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-bold tracking-wider">
                  राज्य
                </span>
                <h2 className="text-3xl font-extrabold text-gray-800">{tour.state}</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tour.places.map((place) => (
                  <Link 
                    key={place.name} 
                    to={`/place/${place.name}`}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-50 h-full flex flex-col">
                      <div className="relative h-56 overflow-hidden">
                        <img 
                          src={place.image} 
                          alt={place.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-2xl font-extrabold text-white drop-shadow-md mb-1">
                            {place.name}
                          </h3>
                          <p className="text-sm font-bold text-orange-200 line-clamp-2 md:line-clamp-3">
                            ({place.subInfo})
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
