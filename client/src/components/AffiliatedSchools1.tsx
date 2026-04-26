import { useState } from 'react';
import { MapPin, Phone, Mail, ExternalLink, School, GraduationCap, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'wouter';
import { affiliatedSchools } from '@/lib/affiliatedSchools';

export default function AffiliatedSchools() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow pt-10 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('affiliatedPage.title') || "Escolas Filiadas"}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('affiliatedPage.subtitle') || "Conheça as instituições de ensino que fazem parte da nossa rede de excelência educacional. Juntos, trabalhamos para elevar o padrão de ensino em Angola."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {affiliatedSchools.map((school, index) => (
            <motion.div 
              key={school.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden bg-muted">
                {school.image ? (
                  <>
                    {!loadedImages.has(school.id) && (
                      <div className="absolute inset-0 flex items-center justify-center bg-muted">
                        <Loader2 className="w-8 h-8 text-primary animate-spin" />
                      </div>
                    )}
                    <img 
                      src={school.image} 
                      alt={school.name}
                      className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                        loadedImages.has(school.id) ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => {
                        setLoadedImages(prev => {
                          const newSet = new Set(prev);
                          newSet.add(school.id);
                          return newSet;
                        });
                      }}
                      loading="lazy"
                    />
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary/10" aria-hidden="true">
                    <School className="w-16 h-16 text-primary/30" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" aria-hidden="true" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-primary/90 text-primary-foreground text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                    {t('affiliatedPage.partnerBadge') || "Parceiro Oficial"}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <School className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground line-clamp-1">{school.name}</h3>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary/70" />
                    <span>{school.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground text-sm">
                    <Phone className="w-4 h-4 flex-shrink-0 text-primary/70" />
                    <span>{school.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground text-sm">
                    <Mail className="w-4 h-4 flex-shrink-0 text-primary/70" />
                    <span className="truncate">{school.email}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    className="flex-1 gap-2 group-hover:bg-primary/90" 
                    variant="outline"
                    aria-label={`${t('affiliatedPage.contact') || "Contactar"} - ${school.name}`}
                    onClick={() => {
                      window.location.href = `mailto:${school.email}?subject=${encodeURIComponent(`Contato - ${school.name}`)}`;
                    }}
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    {t('affiliatedPage.contact') || "Contactar"}
                  </Button>
                  <Button 
                    size="icon"
                    variant="outline"
                    aria-label={`${t('affiliatedPage.copyEmail') || "Copiar email"} - ${school.email}`}
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(school.email);
                        toast({
                          title: t('affiliatedPage.emailCopied') || "Email copiado!",
                          description: school.email,
                        });
                      } catch (err) {
                        toast({
                          title: t('affiliatedPage.error') || "Erro",
                          description: t('affiliatedPage.copyFailed') || "Não foi possível copiar o email",
                          variant: "destructive",
                        });
                      }
                    }}
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <GraduationCap className="w-64 h-64" />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t('affiliatedPage.cta.title') || "Quer filiar a sua escola?"}</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              {t('affiliatedPage.cta.description') || "Junte-se à nossa rede e tenha acesso a recursos exclusivos, formação de professores e uma metodologia de ensino comprovada."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={() => {
                  toast({
                    description: "Pedido de filiação só presencial por agora",
                  });
                }}
                aria-label={t('affiliatedPage.cta.button') || "Fazer Pedido de Filiação"}
              >
                {t('affiliatedPage.cta.button') || "Fazer Pedido de Filiação"}
              </Button>
              <Link href="/filiacao-saber-mais">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8"
                  aria-label={t('affiliatedPage.cta.learnMore') || "Saber Mais sobre filiação"}
                >
                  {t('affiliatedPage.cta.learnMore') || "Saber Mais"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}