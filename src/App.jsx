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
      
      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p className="text-gray-400">© {new Date().getFullYear()} श्री दत्त कृपा यात्रा. सर्व हक्क सुरक्षित.</p>
        <p className="text-gray-600 text-xs mt-1">
          Designed & Developed by{' '}
          <span className="text-gray-400 font-semibold">Vaibhav Girgune</span>
        </p>
      </footer>
    </div>
  );
}

export default App;