import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GraduationCap, Users, Award, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutSection() {
   const { t } = useLanguage();
  const stats = [
    { icon: GraduationCap, value: '25+', label: t('about.years') },
    { icon: Users, value: '5000+', label: t('about.students') },
    { icon: Award, value: '15+', label: t('about.courses') },
    { icon: TrendingUp, value: '95%', label: t('about.employment') }
  ];

  return (
    <section id="sobre" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6" data-testid="text-about-title">
              {t('about.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-6" data-testid="text-about-description">
              {t('about.description')}
            </p>
            <Button size="lg" data-testid="button-about-saiba-mais">
              {t('about.moreAbout')}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-background p-6 rounded-xl text-center hover-elevate"
                data-testid={`card-stat-${index}`}
              >
                <stat.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-foreground mb-2" data-testid={`text-stat-value-${index}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground" data-testid={`text-stat-label-${index}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
