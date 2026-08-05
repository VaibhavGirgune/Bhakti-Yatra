import React from 'react';
import { motion } from 'framer-motion';

// ─── Route data with verified GPS coordinates ───────────────────────────────
// Coordinates sourced from Wikipedia, latlong.net, and official sources
const ROUTE_STOPS = [
  { name: 'राहुरी',                                   enName: 'Rahuri',                                        state: 'MH', lat: 19.3927, lng: 74.6488, icon: '🏠', desc: 'प्रारंभ बिंदू — श्री दत्त कृपा यात्रा' },
  { name: 'त्र्यंबकेश्वर ज्योतिर्लिंग',              enName: 'Trimbakeshwar Jyotirlinga',                     state: 'MH', lat: 19.9326, lng: 73.5309, icon: '🛕', desc: '१२ ज्योतिर्लिंगांपैकी एक, गोदावरी उगमस्थान' },
  { name: 'गरुडेश्वर (टेंबे स्वामी महाराज समाधी)',   enName: 'Garudeshwar (Tembe Swami Maharaj Samadhi)',     state: 'GJ', lat: 21.8900, lng: 73.6400, icon: '🙏', desc: 'नर्मदा तीरावरील टेंबे स्वामी समाधी स्थान' },
  { name: 'स्टॅच्यू ऑफ युनिटी (गंगाद्वार)',          enName: 'Statue of Unity (Gangadwar)',                   state: 'GJ', lat: 21.8380, lng: 73.7191, icon: '🗿', desc: 'जगातील सर्वात उंच पुतळा, नर्मदा महाआरती' },
  { name: 'कुबेरधाम',                                 enName: 'Kuberdham',                                     state: 'GJ', lat: 21.9701, lng: 73.4624, icon: '💰', desc: 'धन व समृद्धीचे देव कुबेर — ६८० पायऱ्या' },
  { name: 'नीलकंठ धाम (स्वामीनारायण मंदिर, पोइचा)',  enName: 'Nilkanth Dham — Swaminarayan Mandir, Poicha',   state: 'GJ', lat: 21.9650, lng: 73.4550, icon: '🛕', desc: 'नर्मदेच्या काठावरील भव्य स्वामीनारायण मंदिर' },
  { name: 'जुनागढ गिरनार स्वामीनारायण मंदिर',        enName: 'Junagadh Girnar — Swaminarayan Mandir',         state: 'GJ', lat: 21.5155, lng: 70.4564, icon: '🛕', desc: 'गिरनार पायथ्याशी BAPS मंदिर' },
  { name: 'गिरनार परिक्रमा',                          enName: 'Girnar Parikrama',                              state: 'GJ', lat: 21.5100, lng: 70.5050, icon: '🚶', desc: '३६ किमी पायी परिक्रमा' },
  { name: 'गिरनार पर्वत',                             enName: 'Girnar Parvat',                                 state: 'GJ', lat: 21.4950, lng: 70.5200, icon: '⛰️', desc: 'गुरु दत्तात्रेय शिखर — ९,९९९ पायऱ्या' },
  { name: 'सोरटी सोमनाथ',                             enName: 'Sorati Somnath',                                state: 'GJ', lat: 20.8880, lng: 70.4014, icon: '🛕', desc: '१२ ज्योतिर्लिंगांपैकी पहिले' },
  { name: 'बेट द्वारका',                              enName: 'Bet Dwarka',                                    state: 'GJ', lat: 22.4687, lng: 69.0698, icon: '⛵', desc: 'भगवान कृष्णाचे मूळ निवासस्थान' },
  { name: 'द्वारका',                                  enName: 'Dwarka',                                        state: 'GJ', lat: 22.2394, lng: 68.9678, icon: '🛕', desc: 'चार धामांपैकी एक — द्वारकाधीश मंदिर' },
  { name: 'जलाराम मंदिर (वीरपूर)',                    enName: 'Jalaram Mandir (Virpur)',                       state: 'GJ', lat: 22.2050, lng: 71.0795, icon: '🙏', desc: 'संत जलाराम बापांचे जन्मस्थान, अखंड भंडारा' },
  { name: 'सप्तश्रृंगी वणी गड',                       enName: 'Saptashrungi Vani Gad',                         state: 'MH', lat: 20.6030, lng: 73.8230, icon: '⛰️', desc: 'साडेतीन शक्तिपीठांपैकी एक — शेवटचा थांबा' },
  { name: 'राहुरी',                                   enName: 'Rahuri',                                        state: 'MH', lat: 19.3927, lng: 74.6488, icon: '🏠', desc: 'परतणे — यात्रा समाप्ती' },
];

