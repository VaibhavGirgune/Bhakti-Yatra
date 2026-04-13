import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Map, Landmark, Bus, ShieldCheck,
  Shield, AirVent, BookOpen,
  ChevronRight, ArrowDown, MessageCircle, ClipboardList, HandHeart, Phone
} from 'lucide-react';
import { homeSliderImages, tours, contactDetails } from '../data/data';

// Correct display order for route section
const stateOrder = ['मध्यप्रदेश', 'उत्तरप्रदेश', 'नेपाळ', 'बिहार', 'पश्चिम बंगाल', 'ओडिशा', 'महाराष्ट्र'];
const sortedTours = [
  ...stateOrder.map(name => tours.find(t => t.state === name)).filter(Boolean),
  ...tours.filter(t => !stateOrder.includes(t.state)),
];

const featuredPlaces = [
  'इलाहाबाद (प्रयागराज)',
  'अयोध्या',
  'काशी (वाराणसी)',
  'जगन्नाथपुरी',
  'काठमांडू (पशुपतिनाथ)',
];

const stats = [
  { value: "७", label: "पवित्र राज्ये", Icon: Map },
  { value: "15+", label: "तीर्थक्षेत्रे", Icon: Landmark },
  { value: "५०", label: "आरामदायी सीट्स", Icon: Bus },
  { value: "१००%", label: "सुरक्षित प्रवास", Icon: ShieldCheck },
];

