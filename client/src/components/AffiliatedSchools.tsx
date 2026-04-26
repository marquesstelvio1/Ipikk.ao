import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, MapPin, Phone, Mail, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';
import { affiliatedSchools } from '@/lib/affiliatedSchools';

export default function AffiliatedSchools() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const itemsPerPage = 3;

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(affiliatedSchools.length / itemsPerPage));
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, itemsPerPage]);

  const visibleSchools = affiliatedSchools.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.ceil(affiliatedSchools.length / itemsPerPage) - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(affiliatedSchools.length / itemsPerPage));
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-schools-title">
            {t('affiliated.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-schools-subtitle">
            {t('affiliated.subtitle')}
          </p>
        </motion.div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleSchools.map((school, index) => (
              <motion.div
                key={school.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full hover-elevate transition-all" data-testid={`card-school-${index}`}>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg" data-testid={`text-school-name-${index}`}>{school.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span data-testid={`text-school-location-${index}`}>{school.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <span data-testid={`text-school-phone-${index}`}>{school.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate" data-testid={`text-school-email-${index}`}>{school.email}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 mt-8" role="group" aria-label={t('affiliated.carouselControls') || 'Controles do carrossel'}>
            <Button
              size="icon"
              variant="outline"
              onClick={goToPrevious}
              data-testid="button-schools-prev"
              aria-label={t('affiliated.previous') || 'Anterior'}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2" role="tablist" aria-label={t('affiliated.slideIndicators') || 'Indicadores de slides'}>
              {Array.from({ length: Math.ceil(affiliatedSchools.length / itemsPerPage) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-muted'
                  }`}
                  data-testid={`button-schools-indicator-${index}`}
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`${t('affiliated.goToSlide') || 'Ir para slide'} ${index + 1}`}
                  tabIndex={index === currentIndex ? 0 : -1}
                />
              ))}
            </div>

            <Button
              size="icon"
              variant="outline"
              onClick={goToNext}
              data-testid="button-schools-next"
              aria-label={t('affiliated.next') || 'Próximo'}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/escolas-filiadas">
            <Button 
              size="lg" 
              variant="outline" 
              data-testid="button-schools-ver-mais"
              aria-label={t('affiliated.viewAll') || 'Ver todas as escolas filiadas'}
            >
            {t('affiliated.viewAll')}
          </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
