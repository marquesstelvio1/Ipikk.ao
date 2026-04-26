import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import campusImage from './imgs/img1.jpg';
import electronicsImage from './imgs/img2.jpg';
import computerImage from './imgs/img3.jpg';
import civilImage from './imgs/img4.jpg';
import graduationImage from './imgs/img5.jpg';

const images = [
  { src: campusImage, alt: 'Campus do IPIKK' },
  { src: electronicsImage, alt: 'Laboratório de Eletrónica' },
  { src: computerImage, alt: 'Sala de Informática' },
  { src: civilImage, alt: 'Oficina de Construção Civil' },
  { src: graduationImage, alt: 'Cerimónia de Graduação' }
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
            data-testid={`button-carousel-indicator-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
