import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { User, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

import od1 from '@/components/imgs/od1.jpeg';
import od2 from '@/components/imgs/od2.jpeg';
import od3 from '@/components/imgs/od3.jpeg';

export default function FormerDirectors() {
  const { t } = useLanguage();

  // Dados simulados para os ex-directores - substituir por dados reais
  const formerDirectors = [
    {
      name: t('formerDirectors.director1.name') || "Nome do Director 1",
      period: "2015 - 2020",
      role: t('formerDirectors.role.general') || "Director Geral",
      image: od1
    },
    {
      name: t('formerDirectors.director2.name') || "Nome do Director 2",
      period: "2010 - 2015",
      role: t('formerDirectors.role.general') || "Director Geral",
      image: od2
    },
    {
      name: t('formerDirectors.director3.name') || "Nome do Director 3",
      period: "2005 - 2010",
      role: t('formerDirectors.role.general') || "Director Geral",
      image: od3
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                {t('formerDirectors.title') || "Ex-Directores"}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('formerDirectors.subtitle') || "Homenagem aos líderes que contribuíram para o crescimento e excelência do IPIKK."}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {formerDirectors.map((director, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg overflow-hidden group">
                    <div className="aspect-[4/5] bg-muted relative overflow-hidden">
                      {director.image ? (
                        <img
                          src={director.image}
                          alt={director.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-secondary/30">
                          <User className="w-24 h-24 text-muted-foreground/40" />
                        </div>
                      )}
                    </div>
                    
                    <CardHeader className="text-center pb-2">
                      <CardTitle className="text-xl font-bold">{director.name}</CardTitle>
                      <p className="text-primary font-medium">{director.role}</p>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        <Calendar className="w-4 h-4" />
                        <span>{director.period}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t('formerDirectors.timeline.title') || "Linha do Tempo"}
              </h2>
            </motion.div>

            <div className="relative">
              {/* Linha vertical central */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

              <div className="space-y-12">
                {formerDirectors.map((director, index) => (
                  <div key={index} className="relative">
                    <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      
                      <div className="hidden md:block md:w-1/2" />
                      
                      {/* Ponto na linha do tempo */}
                      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 mt-1.5" />

                      {/* Conteúdo */}
                      <div className={`pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                        <motion.div
                          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-card p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow"
                        >
                          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-2">
                            {director.period}
                          </span>
                          <h3 className="text-xl font-bold text-foreground">{director.name}</h3>
                          <p className="text-muted-foreground">{director.role}</p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}