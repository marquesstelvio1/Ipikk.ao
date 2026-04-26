import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';

export default function EnrollmentCTA() {
  const { t } = useLanguage();
  const benefits = [
    t('enrollment.benefits.infrastructure'),
    t('enrollment.benefits.faculty'),
    t('enrollment.benefits.partnerships'),
    t('enrollment.benefits.training')
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=600&fit=crop')] bg-cover bg-center opacity-10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6" data-testid="text-enrollment-title">
              {t('enrollment.title')}
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8" data-testid="text-enrollment-subtitle">
              {t('enrollment.subtitle')}
            </p>
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                  data-testid={`text-benefit-${index}`}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/90">{benefit}</span>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/admissoes">
                <a className="inline-block">
                  <Button size="lg" variant="secondary" className="text-base w-full" data-testid="button-enrollment-inscrever">
                    {t('enrollment.enrollNow')}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </Link>
              <a href="/contato" className="inline-block">
                <Button size="lg" variant="outline" className="text-base bg-transparent hover:bg-white/10 text-primary-foreground border-primary-foreground/30 w-full" data-testid="button-enrollment-informacoes">
                  {t('enrollment.moreInfo')}
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary-foreground/10 rounded-2xl transform rotate-3" />
              <div className="relative bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">{t('enrollment.process.title')}</h3>
                <ol className="space-y-4 text-primary-foreground/90">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center font-bold">1</span>
                    <span>{t('enrollment.process.step1')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center font-bold">2</span>
                    <span>{t('enrollment.process.step2')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center font-bold">3</span>
                    <span>{t('enrollment.process.step3')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center font-bold">4</span>
                    <span>{t('enrollment.process.step4')}</span>
                  </li>
                </ol>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
