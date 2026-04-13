import { motion } from 'framer-motion';
import { contactDetails } from '../data/data';
import { Phone, MessageCircle, Clock, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-white flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-orange-100">

          {/* Banner */}
          <div className="relative bg-gradient-to-br from-orange-500 to-amber-400 px-6 pt-10 pb-14 text-center overflow-hidden">
            {/* decorative circles */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/10 rounded-full" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full" />
            <div className="absolute top-4 right-10 w-10 h-10 bg-white/10 rounded-full" />

            <div className="relative">
              <div className="w-20 h-20 bg-white/25 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg border border-white/30">
                <span className="text-4xl">🛕</span>
              </div>
              <h1 className="text-white font-extrabold text-2xl tracking-tight">{contactDetails.name}</h1>
              <p className="text-orange-100 text-base mt-1 font-extrabold">महेश वाघमारे महाराज</p>
            </div>
          </div>

          {/* Overlap badge */}
          <div className="flex justify-center -mt-5 relative z-10">
            <span className="bg-white border border-orange-200 text-orange-600 text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
              📞 संपर्क करा
            </span>
          </div>

          {/* Buttons */}
          <div className="px-6 pt-5 pb-6 space-y-3">
            <a
              href={`tel:${contactDetails.phone}`}
              className="flex items-center gap-3 w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:scale-[0.98] text-white font-bold py-4 px-5 rounded-2xl transition-all shadow-md shadow-blue-200"
            >
              <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                <Phone size={16} />
              </div>
              <div className="flex-1">
                <p className="text-[11px] text-blue-100 font-medium leading-none mb-0.5">फोन करा</p>
                <p className="text-base font-extrabold tracking-wide">{contactDetails.phone}</p>
              </div>
            </a>

            <a
              href={contactDetails.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 active:scale-[0.98] text-white font-bold py-4 px-5 rounded-2xl transition-all shadow-md shadow-green-200"
            >
              <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                <MessageCircle size={16} />
              </div>
              <div className="flex-1">
                <p className="text-[11px] text-green-100 font-medium leading-none mb-0.5">WhatsApp</p>
                <p className="text-base font-extrabold">मेसेज करा</p>
              </div>
            </a>
          </div>

        </div>

        {/* Info below card */}
        {/* <div className="mt-4 bg-white rounded-2xl border border-orange-100 shadow-sm divide-y divide-orange-50">
         
          <div className="flex items-center gap-3 px-4 py-3">
            <MapPin size={15} className="text-orange-400 shrink-0" />
            <div>
              <p className="text-[10px] text-orange-400 font-semibold uppercase tracking-wide">स्थान</p>
              <p className="text-sm font-semibold text-gray-700">राहुरी, अहमदनगर, महाराष्ट्र</p>
            </div>
          </div>
        </div> */}


      </motion.div>
    </div>
  );
}
