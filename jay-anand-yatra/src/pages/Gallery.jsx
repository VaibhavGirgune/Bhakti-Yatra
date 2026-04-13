import { motion } from 'framer-motion';
import { busGalleryImages, tourGalleryImages } from '../data/placesData.js';

const allImages = [...busGalleryImages, ...tourGalleryImages];

export default function Gallery() {
  return (
    <div className="mx-auto min-h-screen max-w-lg bg-white pb-12">
      <div className="px-4 pt-4">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-2xl font-bold text-brand-900"
        >
          गॅलरी
        </motion.h1>
        <p className="mt-2 text-center text-base text-stone-600">बस व यात्रेच्या छायाचित्रे</p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2 px-3 sm:gap-3">
        {allImages.map((img, i) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-24px' }}
            transition={{ delay: (i % 6) * 0.05, duration: 0.35 }}
            className="overflow-hidden rounded-xl border border-stone-100 bg-stone-50 shadow-sm"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
