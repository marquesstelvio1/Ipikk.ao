import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, BookOpen, Database } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useCourseColor } from "@/hooks/useCourseColor";

export default function GestaoSistemasInformaticos() {
  const { t } = useLanguage();
  useCourseColor('gestao-sistemas-informaticos');

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-grow">
      <div ref={ref} className="relative py-20 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <motion.img style={{ y }} src="https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?w=1920&h=600&fit=crop&q=80" alt={t('courses.gsi.title')} className="absolute -top-[10%] left-0 w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/cursos">
            <a className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('courses.back')}
            </a>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('courses.gsi.title')}</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl">{t('courses.gsi.desc')}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                <BookOpen className="mr-3 h-6 w-6 text-primary" />
                {t('courses.about')}
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>{t('courses.gsi.aboutText1')}</p>
                <p className="mt-4">{t('courses.gsi.aboutText2')}</p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                <Database className="mr-3 h-6 w-6 text-primary" />
                {t('courses.whatYouWillLearn')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="flex items-start p-4 bg-card rounded-lg border border-border shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                    <span className="text-card-foreground">{t(`courses.gsi.learn.item${item}`)}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm sticky top-6">
              <h3 className="text-xl font-bold mb-4">{t('courses.details')}</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">{t('courses.duration')}:</span>
                  <span className="font-medium">{t('courses.gsi.durationValue')}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">{t('courses.certification')}:</span>
                  <span className="font-medium">{t('courses.gsi.certificationValue')}</span>
                </div>
              </div>
              
              <Link href="/admissoes">
                <a className="w-full block text-center bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-md font-medium transition-colors">
                  {t('hero.enrollNow')}
                </a>
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