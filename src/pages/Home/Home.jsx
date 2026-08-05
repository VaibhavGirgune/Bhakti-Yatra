import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Map, Landmark, ShieldCheck,
  Shield, AirVent, BookOpen,
  ChevronRight, ArrowDown, MessageCircle, ClipboardList, Phone
} from 'lucide-react';
import { tours, contactDetails } from '../../data/data';

// Show Gujarat and Maharashtra yatra routes
const stateOrder = ['महाराष्ट्र (विशेष यात्रा)', 'गुजरात (विशेष यात्रा)'];
const sortedTours = [
  ...stateOrder.map(name => tours.find(t => t.state === name)).filter(Boolean),
];

const featuredPlaces = [
  'त्र्यंबकेश्वर ज्योतिर्लिंग',
  'सोमनाथ महादेव मंदिर',
  'द्वारका धाम',
  'गिरनार परिक्रमा व शिखरे',
  'सप्तश्रृंगी देवी मंदिर (वणी)',
];

const stats = [
  { value: "२", label: "पवित्र राज्ये", Icon: Map },
  { value: "13+", label: "तीर्थक्षेत्रे", Icon: Landmark },
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
      <section className="relative h-[92vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Blurred bg fill for sides */}
        <img
          src="/download.jpg"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center scale-110"
          style={{ filter: 'blur(20px) brightness(0.25)' }}
        />
        {/* Main sharp centered image */}
        <img
          src="/download.jpg"
          alt="Yatra Hero"
          className="absolute top-0 bottom-0 h-full w-auto mx-auto"
          style={{ left: '50%', transform: 'translateX(-50%)', filter: 'brightness(0.6)' }}
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center px-6 max-w-4xl mx-auto w-full absolute bottom-16"
        >
          {/* badge */}
       

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-5 drop-shadow-xl">
            श्री दत्त कृपा <span className="text-orange-400">यात्रा</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            पवित्र तीर्थक्षेत्रांची सुरक्षित, आरामदायी आणि संस्मरणीय यात्रा —
            <span className="text-orange-300 font-extrabold"> गुजरात-महाराष्ट्र, 13+ ठिकाणे</span>
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
      <section className="bg-gradient-to-r from-[#7b1a1a] via-[#a0350a] to-[#7b1a1a] text-white py-6 px-4 shadow-lg border-y-2 border-yellow-600/40">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div key={i} {...fadeUp(i * 0.1)} className="flex items-center gap-4 justify-center">
              <span className="text-yellow-300 flex-shrink-0">{s.Icon && <s.Icon size={32} strokeWidth={1.8} />}</span>
              <div>
                <div className="text-2xl font-extrabold tracking-tight leading-none text-yellow-200">{s.value}</div>
                <div className="text-yellow-100/80 text-sm font-bold mt-0.5">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Route Section ── */}
      <section className="py-10 px-4 md:px-8 bg-[#fdf6e3]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-10">
            <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 border border-yellow-300">
              🕉️ यात्रा मार्ग
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#7b1a1a] mb-3">
              आमचा पवित्र यात्रा मार्ग
            </h2>
            <p className="text-[#a06c08] max-w-xl mx-auto text-base font-semibold">
              गुजरात व महाराष्ट्र राज्यांमधील 13+ पवित्र तीर्थक्षेत्रांना एकाच यात्रेत भेट द्या
            </p>
            <div className="spiritual-divider w-48 mt-4 mx-auto" />
          </motion.div>

          {/* KM Stats */}
          <motion.div {...fadeUp(0.1)} className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { label: 'एकूण अंतर', value: '~1,958 किमी', icon: '🛣️' },
              { label: 'राज्ये', value: '२', icon: '🗺️' },
              { label: 'तीर्थक्षेत्रे', value: '13+', icon: '🛕' },
              { label: 'अंदाजे दिवस', value: '12-15', icon: '📅' },
            ].map(stat => (
              <div key={stat.label} className="flex items-center gap-3 bg-yellow-50 border border-yellow-300 rounded-2xl px-5 py-3 shadow-sm">
                <span className="text-2xl">{stat.icon}</span>
                <div>
                  <p className="text-xs text-[#a06c08] font-semibold">{stat.label}</p>
                  <p className="text-lg font-extrabold text-[#7b1a1a]">{stat.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Route Cards — 2 states centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {sortedTours.map((tour, i) => (
              <motion.div
                key={tour.state}
                {...fadeUp(i * 0.1)}
                className="relative bg-white border-2 border-yellow-300 hover:border-yellow-500 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 group"
                style={{ background: 'linear-gradient(135deg, #fff8f0 0%, #fdf6e3 100%)' }}
              >
                <div className="w-11 h-11 text-white rounded-full flex items-center justify-center font-extrabold text-lg mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform"
                  style={{ background: 'linear-gradient(135deg, #c8860a, #d4580a)' }}>
                  {i + 1}
                </div>
                <h3 className="font-extrabold text-[#7b1a1a] text-base mb-1">{tour.state}</h3>
                <p className="text-[#c8860a] text-sm font-bold mb-3">
                  {tour.places.length} ठिकाणे
                </p>
                <div className="w-12 spiritual-divider mb-3" />
                <ul className="space-y-1.5">
                  {tour.places.slice(0, 4).map(p => (
                    <li key={p.name} className="text-[#7b1a1a]/80 text-xs font-semibold flex items-center gap-1.5 justify-center">
                      <span className="text-yellow-600">🪔</span> {p.name}
                    </li>
                  ))}
                  {tour.places.length > 4 && (
                    <li className="text-[#c8860a] text-xs font-bold mt-1">
                      + {tour.places.length - 4} अधिक
                    </li>
                  )}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gujarat Yatra Route Info ── */}
      <section className="py-8 px-4 md:px-8" style={{ background: 'linear-gradient(135deg, #7b1a1a 0%, #a0350a 50%, #7b1a1a 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-5">
            <span className="inline-block bg-yellow-400/20 text-yellow-200 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3 border border-yellow-400/40">
              🛕 संपूर्ण यात्रा मार्ग
            </span>
            <h3 className="text-yellow-100 font-extrabold text-xl">राहुरी पासून संपूर्ण यात्रा मार्ग</h3>
            <p className="text-yellow-200/70 text-sm mt-1">एकूण ~1,958 किमी • 13 पवित्र ठिकाणे</p>
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="flex flex-wrap justify-center gap-2 text-sm font-bold">
            {[
              { name: 'राहुरी', km: null },
              { name: 'त्र्यंबकेश्वर ज्योतिर्लिंग', km: 147 },
              { name: 'गरुडेश्वर (टेंबे स्वामी महाराज समाधी)', km: 298 },
              { name: 'स्टॅच्यू ऑफ युनिटी (गंगाद्वार)', km: 6 },
              { name: 'कुबेरधाम', km: 113 },
              { name: 'नीलकंठ धाम (स्वामीनारायण मंदिर, पोइचा)', km: 3 },
              { name: 'जुनागढ गिरनार स्वामीनारायण मंदिर', km: 240 },
              { name: 'गिरनार परिक्रमा', km: 5 },
              { name: 'गिरनार पर्वत', km: 2 },
              { name: 'सोरटी सोमनाथ', km: 102 },
              { name: 'बेट द्वारका', km: 264 },
              { name: 'द्वारका', km: 35 },
              { name: 'जलाराम मंदिर (वीरपूर)', km: 220 },
              { name: 'सप्तश्रृंगी वणी गड', km: 340 },
              { name: 'राहुरी', km: 183 },
            ].map((stop, i, arr) => (
              <span key={i} className="flex items-center gap-1">
                {stop.km !== null && (
                  <span className="text-yellow-400/60 text-[10px] font-bold flex items-center gap-0.5">
                    <span>›</span>
                    <span className="bg-yellow-400/10 px-1.5 py-0.5 rounded-full border border-yellow-400/20">{stop.km}km</span>
                    <span>›</span>
                  </span>
                )}
                <span className={`px-3 py-1.5 rounded-full transition-colors cursor-default border text-xs
                  ${i === 0 || i === arr.length - 1
                    ? 'bg-orange-500/30 text-orange-200 border-orange-400/40 font-extrabold'
                    : i === arr.length - 2
                    ? 'bg-purple-500/25 text-purple-200 border-purple-400/30 font-extrabold'
                    : 'bg-yellow-400/15 hover:bg-yellow-400/30 text-yellow-100 border-yellow-400/20'
                  }`}>
                  {stop.name}
                </span>
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Highlights Section ── */}
      {/* <section className="py-10 bg-[#fdf6e3]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div {...fadeUp()} className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
            <div>
              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3 border border-yellow-300">
                🪔 प्रमुख ठिकाणे
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#7b1a1a]">
                प्रमुख आकर्षणे
              </h2>
            </div>
            <Link to="/yatra" className="inline-flex items-center gap-1.5 text-[#c8860a] hover:text-[#7b1a1a] font-semibold text-sm border border-yellow-400 hover:border-yellow-600 px-4 py-2 rounded-full transition-all bg-yellow-50">
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
      </section> */}

      {/* ── Why Choose Us ── */}
      <section className="py-10 px-4 md:px-8 bg-[#fdf6e3]">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-10">
            <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 border border-yellow-300">
              🙏 आमची वैशिष्ट्ये
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#7b1a1a]">आम्हीच का ?</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.12)}
                className="bg-white border-2 border-yellow-200 rounded-2xl p-6 flex items-start gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'linear-gradient(135deg, #fefaeb 0%, #fff8f0 100%)' }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0 bg-yellow-100 border border-yellow-300">
                  <item.Icon size={26} strokeWidth={1.8} className="text-[#c8860a]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#7b1a1a] text-base mb-1.5">{item.title}</h3>
                  <p className="text-[#7b1a1a]/70 text-sm font-bold leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Travel Facilities Section ── */}
      <section className="py-10 px-4 md:px-8" style={{ background: 'linear-gradient(135deg, #7b1a1a 0%, #4a0f0f 100%)' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-10">
            <span className="inline-block bg-yellow-400/20 text-yellow-200 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 border border-yellow-400/30">
              🛕 सुविधा
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-100 mb-3">
              प्रवासात मिळणाऱ्या सुविधा
            </h2>
            <div className="spiritual-divider w-48 mt-2 mx-auto opacity-50" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.div {...fadeUp(0.1)} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/20">
              <h3 className="text-lg font-extrabold text-yellow-200 mb-4 flex items-center gap-2">
                🍽️ जेवण व नाश्ता
              </h3>
              <ul className="space-y-2.5">
                {['दोन वेळचे शुद्ध शाकाहारी जेवण','गरजेनुसार नाश्ता','सकाळी नाश्ता','पिण्याचे शुद्ध पाणी (बाटली)'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-yellow-100 text-sm font-semibold">
                    <span className="text-yellow-300 font-bold">✔</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/20">
              <h3 className="text-lg font-extrabold text-yellow-200 mb-4 flex items-center gap-2">
                🚌 बस व प्रवास सुविधा
              </h3>
              <ul className="space-y-2.5">
                {['संपूर्ण प्रवास स्लीपर कोच AC बसने','आरामदायी बेड व्यवस्था','मोबाइल चार्जिंग पॉइंट','अनुभवी ड्रायव्हर','सुरक्षित आणि आरामदायी प्रवास'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-yellow-100 text-sm font-semibold">
                    <span className="text-yellow-300 font-bold">✔</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeUp(0.4)} className="bg-yellow-400/10 rounded-2xl p-6 border border-yellow-400/30 md:col-span-2">
              <h3 className="text-xl font-extrabold text-yellow-200 mb-3 flex items-center gap-2">
                📌 महत्त्वाची सूचना
              </h3>
              <p className="text-yellow-100 text-base font-semibold leading-relaxed">
                प्रवासादरम्यान होणारे सर्व सामान्य खर्च (उदा. वाहन खर्च, राहण्याची व्यवस्था, नाश्ता, जेवण व इतर आवश्यक खर्च) हे शेवटी सर्व यात्रेकरूंमध्ये <span className="text-yellow-300 font-extrabold">समान प्रमाणात विभागले जातील.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-10 px-4 relative overflow-hidden bg-[#fdf6e3]">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ctext x=\'50%25\' y=\'55%25\' font-size=\'30\' text-anchor=\'middle\' dominant-baseline=\'middle\' fill=\'%237b1a1a\'%3E🕉%3C/text%3E%3C/svg%3E")', backgroundSize: '60px 60px' }}
        />
        <motion.div {...fadeUp()} className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="text-5xl mb-5 diya-flicker">🪔</div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight text-[#7b1a1a]">
            यात्रेसाठी आजच संपर्क करा
          </h2>
          <p className="text-[#a06c08] mb-10 text-lg leading-relaxed font-semibold">
            सीट्स मर्यादित आहेत — आत्ताच बुकिंग करा आणि पवित्र यात्रेचा आनंद घ्या.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={contactDetails.whatsappUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full shadow-xl transition-all duration-300 hover:scale-105">
              <MessageCircle size={18} /> WhatsApp वर संपर्क करा
            </a>
            <Link to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-full border-2 border-[#c8860a] text-[#7b1a1a] hover:bg-yellow-100 shadow-lg transition-all duration-300 hover:scale-105">
              <ClipboardList size={18} /> संपर्क
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
