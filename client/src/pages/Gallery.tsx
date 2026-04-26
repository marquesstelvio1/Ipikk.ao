import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Importar as imagens
import img1 from '@/components/imgs/img1.jpg';
import img2 from '@/components/imgs/img2.jpg';
import img3 from '@/components/imgs/img3.jpg';
import img4 from '@/components/imgs/img4.jpg';
import img5 from '@/components/imgs/img5.jpg';
import img6 from '@/components/imgs/img6.jpg';
import img7 from '@/components/imgs/img7.jpg';
import img8 from '@/components/imgs/img8.jpg';
import img9 from '@/components/imgs/img9.jpg';
import img10 from '@/components/imgs/img10.jpg';
import img11 from '@/components/imgs/img11.jpg';
import img12 from '@/components/imgs/16.jpg';
import img13 from '@/components/imgs/17.jpg';


const images = [
  { src: img1, category: 'Eventos', alt: 'Alunos de tecnologia de imóveis' },
  { src: img2, category: 'Eventos', alt: 'Alunos de tecnologia de imóveis' },
  { src: img3, category: 'Campus', alt: 'Campus' },
  { src: img4, category: 'Campus', alt: 'Edifício do IPIKK' },
  { src: img5, category: 'Aulas', alt: 'Reunião dos òrgãos' },
  { src: img6, category: 'Aulas', alt: 'Defesa de fim de curso' },
  { src: img7, category: 'Aulas', alt: 'Alunos a terem aulas' },
  { src: img8, category: 'Aulas', alt: 'Professores a conviverem' },
  { src: img9, category: 'Aulas', alt: 'Equipa de segurança' },
  { src: img10, category: 'Aulas', alt: 'Equipe de limpeza' },
  { src: img11, category: 'Aulas', alt: 'Estudantes a receber a graduação' },
  { src: img12, category: 'Aulas', alt: 'Estudantes a receber a graduação'},
  { src: img13, category: 'Aulas', alt: 'Estudantes a receber a graduação'},
];

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                {t('galleryPage.title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('galleryPage.subtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedImage(index)}
                  className="cursor-pointer group"
                >
                  <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <AspectRatio ratio={4 / 3}>
                        <motion.img
                          layoutId={`gallery-image-${index}`}
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <p className="text-white font-medium truncate">{image.alt}</p>
                        </div>
                      </AspectRatio>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              layoutId={`gallery-image-${selectedImage}`}
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
            />
            <Button size="icon" variant="ghost" className="absolute top-4 right-4 text-white hover:bg-white/20 hover:text-white" onClick={() => setSelectedImage(null)}><X className="w-6 h-6" /></Button>
            <Button size="icon" variant="ghost" className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 hover:text-white" onClick={(e) => { e.stopPropagation(); handlePrev(); }}><ChevronLeft className="w-8 h-8" /></Button>
            <Button size="icon" variant="ghost" className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 hover:text-white" onClick={(e) => { e.stopPropagation(); handleNext(); }}><ChevronRight className="w-8 h-8" /></Button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}