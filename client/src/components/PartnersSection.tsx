import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const partners = [
  { name: 'Prodel-EP', description: 'Parceiro em desenvolvimento tecnológico' },
  { name: 'Grupo Boa Vida', description: 'Apoio em recursos e formação' },
  { name: 'ENDE-EP', description: 'Parceria em energia e desenvolvimento' },
  { name: 'ITEL', description: 'Instituto de Telecomunicações de Angola' },
  { name: 'Fadcom', description: 'Parceiro em comunicações' },
  { name: 'BHM Softwares', description: 'Desenvolvimento de software' }
];

export default function PartnersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(partners.length / itemsPerPage));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const visiblePartners = partners.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.ceil(partners.length / itemsPerPage) - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(partners.length / itemsPerPage));
  };

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-partners-title">
            Parceiros
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-partners-subtitle">
            Trabalhamos com organizações líderes para proporcionar as melhores oportunidades aos nossos estudantes.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visiblePartners.map((partner, index) => (
              <motion.div
                key={`${currentIndex}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full hover-elevate transition-all bg-background" data-testid={`card-partner-${index}`}>
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                      <div className="text-2xl font-bold text-primary">{partner.name.slice(0, 2)}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`text-partner-name-${index}`}>
                      {partner.name}
                    </h3>
                    <p className="text-sm text-muted-foreground" data-testid={`text-partner-description-${index}`}>
                      {partner.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              size="icon"
              variant="outline"
              onClick={goToPrevious}
              data-testid="button-partners-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(partners.length / itemsPerPage) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-muted'
                  }`}
                  data-testid={`button-partners-indicator-${index}`}
                />
              ))}
            </div>

            <Button
              size="icon"
              variant="outline"
              onClick={goToNext}
              data-testid="button-partners-next"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