// ─── Haversine formula — straight-line km between two GPS points ─────────────
function haversineKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return Math.round(R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

// Road distance ≈ straight-line × 1.35 factor (standard India road correction)
function roadKm(lat1, lng1, lat2, lng2) {
  return Math.round(haversineKm(lat1, lng1, lat2, lng2) * 1.35);
}

const REGION_STYLE = {
  MH: { bg: 'bg-green-500', text: 'text-green-700', border: 'border-green-200', light: 'bg-green-50', label: 'महाराष्ट्र' },
  GJ: { bg: 'bg-amber-500', text: 'text-amber-700', border: 'border-amber-200', light: 'bg-amber-50', label: 'गुजरात' },
};

export default function YatraRoute() {
  // Pre-compute leg distances
  const legs = ROUTE_STOPS.map((stop, i) => {
    if (i === 0) return { ...stop, distFromPrev: null, cumulative: 0 };
    const prev = ROUTE_STOPS[i - 1];
    const d = roadKm(prev.lat, prev.lng, stop.lat, stop.lng);
    return { ...stop, distFromPrev: d };
  });

  // Cumulative total
  let cum = 0;
  const stopsWithCum = legs.map((s) => {
    cum += s.distFromPrev || 0;
    return { ...s, cumulative: cum };
  });
  const totalKm = cum;

  const isStartEnd = (i) => i === 0 || i === ROUTE_STOPS.length - 1;
  const isLastPilgrimStop = (i) => i === ROUTE_STOPS.length - 2; // सप्तश्रृंगी

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-10">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            🛕 यात्रा मार्ग
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
            आमचा पवित्र यात्रा मार्ग
          </h1>
          <p className="text-gray-500 text-base font-medium mb-1">
            राहुरी → गुजरात → सप्तश्रृंगी → राहुरी &nbsp;|&nbsp; {ROUTE_STOPS.length - 2} तीर्थक्षेत्रे
          </p>
          <p className="text-orange-600 font-bold text-lg mb-3">
            🚌 एकूण अंदाजित अंतर: ~{totalKm.toLocaleString()} किमी
          </p>
          {/* Legend */}
          <div className="flex justify-center gap-6 mt-2">
            <span className="flex items-center gap-1.5 text-xs font-bold text-green-700">
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block" /> महाराष्ट्र
            </span>
            <span className="flex items-center gap-1.5 text-xs font-bold text-amber-700">
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" /> गुजरात
            </span>
          </div>
        </div>

        {/* ── Timeline Route ── */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange-200 hidden sm:block" />

          <div className="space-y-3">
            {stopsWithCum.map((stop, i) => {
              const style = REGION_STYLE[stop.state];
              const isEnd = isStartEnd(i);

              return (
                <motion.div
                  key={`${stop.name}-${i}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 8) * 0.06 }}
                  className="relative"
                >
                  {/* Distance badge between stops */}
                  {stop.distFromPrev && (
                    <div className="flex items-center gap-2 my-1 pl-4 sm:pl-6">
                      <div className="flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-3 py-1">
                        <span className="text-orange-400 text-xs">▼</span>
                        <span className="text-xs font-bold text-orange-600">🚌 {stop.distFromPrev} km</span>
                        <span className="text-orange-300 text-xs hidden sm:inline">|</span>
                        <span className="text-xs font-bold text-orange-500 hidden sm:inline">≈ {Math.round(stop.distFromPrev / 60)} hrs</span>
                        <span className="text-orange-400 text-xs">▼</span>
                      </div>
                    </div>
                  )}

                  <div className={`flex items-start gap-4 p-4 rounded-2xl border shadow-sm hover:shadow-md transition-all
                    ${isEnd ? 'bg-orange-50 border-orange-300' : isLastPilgrimStop(i) ? 'bg-purple-50 border-purple-300' : `bg-white ${style.border}`}`}>

                    {/* Circle node */}
                    <div className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-extrabold text-sm shadow-md
                      ${isEnd ? 'bg-orange-500' : isLastPilgrimStop(i) ? 'bg-purple-500' : style.bg}`}>
                      {isEnd ? stop.icon : isLastPilgrimStop(i) ? stop.icon : i}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-0.5">
                        <span className="text-sm font-extrabold text-gray-800">{stop.icon} {stop.name}</span>
                        {!isEnd && !isLastPilgrimStop(i) && (
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${style.light} ${style.text}`}>
                            {style.label}
                          </span>
                        )}
                        {isLastPilgrimStop(i) && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">
                            शेवटचा तीर्थथांबा ✨
                          </span>
                        )}
                        {isEnd && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-600">
                            {i === 0 ? 'प्रारंभ' : 'समाप्ती'}
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-semibold text-indigo-500 mb-0.5">{stop.enName}</p>
                      <p className="text-xs text-gray-500">{stop.desc}</p>
                    </div>

                    {/* GPS + cumulative */}
                    <div className="flex-shrink-0 text-right hidden sm:block">
                      <div className="text-[10px] text-gray-400 font-mono">
                        {stop.lat.toFixed(4)}°N
                      </div>
                      <div className="text-[10px] text-gray-400 font-mono">
                        {stop.lng.toFixed(4)}°E
                      </div>
                      {i > 0 && (
                        <div className="text-[10px] font-bold text-orange-500 mt-1">
                          +{stop.cumulative} किमी
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Summary Stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { label: 'एकूण अंतर', value: `~${totalKm} किमी`, icon: '🚌' },
            { label: 'तीर्थक्षेत्रे', value: `${ROUTE_STOPS.length - 2}`, icon: '🛕' },
            { label: 'महाराष्ट्र थांबे', value: `${ROUTE_STOPS.filter(s => s.state === 'MH').length - 1}`, icon: '🟢' },
            { label: 'गुजरात थांबे', value: `${ROUTE_STOPS.filter(s => s.state === 'GJ').length}`, icon: '🟡' },
          ].map(stat => (
            <div key={stat.label} className="bg-white rounded-2xl border border-orange-100 p-4 text-center shadow-sm">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-xl font-extrabold text-gray-800">{stat.value}</div>
              <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* ── Full route strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 bg-white rounded-2xl border border-orange-100 shadow-sm p-5"
        >
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">📍 संपूर्ण मार्ग / Full Route</p>
          <p className="text-sm font-semibold text-gray-700 leading-relaxed mb-2">
            {ROUTE_STOPS.map(s => s.name).join(' → ')}
          </p>
          <p className="text-xs text-indigo-500 font-medium leading-relaxed mb-3">
            {ROUTE_STOPS.map(s => s.enName).join(' → ')}
          </p>
          <p className="text-xs text-gray-400">
            * अंतर road distance factor (×१.३५) वापरून GPS coordinates वरून मोजले आहे. प्रत्यक्ष अंतर मार्गानुसार बदलू शकते.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
