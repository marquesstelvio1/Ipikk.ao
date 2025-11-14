import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

import campusImage from '@assets/generated_images/IPIKK_campus_exterior_view_fcd2e2ab.png';
import electronicsImage from '@assets/generated_images/Electronics_lab_training_session_24a7937a.png';
import computerImage from '@assets/generated_images/Computer_science_classroom_386533a1.png';
import civilImage from '@assets/generated_images/Civil_engineering_workshop_c5c5038f.png';
import graduationImage from '@assets/generated_images/Graduation_ceremony_celebration_47102841.png';

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

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

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

      <Button
        size="icon"
        variant="ghost"
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white border-0"
        data-testid="button-carousel-prev"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        size="icon"
        variant="ghost"
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white border-0"
        data-testid="button-carousel-next"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

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
