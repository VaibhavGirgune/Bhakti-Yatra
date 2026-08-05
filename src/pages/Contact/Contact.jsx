import { motion } from "framer-motion";
import { contactDetails } from "../../data/data";
import { Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="sm:h-[calc(100vh-64px)] flex flex-col sm:flex-row sm:overflow-hidden">

      {/* Left — Full Image */}
      <div className="relative sm:w-1/2 h-[45vh] sm:h-full overflow-hidden">
        <img
          src="/download.jpg"
          alt="श्री दत्त"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Name at bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4">
            <p className="text-orange-300 text-xs font-bold tracking-widest uppercase mb-1">यात्रा संस्थापक</p>
            <h2 className="text-white font-extrabold text-2xl leading-tight">श्री महेश वाघमारे</h2>
            <p className="text-orange-200 font-bold text-base mt-0.5">महाराज</p>
          </div>
        </div>
      </div>

      {/* Right — Contact */}
      <div className="sm:w-1/2 flex flex-col justify-center bg-gradient-to-br from-orange-50 to-amber-50 px-6 py-6 sm:px-14 gap-5 sm:flex-1">

        {/* Header */}
        <div>
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            📞 संपर्क करा
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            आम्हाला <span className="text-orange-500">संपर्क</span> करा
          </h1>
          <p className="text-gray-500 text-sm font-semibold mt-2 leading-relaxed">
            यात्रेसाठी बुकिंग किंवा माहितीसाठी खाली दिलेल्या नंबरवर संपर्क करा.
          </p>
        </div>

        {/* Call */}
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          href={`tel:${contactDetails.phone}`}
          className="flex items-center gap-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 sm:py-5 px-5 sm:px-7 rounded-2xl shadow-xl shadow-blue-200 hover:shadow-blue-300 transition-all"
        >
          <div className="w-11 h-11 sm:w-14 sm:h-14 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
            <Phone size={22} />
          </div>
          <div>
            <p className="text-blue-100 text-xs font-semibold mb-0.5">फोन क्रमांक (श्री महेश वाघमारे महाराज)</p>
            <p className="text-xl sm:text-3xl font-extrabold tracking-wider">{contactDetails.phone}</p>
          </div>
        </motion.a>

        {/* WhatsApp */}
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          href={contactDetails.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 sm:py-5 px-5 sm:px-7 rounded-2xl shadow-xl shadow-green-200 hover:shadow-green-300 transition-all"
        >
          <div className="w-11 h-11 sm:w-14 sm:h-14 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
            <MessageCircle size={22} />
          </div>
          <div>
            <p className="text-green-100 text-xs font-semibold mb-0.5">WhatsApp वर संपर्क करा</p>
            <p className="text-xl sm:text-3xl font-extrabold">मेसेज करा</p>
          </div>
        </motion.a>

      </div>
    </div>
  );
}
