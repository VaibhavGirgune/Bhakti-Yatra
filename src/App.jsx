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
      <footer className="bg-[#0f172a] border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-8">

          {/* Top row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">

            {/* Brand */}
            <div>
              <p className="text-orange-400 font-extrabold text-base">🛕 श्री दत्त कृपा यात्रा</p>
              <p className="text-gray-500 text-sm mt-0.5">गुजरात व महाराष्ट्र — पवित्र तीर्थयात्रा सेवा</p>
            </div>

            {/* Contact */}
            {/* <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
              <a href="tel:7058353049"
                className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors font-bold">
                📞 <span>7058353049</span>
              </a>
              <span className="hidden sm:block text-gray-700">|</span>
              <span className="flex items-center gap-2 text-gray-400">
                📍 <span>आझाद चौक, राहुरी</span>
              </span>
            </div> */}

          </div>

          {/* Divider */}
          <div className="border-t border-white/5 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
            <p>© {new Date().getFullYear()} श्री दत्त कृपा यात्रा. सर्व हक्क सुरक्षित.</p>
            <p>
              अशी वेबसाइट हवी?{' '}
              <a href="tel:7058353049" className="text-orange-400 hover:text-orange-300 font-semibold transition-colors">
                संपर्क करा: 7058353049
              </a>
            </p>
            <p className="text-gray-600">Dev: <span className="text-gray-400 font-medium">Vaibhav Girgune</span></p>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default App;