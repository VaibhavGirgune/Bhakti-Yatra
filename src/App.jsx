import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home/Home';
import Yatra from './pages/Yatra/Yatra';
import YatraRoute from './pages/YatraRoute/YatraRoute';
import PlaceDetails from './pages/PlaceDetails/PlaceDetails';
import Bus from './pages/Bus/Bus';
import LiveLocation from './pages/LiveLocation/LiveLocation';
import Contact from './pages/Contact/Contact';
import Gallery from './pages/Gallery/Gallery';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/yatra" element={<Yatra />} />
          <Route path="/yatra-route" element={<YatraRoute />} />
          <Route path="/place/:name" element={<PlaceDetails />} />
          <Route path="/bus" element={<Bus />} />
          <Route path="/location" element={<LiveLocation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
      
      {/* Footer */}
      <footer className="bg-[#0f172a] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-5 py-8 flex flex-wrap items-center justify-between gap-y-3 gap-x-6">

          <span className="text-orange-400 font-bold text-xs">🛕 श्री दत्त कृपा यात्रा</span>

          <div className="flex items-center gap-4 text-xs text-gray-400">
            <a href="tel:7058353049" className="hover:text-orange-400 transition-colors font-semibold">📞 7058353049</a>
            <span className="text-gray-700">·</span>
            <span>📍 आझाद चौक, राहुरी</span>
          </div>

          <p className="text-[10px] text-gray-600 text-right">
            © {new Date().getFullYear()} सर्व हक्क सुरक्षित
            <span className="mx-1.5 text-gray-700">·</span>
            अशी वेबसाइट हवी?{' '}
            <a href="tel:7058353049" className="text-orange-500 hover:text-orange-400 font-semibold transition-colors">संपर्क करा</a>
            <span className="mx-1.5 text-gray-700">·</span>
            Dev: <span className="text-gray-500">Vaibhav Girgune</span>
          </p>

        </div>
      </footer>
    </div>
  );
}

export default App;