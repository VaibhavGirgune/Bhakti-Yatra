import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { tours } from '../../data/data';
import L from 'leaflet';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, X, MapPin, Navigation, Maximize2,
  ExternalLink, Play, ChevronRight, Bus, Map,
  Info, Home
} from 'lucide-react';

import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import markerShadowPng from 'leaflet/dist/images/marker-shadow.png';
L.Marker.prototype.options.icon = L.icon({
  iconUrl: markerIconPng, shadowUrl: markerShadowPng, iconAnchor: [12, 41],
});

/* ─── Constants ─────────────────────────────────────── */
const RAHURI = { lat: 19.3917, lng: 74.6494, name: 'राहुरी' };

const STATE_CFG = {
  'मध्यप्रदेश': { color: '#7c3aed', light: '#ede9fe', label: 'MP' },
  'उत्तरप्रदेश': { color: '#2563eb', light: '#dbeafe', label: 'UP' },
  'नेपाळ':       { color: '#dc2626', light: '#fee2e2', label: 'NP' },
  'बिहार':       { color: '#d97706', light: '#fef3c7', label: 'BR' },
  'महाराष्ट्र':  { color: '#059669', light: '#d1fae5', label: 'MH' },
  'ओडिशा':       { color: '#db2777', light: '#fce7f3', label: 'OD' },
  'पश्चिम बंगाल': { color: '#0891b2', light: '#cffafe', label: 'WB' },
  'गुजरात (विशेष यात्रा)': { color: '#b45309', light: '#fef3c7', label: 'GJ' },
  'महाराष्ट्र (विशेष यात्रा)': { color: '#059669', light: '#d1fae5', label: 'MH' },
};

// Optimised route order: Rahuri → Trimbakeshwar → Gujarat → Saptashrungi → Rahuri
const ROUTE_ORDER = [
  'त्र्यंबकेश्वर ज्योतिर्लिंग',
  'गरुडेश्वर (टेंबे स्वामी महाराज समाधी)',
  'स्टॅच्यू ऑफ युनिटी (गंगाद्वार)',
  'कुबेरधाम',
  'नीलकंठ धाम (स्वामीनारायण मंदिर, पोइचा)',
  'जुनागढ गिरनार स्वामीनारायण मंदिर',
  'गिरनार परिक्रमा',
  'गिरनार पर्वत',
  'सोरटी सोमनाथ',
  'बेट द्वारका',
  'द्वारका',
  'जलाराम मंदिर (वीरपूर)',
  'सप्तश्रृंगी वणी गड',
];

// Verified road distances (km) — sourced from Rome2Rio, Google Maps & official sources
const DISTANCES = {
  'राहुरी→त्र्यंबकेश्वर ज्योतिर्लिंग': 147,
  'त्र्यंबकेश्वर ज्योतिर्लिंग→गरुडेश्वर (टेंबे स्वामी महाराज समाधी)': 298,
  'गरुडेश्वर (टेंबे स्वामी महाराज समाधी)→स्टॅच्यू ऑफ युनिटी (गंगाद्वार)': 6,
  'स्टॅच्यू ऑफ युनिटी (गंगाद्वार)→कुबेरधाम': 113,
  'कुबेरधाम→नीलकंठ धाम (स्वामीनारायण मंदिर, पोइचा)': 3,
  'नीलकंठ धाम (स्वामीनारायण मंदिर, पोइचा)→जुनागढ गिरनार स्वामीनारायण मंदिर': 240,
  'जुनागढ गिरनार स्वामीनारायण मंदिर→गिरनार परिक्रमा': 5,
  'गिरनार परिक्रमा→गिरनार पर्वत': 2,
  'गिरनार पर्वत→सोरटी सोमनाथ': 102,
  'सोरटी सोमनाथ→बेट द्वारका': 264,
  'बेट द्वारका→द्वारका': 35,
  'द्वारका→जलाराम मंदिर (वीरपूर)': 220,
  'जलाराम मंदिर (वीरपूर)→सप्तश्रृंगी वणी गड': 340,
  'सप्तश्रृंगी वणी गड→राहुरी': 183,
};

const STATE_ORDER = ['महाराष्ट्र (विशेष यात्रा)', 'गुजरात (विशेष यात्रा)'];

const MAP_TILES = {
  standard:  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  satellite: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  terrain:   'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
};