const whyUs = [
  {
    Icon: Shield,
    title: "सुरक्षित प्रवास",
    desc: " अनुभवी चालक यांच्यासह संपूर्ण सुरक्षितता.",
    color: "from-blue-50 to-blue-100",
    border: "border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    Icon: AirVent,
    title: "पूर्ण AC बस",
    desc: "२x२ स्लीपर कोच, एअर सस्पेंशन आणि मऊ बेड्ससह आरामदायी प्रवास.",
    color: "from-cyan-50 to-cyan-100",
    border: "border-cyan-200",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
  },
  {
    Icon: BookOpen,
    title: "अनुभवी मार्गदर्शन",
    desc: "प्रत्येक तीर्थक्षेत्राची संपूर्ण माहिती देणारे अनुभवी मार्गदर्शक.",
    color: "from-orange-50 to-orange-100",
    border: "border-orange-200",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative h-[88vh] min-h-[520px] w-full flex items-center justify-center overflow-hidden">
        <img
          src={homeSliderImages[0]}
          alt="Yatra Hero"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1400&h=800&fit=crop";
          }}
          className="absolute inset-0 w-full h-full object-cover scale-105"
          style={{ filter: 'brightness(0.45)' }}
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          {/* badge */}
       

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-5 drop-shadow-xl">
            श्री दत्त कृपा <span className="text-orange-400">यात्रा</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            पवित्र तीर्थक्षेत्रांची सुरक्षित, आरामदायी आणि संस्मरणीय यात्रा —
            <span className="text-orange-300 font-extrabold"> ७ राज्ये, 15+ ठिकाणे</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/yatra"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-orange-500/40 hover:shadow-2xl"
            >
              <Map size={18} /> यात्रा माहिती पहा
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`tel:${contactDetails.phone}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-full border border-white/30 shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Phone size={18} /> आम्हाला कॉल करा
            </a>
          </div>
        </motion.div>

        {/* scroll hint */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
        >
          <ArrowDown size={24} />
        </motion.div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-8 px-4 shadow-lg">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.1)}
              className="flex items-center gap-4"
            >
              <span className="text-4xl flex-shrink-0">{s.Icon && <s.Icon size={36} strokeWidth={1.8} />}</span>
              <div>
                <div className="text-3xl font-extrabold tracking-tight leading-none">{s.value}</div>
                <div className="text-orange-100 text-sm font-extrabold mt-1">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Route Section ── */}
      <section className="py-10 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              यात्रा मार्ग
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              आमचा पवित्र यात्रा मार्ग
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base font-semibold">
              ७ राज्यांमधील 15+ पवित्र तीर्थक्षेत्रांना एकाच यात्रेत भेट द्या
            </p>
          </motion.div>

          {/* Row 1 — 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
            {sortedTours.slice(0, 4).map((tour, i) => (
              <motion.div
                key={tour.state}
                {...fadeUp(i * 0.1)}
                className="relative bg-white border-2 border-orange-100 hover:border-orange-400 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-11 h-11 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center font-extrabold text-lg mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
                <h3 className="font-extrabold text-gray-800 text-base mb-1 whitespace-nowrap">{tour.state}</h3>
                <p className="text-orange-500 text-sm font-bold mb-3">
                  {tour.places.length} ठिकाणे
                </p>
                <ul className="space-y-1.5">
                  {tour.places.slice(0, 3).map(p => (
                    <li key={p.name} className="text-gray-600 text-xs font-semibold flex items-center gap-1.5 justify-center">
                      <span className="w-1 h-1 rounded-full bg-orange-400 inline-block flex-shrink-0" />
                      {p.name}
                    </li>
                  ))}
                  {tour.places.length > 3 && (
                    <li className="text-orange-400 text-xs font-semibold mt-1">
                      + {tour.places.length - 3} अधिक
                    </li>
                  )}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Row 2 — 3 cards centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-3/4 lg:mx-auto">
            {sortedTours.slice(4).map((tour, i) => (
              <motion.div
                key={tour.state}
                {...fadeUp((i + 4) * 0.1)}
                className="relative bg-white border-2 border-orange-100 hover:border-orange-400 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-11 h-11 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center font-extrabold text-lg mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform">
                  {i + 5}
                </div>
                <h3 className="font-extrabold text-gray-800 text-base mb-1 whitespace-nowrap">{tour.state}</h3>
                <p className="text-orange-500 text-sm font-bold mb-3">
                  {tour.places.length} ठिकाणे
                </p>
                <ul className="space-y-1.5">
                  {tour.places.slice(0, 3).map(p => (
                    <li key={p.name} className="text-gray-600 text-xs font-semibold flex items-center gap-1.5 justify-center">
                      <span className="w-1 h-1 rounded-full bg-orange-400 inline-block flex-shrink-0" />
                      {p.name}
                    </li>
                  ))}
                  {tour.places.length > 3 && (
                    <li className="text-orange-400 text-xs font-semibold mt-1">
                      + {tour.places.length - 3} अधिक
                    </li>
                  )}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Highlights Section ── */}
      <section className="py-10 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div {...fadeUp()} className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3">
                प्रमुख ठिकाणे
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                प्रमुख आकर्षणे
              </h2>
            </div>
            <Link
              to="/yatra"
              className="inline-flex items-center gap-1.5 text-orange-600 hover:text-orange-800 font-semibold text-sm border border-orange-200 hover:border-orange-400 px-4 py-2 rounded-full transition-all"
            >
              सर्व पहा <ChevronRight size={14} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {tours.flatMap(t => t.places)
              .filter(p => featuredPlaces.includes(p.name))
              .sort((a, b) => featuredPlaces.indexOf(a.name) - featuredPlaces.indexOf(b.name))
              .map((place, index) => (
              <motion.div key={place.name} {...fadeUp(index * 0.08)}>
                <Link to={`/place/${place.name}`} className="block group h-full">
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-400 overflow-hidden border border-gray-100 h-full flex flex-col">
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4">
                        <h3 className="text-white font-bold text-lg leading-tight drop-shadow">
                          {place.name}
                        </h3>
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <p className="text-gray-600 text-sm font-semibold leading-relaxed line-clamp-2">
                        {place.subInfo}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1 text-orange-500 text-sm font-bold group-hover:gap-2 transition-all">
                        अधिक माहिती <ChevronRight size={13} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-10 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              आमची वैशिष्ट्ये
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              आम्हीच का ?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.12)}
                className={`bg-gradient-to-br ${item.color} border ${item.border} rounded-2xl p-6 flex items-start gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Left icon */}
                <div className={`w-14 h-14 ${item.iconBg} rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0`}>
                  <item.Icon size={26} strokeWidth={1.8} className={item.iconColor} />
                </div>
                {/* Right content */}
                <div>
                  <h3 className="font-extrabold text-gray-800 text-base mb-1.5">{item.title}</h3>
                  <p className="text-gray-700 text-sm font-bold leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Travel Facilities Section ── */}
      <section className="py-10 px-4 md:px-8 bg-orange-50">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-10">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              सुविधा
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              प्रवासात मिळणाऱ्या सुविधा
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Food & Travel */}
            <motion.div {...fadeUp(0.1)} className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100">
              <h3 className="text-lg font-extrabold text-orange-600 mb-4 flex items-center gap-2">
                🍽️ जेवण व नाश्ता
              </h3>
              <ul className="space-y-2.5">
                {[
                  'दोन वेळचे शुद्ध शाकाहारी जेवण',
                  'गरजेनुसार नाश्ता',
                  'सकाळी नाश्ता',
                  'पिण्याचे शुद्ध पाणी (बाटली)',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-gray-700 text-sm font-semibold">
                    <span className="text-green-500 font-bold">✔</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Bus & Comfort */}
            <motion.div {...fadeUp(0.2)} className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100">
              <h3 className="text-lg font-extrabold text-orange-600 mb-4 flex items-center gap-2">
                🚌 बस व प्रवास सुविधा
              </h3>
              <ul className="space-y-2.5">
                {[
                  'संपूर्ण प्रवास स्लीपर कोच AC बसने',
                  'आरामदायी बेड व्यवस्था',
                  'मोबाइल चार्जिंग पॉइंट',
                  'अनुभवी ड्रायव्हर',
                  'सुरक्षित आणि आरामदायी प्रवास',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-gray-700 text-sm font-semibold">
                    <span className="text-green-500 font-bold">✔</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Important Note */}
            <motion.div {...fadeUp(0.4)} className="bg-amber-50 rounded-2xl p-6 shadow-sm border border-amber-200 md:col-span-2">
              <h3 className="text-xl font-extrabold text-amber-700 mb-3 flex items-center gap-2">
                📌 महत्त्वाची सूचना
              </h3>
              <p className="text-gray-700 text-base font-semibold leading-relaxed">
                प्रवासादरम्यान होणारे सर्व सामान्य खर्च (उदा. वाहन खर्च, राहण्याची व्यवस्था, नाश्ता, जेवण व इतर आवश्यक खर्च) हे शेवटी सर्व यात्रेकरूंमध्ये <span className="text-amber-700 font-extrabold">समान प्रमाणात विभागले जातील.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-10 px-4 relative overflow-hidden">
        {/* background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500" />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />

        <motion.div
          {...fadeUp()}
          className="relative z-10 max-w-2xl mx-auto text-center text-white"
        >
          <div className="flex justify-center mb-5">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <HandHeart size={32} className="text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            यात्रेसाठी आजच संपर्क करा
          </h2>
          <p className="text-orange-100 mb-10 text-lg leading-relaxed">
            सीट्स मर्यादित आहेत — आत्ताच बुकिंग करा आणि पवित्र यात्रेचा आनंद घ्या.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={contactDetails.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-green-500/40 hover:shadow-2xl"
            >
              <MessageCircle size={18} /> WhatsApp वर संपर्क करा
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-bold rounded-full border border-white/30 shadow-lg transition-all duration-300 hover:scale-105"
            >
              <ClipboardList size={18} /> संपर्क 
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
