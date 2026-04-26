import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, BookOpen, Monitor, Wrench, Cpu } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useCourseColor } from "@/hooks/useCourseColor";

export default function TecnicoInformatica() {
  const { t } = useLanguage();
  useCourseColor('tecnico-informatica');

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
      {/* Hero Section */}
      <div ref={ref} className="relative py-20 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            style={{ y }}
            src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=1920&h=600&fit=crop&q=80"
            alt={t('courses.ti.title')}
            className="absolute -top-[10%] left-0 w-full h-[120%] object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/cursos">
            <a className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('courses.back')}
            </a>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('courses.ti.title')}</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl">
            {t('courses.ti.desc')}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* About */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                <BookOpen className="mr-3 h-6 w-6 text-primary" />
                {t('courses.about')}
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>{t('courses.ti.aboutText1')}</p>
                <p className="mt-4">{t('courses.ti.aboutText2')}</p>
              </div>
            </section>

            {/* What you will learn */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                <Cpu className="mr-3 h-6 w-6 text-primary" />
                {t('courses.whatYouWillLearn')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <div key={item} className="flex items-start p-4 bg-card rounded-lg border border-border shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                    <span className="text-card-foreground">{t(`courses.ti.learn.item${item}`)}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Professional Profile */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                <Wrench className="mr-3 h-6 w-6 text-primary" />
                {t('courses.careerOpportunities')}
              </h2>
              <div className="bg-muted/30 p-6 rounded-xl border border-border">
                <ul className="space-y-3">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <li key={item} className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {t(`courses.ti.career.item${item}`)}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm sticky top-6">
              <h3 className="text-xl font-bold mb-4">{t('courses.details')}</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">{t('courses.duration')}:</span>
                  <span className="font-medium">{t('courses.ti.durationValue')}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">{t('courses.certification')}:</span>
                  <span className="font-medium">{t('courses.ti.certificationValue')}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">{t('courses.schedule')}:</span>
                  <span className="font-medium">{t('courses.ti.scheduleValue')}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">{t('courses.internship')}:</span>
                  <span className="font-medium">{t('courses.ti.internshipValue')}</span>
                </div>
              </div>
              
              <Link href="/admissoes">
                <a className="w-full block text-center bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-md font-medium transition-colors">
                  {t('hero.enrollNow')}
                </a>
              </Link>
              <p className="text-xs text-center text-muted-foreground mt-3">
                {t('courses.limitedSlots')}
              </p>
            </div>

            <div className="bg-muted p-6 rounded-xl border border-border">
              <h3 className="font-bold mb-2 flex items-center">
                <Monitor className="mr-2 h-5 w-5" />
                {t('courses.labs')}
              </h3>
              <p className="text-sm text-muted-foreground">{t('courses.ti.labsText')}</p>
            </div>
          </div>

        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}