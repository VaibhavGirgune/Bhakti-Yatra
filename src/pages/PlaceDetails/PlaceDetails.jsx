import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Star, BookOpen, ScrollText,
  Lightbulb, MapPin, PlayCircle, Globe, ChevronRight
} from 'lucide-react';
import { tours } from '../../data/data';

const SectionHeader = ({ icon: Icon, color, label }) => (
  <div className={`flex items-center gap-3 mb-5`}>
    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${color}`}>
      <Icon size={18} strokeWidth={2.5} />
    </div>
    <h2 className="text-xl font-bold text-gray-900 tracking-tight">{label}</h2>
  </div>
);

export default function PlaceDetails() {
  const { name } = useParams();
  const navigate = useNavigate();

  const place = tours.flatMap(t => t.places).find(p => p.name === name);
  const state = tours.find(t => t.places.some(p => p.name === name))?.state;

  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (!place) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
        <MapPin size={52} className="text-gray-300 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-4">स्थळ सापडले नाही</h2>
        <button onClick={() => navigate('/yatra')} className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition">
          ← मागे जा
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f7f4]">

      {/* ── Hero ── */}
      <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <img src={place.image} alt={place.name} className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        {/* back button top-left */}
        <div className="absolute top-5 left-5 md:top-8 md:left-10">
          <button onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-white/90 hover:text-white font-semibold text-sm bg-white/15 hover:bg-white/25 px-4 py-2 rounded-full backdrop-blur-md border border-white/20 transition-all">
            <ArrowLeft size={15} strokeWidth={2.5} /> मागे जा
          </button>
        </div>

        {/* title block bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 md:px-12 md:pb-10">
          {state && (
            <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">
              {state}
            </span>
          )}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-none tracking-tight drop-shadow-xl">
            {place.name}
          </h1>
          <p className="text-orange-300 text-base md:text-lg font-medium mt-3 max-w-2xl leading-snug line-clamp-2">
            {place.subInfo}
          </p>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-12 space-y-8">

        {/* Attractions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          className="bg-orange-50 border border-orange-200 rounded-3xl p-7">
          <SectionHeader icon={Star} color="bg-orange-100 text-orange-600" label="मुख्य आकर्षणे" />
          <p className="text-gray-700 text-lg leading-8 font-medium">{place.subInfo}</p>
        </motion.div>

        {/* Story — shown FIRST */}
        {place.story && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="bg-amber-50 border border-amber-200 rounded-3xl p-7">
            <SectionHeader icon={ScrollText} color="bg-amber-100 text-amber-700" label="पौराणिक कथा" />
            <p className="text-amber-950 text-lg leading-8">{place.story}</p>
          </motion.div>
        )}

        {/* Description — shown AFTER story */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="bg-white border border-gray-200 rounded-3xl p-7 shadow-sm">
          <SectionHeader icon={BookOpen} color="bg-blue-50 text-blue-600" label="सविस्तर माहिती" />
          <p className="text-gray-700 text-lg leading-8 mb-6">{place.description}</p>
        </motion.div>

        {/* Facts */}
        {place.facts && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center">
                <Lightbulb size={18} strokeWidth={2.5} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 tracking-tight">रोचक तथ्ये</h2>
            </div>
            <div className="space-y-3">
              {place.facts.map((fact, i) => {
                // Strip leading emoji characters from the fact string
                const cleanFact = fact.replace(/^[\p{Emoji}\s]+/u, '').trim();
                return (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.28 + i * 0.06 }}
                    className="flex items-start gap-4 bg-white rounded-2xl border border-gray-200 px-5 py-4 hover:border-orange-300 hover:shadow-md transition-all">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-orange-600 text-white font-extrabold text-sm flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-gray-700 text-base leading-7">{cleanFact}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* YouTube CTA */}
        {place.youtubeUrl && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="relative overflow-hidden bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/5 rounded-full" />
            <div className="absolute -right-2 -bottom-10 w-28 h-28 bg-white/5 rounded-full" />
            <div className="text-white relative z-10">
              <div className="flex items-center gap-3 font-extrabold text-2xl mb-1">
                <PlayCircle size={28} strokeWidth={2} /> YouTube वर पहा
              </div>
              <p className="text-red-200 text-base">व्हिडिओ पाहून या ठिकाणाचा अनुभव घ्या</p>
            </div>
            <a href={place.youtubeUrl} target="_blank" rel="noopener noreferrer"
              className="relative z-10 shrink-0 bg-white text-red-700 hover:bg-red-50 font-bold px-7 py-3.5 rounded-full shadow-xl transition-all hover:scale-105 text-base flex items-center gap-2">
              <PlayCircle size={18} /> व्हिडिओ पहा →
            </a>
          </motion.div>
        )}

        {/* Wikipedia + Maps */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {place.wikipediaUrl && (
            <a href={place.wikipediaUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between bg-white border border-gray-200 hover:border-gray-500 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-gray-100 group-hover:bg-gray-200 rounded-xl flex items-center justify-center text-gray-700 transition-colors">
                  <Globe size={20} strokeWidth={2} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base">Wikipedia</p>
                  <p className="text-gray-500 text-sm">संपूर्ण इतिहास वाचा</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-400 group-hover:text-gray-800 transition-colors" />
            </a>
          )}
          {place.lat && place.lng && (
            <a href={`https://www.google.com/maps?q=${place.lat},${place.lng}`} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between bg-white border border-gray-200 hover:border-green-500 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-green-50 group-hover:bg-green-100 rounded-xl flex items-center justify-center text-green-600 transition-colors">
                  <MapPin size={20} strokeWidth={2} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base">Google Maps</p>
                  <p className="text-gray-500 text-sm">नकाशावर पहा</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-400 group-hover:text-green-600 transition-colors" />
            </a>
          )}
        </motion.div>

      </div>
    </div>
  );
}
