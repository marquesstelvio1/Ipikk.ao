import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Handshake } from 'lucide-react';
import proedel from '@/components/imgs/p3.png';
import boavida from '@/components/imgs/p1.png';
import ende from '@/components/imgs/p6.png';
import itl from '@/components/imgs/p4.png';
import fadcom from '@/components/imgs/p8.png';
import bhm from '@/components/imgs/p7.jpg';
import ngola from '@/components/imgs/p5.png';

export default function PartnersSection() {
  const { t } = useLanguage();

  const partners = [
    { name: 'Prodel-EP', logo: proedel, link: 'https://www.prodel.co.ao/' },
    { name: 'Grupo Boa Vida', logo: boavida, link: 'https://grupoboavida.co.ao/' },
    { name: 'ENDE-EP', logo: ende, link: '#' },
    { name: 'ITEL', logo: itl, link: 'https://www.itel.gov.ao/' },
    { name: 'Fadcom', logo: fadcom, link: 'https://fadcom.gov.ao/' },
    { name: 'BHM Softwares', logo: bhm, link: '#' },
    { name: 'N\'gola Digital', logo: ngola, link: '#' }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Handshake className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6" data-testid="text-partners-title">
            {t('partners.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-partners-subtitle">
            {t('partners.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full group"
                aria-label={`${t('partners.visit') || 'Visitar'} ${partner.name}`}
              >
                <Card className="h-full p-6 flex items-center justify-center bg-card/50 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 group">
                  <div className="relative w-full h-20 flex items-center justify-center">
                    <img
                      className="max-h-16 w-full object-contain opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                      src={partner.logo}
                      alt={partner.name}
                      width={158}
                      height={48}
                    />
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Additional decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground italic">
            {t('partners.footer') || 'Parceiros estratégicos comprometidos com a excelência educacional'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
