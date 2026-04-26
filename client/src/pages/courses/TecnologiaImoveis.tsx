import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCourseColor } from "@/hooks/useCourseColor";

export default function TecnologiaImoveis() {
  const { t } = useLanguage();
  useCourseColor('tecnologia-imoveis');

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">{t('courses.tim.title')}</h1>
        <p className="text-lg text-muted-foreground mb-8">
          {t('courses.tim.desc')}
        </p>
        <div className="prose lg:prose-xl max-w-none">
          <p>Mais informações sobre o curso de Tecnologia de Imóveis serão adicionadas aqui.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}