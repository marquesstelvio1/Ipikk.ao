import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import HeroCarousel from './HeroCarousel';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';

export default function Hero() {
   const { t } = useLanguage();
  return (
    <section id="inicio" className="relative h-[85vh] min-h-[600px] overflow-hidden">
      <HeroCarousel />
      
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            data-testid="text-hero-title"
          >
            {t('hero.title')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            data-testid="text-hero-subtitle"
          >
            {t('hero.subtitle')}
            </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/admissoes">
              <a className="inline-block">
                <Button size="lg" className="text-base w-full sm:w-auto" data-testid="button-hero-inscrever">
                  {t('hero.enrollNow')}
                </Button>
              </a>
            </Link>
            <Link href="/sobre">
              <a className="inline-block">
                <Button size="lg" variant="outline" className="text-base bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30 w-full sm:w-auto" data-testid="button-hero-saiba-mais">
                  {t('hero.learnMore')}
                </Button>
              </a>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