/* ─── Custom marker factory ──────────────────────────── */
function pinIcon(color, label, size = 34, active = false) {
  const s = active ? size + 6 : size;
  return L.divIcon({
    className: '',
    html: `
      <div style="position:relative;width:${s}px;height:${s + 10}px;">
        <div style="
          width:${s}px;height:${s}px;border-radius:50% 50% 50% 0;
          transform:rotate(-45deg);background:${color};
          border:3px solid white;
          box-shadow:0 4px 14px rgba(0,0,0,${active ? 0.45 : 0.28});
          display:flex;align-items:center;justify-content:center;
        ">
          <span style="transform:rotate(45deg);color:white;font-size:${s * 0.38}px;font-weight:700;letter-spacing:-0.5px;">
            ${label}
          </span>
        </div>
      </div>`,
    iconSize: [s, s + 10],
    iconAnchor: [s / 2, s + 10],
    popupAnchor: [0, -(s + 10)],
  });
}

function homeIcon() {
  return L.divIcon({
    className: '',
    html: `
      <div style="
        width:40px;height:40px;border-radius:50%;
        background:linear-gradient(135deg,#f97316,#fb923c);
        border:3px solid white;
        box-shadow:0 4px 14px rgba(249,115,22,0.5);
        display:flex;align-items:center;justify-content:center;
      ">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
          fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      </div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -22],
  });
}

/* ─── Map helpers ────────────────────────────────────── */
function FitBounds({ positions }) {
  const map = useMap();
  useEffect(() => {
    if (positions.length > 1)
      map.fitBounds(L.latLngBounds(positions), { padding: [60, 60] });
  }, []);
  return null;
}

function FlyTo({ target }) {
  const map = useMap();
  useEffect(() => {
    if (target) map.flyTo([target.lat, target.lng], 13, { duration: 1.4 });
  }, [target]);
  return null;
}

/* ─── Main Component ─────────────────────────────────── */
export default function LiveLocation() {
  const [selected, setSelected]       = useState(null);
  const [flyTarget, setFlyTarget]     = useState(null);
  const [filterState, setFilterState] = useState('all');
  const [panelOpen, setPanelOpen]     = useState(true);
  const [search, setSearch]           = useState('');
  const [activeTab, setActiveTab]     = useState('list'); // list | info

  const allPlaces = tours.flatMap(t =>
    t.places.filter(p => p.lat && p.lng).map(p => ({ ...p, state: t.state }))
  );
  // Sort by optimised route order
  const ordered = ROUTE_ORDER
    .map(name => allPlaces.find(p => p.name === name))
    .filter(Boolean);

  // Waypoints to keep route on land (avoid sea between Gangasagar and Puri)
  const WAYPOINTS = {
    'गंगासागर→जगन्नाथपुरी': [[22.33, 87.32], [21.48, 86.92]],
  };

  const routePoints = (() => {
    const pts = [[RAHURI.lat, RAHURI.lng]];
    for (let i = 0; i < ordered.length; i++) {
      const cur = ordered[i];
      const next = ordered[i + 1];
      pts.push([cur.lat, cur.lng]);
      if (next) {
        const key = `${cur.name}→${next.name}`;
        if (WAYPOINTS[key]) WAYPOINTS[key].forEach(w => pts.push(w));
      }
    }
    pts.push([RAHURI.lat, RAHURI.lng]);
    return pts;
  })();

  const filtered = ordered.filter(p => {
    const ms = filterState === 'all' || p.state === filterState;
    const mq = !search || p.name.includes(search) || p.state.includes(search);
    return ms && mq;
  });

  const handleSelect = (place) => {
    setSelected(place);
    setFlyTarget(place);
    setActiveTab('info');
  };

  const stateCounts = STATE_ORDER.reduce((acc, s) => {
    acc[s] = ordered.filter(p => p.state === s).length;
    return acc;
  }, {});

  return (
    <div className="h-[calc(100vh-64px)] w-full flex relative overflow-hidden font-sans">

      {/* ══════════════ SIDE PANEL ══════════════ */}
      <AnimatePresence>
        {panelOpen && (
          <motion.aside
            initial={{ x: -360 }} animate={{ x: 0 }} exit={{ x: -360 }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            className="absolute left-0 top-0 h-full w-[340px] bg-white z-[1000] flex flex-col shadow-2xl"
            style={{ borderRight: '1px solid #f1f5f9' }}
          >
            {/* ── Header ── */}
            <div className="bg-gradient-to-br from-orange-500 via-orange-500 to-amber-400 px-5 pt-5 pb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
                    <Map size={18} className="text-white" />
                  </div>
                  <div>
                    <h1 className="text-white font-extrabold text-base leading-tight">यात्रा मार्ग</h1>
                    <p className="text-orange-100 text-[11px] font-semibold">श्री दत्त यात्रा</p>
                  </div>
                </div>
                <button onClick={() => setPanelOpen(false)}
                  className="w-7 h-7 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                  <X size={14} className="text-white" />
                </button>
              </div>

              {/* Search */}
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="तीर्थस्थळ शोधा..."
                  className="w-full pl-8 pr-3 py-2.5 rounded-xl text-sm bg-white text-gray-800 outline-none shadow-sm placeholder-gray-400"
                />
                {search && (
                  <button onClick={() => setSearch('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <X size={13} />
                  </button>
                )}
              </div>
            </div>

            {/* ── Tabs ── */}
            <div className="flex border-b border-gray-100">
              {[['list', 'यादी', <Navigation size={13} />], ['info', 'माहिती', <Info size={13} />]].map(([tab, label, ic]) => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-xs font-semibold transition-colors ${activeTab === tab ? 'text-orange-600 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-700'}`}>
                  {ic}{label}
                </button>
              ))}
            </div>

            {/* ── Tab: List ── */}
            {activeTab === 'list' && (
              <>
                {/* State filter chips */}
                <div className="flex gap-1.5 px-4 py-2.5 overflow-x-auto border-b border-gray-50"
                  style={{ scrollbarWidth: 'none' }}>
                  <button onClick={() => setFilterState('all')}
                    className={`shrink-0 px-3 py-1 rounded-full text-[11px] font-bold transition-all border ${filterState === 'all' ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-gray-500 border-gray-200 hover:border-orange-300'}`}>
                    सर्व ({ordered.length})
                  </button>
                  {STATE_ORDER.map(s => (
                    <button key={s} onClick={() => setFilterState(s)}
                      className={`shrink-0 px-3 py-1 rounded-full text-[11px] font-bold transition-all border ${filterState === s ? 'text-white border-transparent' : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'}`}
                      style={filterState === s ? { background: STATE_CFG[s].color, borderColor: STATE_CFG[s].color } : {}}>
                      {STATE_CFG[s].label} ({stateCounts[s]})
                    </button>
                  ))}
                </div>

                {/* Places list */}
                <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
                  {/* Rahuri row */}
                  <button onClick={() => { setFlyTarget(RAHURI); setSelected(null); }}
                    className="w-full flex items-center gap-3 px-4 py-3 border-b border-gray-50 hover:bg-orange-50 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-sm shrink-0">
                      <Home size={16} className="text-white" />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <p className="font-bold text-gray-800 text-sm">राहुरी</p>
                      <p className="text-[11px] text-orange-500 font-medium">सुरुवात · शेवट</p>
                    </div>
                    <span className="text-[10px] bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-bold shrink-0">BASE</span>
                  </button>

                  {filtered.map((place, i) => {
                    const cfg = STATE_CFG[place.state];
                    const isActive = selected?.name === place.name;
                    const routeIdx = ordered.findIndex(p => p.name === place.name);
                    const prevName = routeIdx === 0 ? 'राहुरी' : ordered[routeIdx - 1]?.name;
                    const distKey = `${prevName}→${place.name}`;
                    const dist = DISTANCES[distKey];
                    return (
                      <motion.button key={place.name} whileHover={{ x: 3 }}
                        onClick={() => handleSelect(place)}
                        className={`w-full flex items-center gap-3 px-4 py-3 border-b border-gray-50 transition-colors text-left ${isActive ? 'bg-orange-50' : 'hover:bg-gray-50'}`}
                        style={isActive ? { borderLeft: `3px solid ${cfg.color}` } : {}}>
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm shrink-0 text-white text-xs font-extrabold"
                          style={{ background: cfg.color }}>
                          {routeIdx + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-extrabold text-gray-800 text-sm truncate">{place.name}</p>
                          <p className="text-xs font-semibold text-gray-500 truncate leading-tight mt-0.5">{place.subInfo}</p>
                          {dist && (
                            <p className="text-[10px] text-orange-500 font-bold mt-0.5">📍 {prevName} पासून ~{dist} किमी</p>
                          )}
                        </div>
                        <div className="flex flex-col items-end gap-1 shrink-0">
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md"
                            style={{ background: cfg.light, color: cfg.color }}>{cfg.label}</span>
                          <ChevronRight size={12} className="text-gray-300" />
                        </div>
                      </motion.button>
                    );
                  })}

                  {/* ── Return to Rahuri (last entry) ── */}
                  <button onClick={() => { setFlyTarget(RAHURI); setSelected(null); }}
                    className="w-full flex items-center gap-3 px-4 py-3 border-b border-gray-50 hover:bg-orange-50 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-sm shrink-0">
                      <Home size={16} className="text-white" />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <p className="font-bold text-gray-800 text-sm">राहुरी</p>
                      <p className="text-[11px] text-orange-500 font-medium">परतणे — यात्रा समाप्ती</p>
                      <p className="text-[10px] text-orange-500 font-bold mt-0.5">📍 सप्तश्रृंगी वणी गड पासून ~{DISTANCES['सप्तश्रृंगी वणी गड→राहुरी']} किमी</p>
                    </div>
                    <span className="text-[10px] bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-bold shrink-0">END</span>
                  </button>
                </div>
              </>
            )}

            {/* ── Tab: Info ── */}
            {activeTab === 'info' && (
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {selected ? (
                  <>
                    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                      <img src={selected.image} alt={selected.name}
                        className="w-full h-36 object-cover" />
                      <div className="p-4">
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white"
                          style={{ background: STATE_CFG[selected.state]?.color }}>
                          {selected.state}
                        </span>
                        <h2 className="font-bold text-gray-900 text-lg mt-2">{selected.name}</h2>
                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{selected.subInfo}</p>
                        <p className="text-xs text-gray-600 mt-3 leading-relaxed line-clamp-4">{selected.description}</p>
                      </div>
                    </div>

                    {/* Highlights */}
                    {selected.highlights?.length > 0 && (
                      <div>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">ठळक वैशिष्ट्ये</p>
                        <div className="grid grid-cols-2 gap-2">
                          {selected.highlights.slice(0, 4).map((h, i) => (
                            <div key={i} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                              <span className="text-lg">{h.icon}</span>
                              <p className="text-xs font-semibold text-gray-700 mt-1">{h.title}</p>
                              <p className="text-[10px] text-gray-400 mt-0.5">{h.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Links */}
                    <div className="flex gap-2">
                      <a href={selected.wikipediaUrl} target="_blank" rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-blue-50 text-blue-600 text-xs font-semibold hover:bg-blue-100 transition-colors border border-blue-100">
                        <ExternalLink size={12} /> Wikipedia
                      </a>
                      <a href={selected.youtubeUrl} target="_blank" rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-red-50 text-red-600 text-xs font-semibold hover:bg-red-100 transition-colors border border-red-100">
                        <Play size={12} /> YouTube
                      </a>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-48 text-center">
                    <MapPin size={32} className="text-gray-200 mb-3" />
                  <p className="text-gray-400 text-sm font-bold">नकाशावर स्थळ निवडा</p>
                    <p className="text-gray-400 text-xs font-semibold mt-1">माहिती येथे दिसेल</p>
                  </div>
                )}
              </div>
            )}

            {/* ── Stats Footer ── */}
            <div className="grid grid-cols-3 divide-x divide-gray-100 border-t border-gray-100 bg-gray-50 shrink-0">
              {[
                { icon: <MapPin size={14} />, label: 'तीर्थस्थळे', value: `${ordered.length}+` },
                { icon: <Map size={14} />,    label: 'राज्ये',      value: '2' },
                { icon: <Bus size={14} />,    label: 'किमी',        value: '~1,958' },
              ].map(s => (
                <div key={s.label} className="py-3 text-center">
                  <div className="flex items-center justify-center gap-1 text-orange-500 mb-0.5">{s.icon}</div>
                  <p className="text-orange-600 font-extrabold text-base leading-tight">{s.value}</p>
                  <p className="text-gray-400 text-[10px] font-bold">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* ══════════════ MAP ══════════════ */}
      <div className="flex-1 relative">
        <MapContainer center={[23, 79]} zoom={5} zoomControl={false}
          style={{ height: '100%', width: '100%', zIndex: 0 }}>

          <TileLayer url={MAP_TILES['standard']}
            attribution='&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a>' />
          <ZoomControl position="bottomright" />
          <FitBounds positions={routePoints} />
          {flyTarget && <FlyTo target={flyTarget} />}

          {/* Route polyline */}
          <Polyline positions={routePoints}
            pathOptions={{ color: '#f97316', weight: 3.5, opacity: 0.8, dashArray: '10 8' }} />

          {/* Rahuri */}
          <Marker position={[RAHURI.lat, RAHURI.lng]} icon={homeIcon()}>
            <Popup>
              <div className="text-center p-1 min-w-[130px]">
                <p className="font-bold text-orange-600 text-sm">राहुरी</p>
                <p className="text-xs text-gray-500 mt-0.5">यात्रेची सुरुवात व शेवट</p>
              </div>
            </Popup>
          </Marker>

          {/* Place markers */}
          {ordered.map((place, i) => {
            const cfg = STATE_CFG[place.state];
            const isActive = selected?.name === place.name;
            return (
              <Marker key={i}
                position={[place.lat, place.lng]}
                icon={pinIcon(cfg.color, cfg.label, 32, isActive)}
                eventHandlers={{ click: () => handleSelect(place) }}>
                <Popup>
                  <div className="min-w-[170px] p-1">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white"
                      style={{ background: cfg.color }}>{place.state}</span>
                    <h3 className="font-bold text-gray-800 text-sm mt-1.5">{place.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{place.subInfo}</p>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>

        {/* ── Open panel button ── */}
        {!panelOpen && (
          <motion.button
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            onClick={() => setPanelOpen(true)}
            className="absolute top-4 left-4 z-[400] bg-white shadow-lg rounded-xl px-4 py-2.5 flex items-center gap-2 text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-orange-600 border border-gray-200 transition-colors">
            <Map size={15} /> यात्रा मार्ग
          </motion.button>
        )}

        {/* ── Fit all button ── */}
        <button
          onClick={() => { setFlyTarget(null); }}
          className="absolute bottom-32 right-4 z-[400] bg-white shadow-lg rounded-xl p-2.5 border border-gray-200 hover:bg-orange-50 hover:text-orange-600 text-gray-600 transition-colors"
          title="सर्व दाखवा">
          <Maximize2 size={16} />
        </button>



        {/* ── Route strip ── */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[400] bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg px-5 py-2.5 border border-gray-100 flex items-center gap-2 text-xs text-gray-600 font-medium whitespace-nowrap max-w-[90vw] overflow-x-auto"
          style={{ scrollbarWidth: 'none' }}>
          <button onClick={() => setFlyTarget(RAHURI)} className="flex items-center gap-1 hover:text-orange-600 transition-colors shrink-0">
            <Home size={12} className="text-orange-500" />
            <span className="text-orange-600 font-bold">राहुरी</span>
          </button>
          {ordered.map((place, i) => {
            const cfg = STATE_CFG[place.state];
            const distKey = `${i === 0 ? 'राहुरी' : ordered[i-1].name}→${place.name}`;
            const dist = DISTANCES[distKey];
            return (
              <span key={place.name} className="flex items-center gap-1 shrink-0">
                <ChevronRight size={11} className="text-gray-300" />
                {dist && <span className="text-gray-400 text-[10px]">{dist}km</span>}
                <ChevronRight size={11} className="text-gray-300" />
                <button onClick={() => handleSelect(place)}
                  className="font-bold hover:underline transition-colors"
                  style={{ color: cfg.color }}>
                  {place.name}
                </button>
              </span>
            );
          })}
          <span className="flex items-center gap-1 shrink-0">
            <ChevronRight size={11} className="text-gray-300" />
            <span className="text-gray-400 text-[10px]">{DISTANCES['सप्तश्रृंगी वणी गड→राहुरी']}km</span>
            <ChevronRight size={11} className="text-gray-300" />
            <Home size={12} className="text-orange-500" />
            <span className="text-orange-600 font-bold">राहुरी</span>
          </span>
        </div>
      </div>
    </div>
  );
}
