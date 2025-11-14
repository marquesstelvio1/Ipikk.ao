import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'pt' | 'en' | 'es' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.courses': 'Cursos',
    'nav.admissions': 'Admissões',
    'nav.news': 'Notícias',
    'nav.contact': 'Contato',
    'nav.enroll': 'Inscreva-se',
    
    // Hero
    'hero.title': 'Construa o Seu Futuro com Formação de Excelência',
    'hero.subtitle': 'Instituto Politécnico Industrial de Kuanza-Norte oferece formação técnica e profissional de qualidade em diversas áreas.',
    'hero.enrollNow': 'Inscreva-se Agora',
    'hero.learnMore': 'Saiba Mais',
    
    // About
    'about.title': 'Quem Somos?',
    'about.description': 'O Instituto Politécnico Industrial de Kuanza-Norte (IPIKK) é uma instituição de referência em formação técnica e profissional em Angola.',
    'about.moreAbout': 'Saiba Mais Sobre Nós',
    'about.years': 'Anos de Experiência',
    'about.students': 'Estudantes Formados',
    'about.courses': 'Cursos Oferecidos',
    'about.employment': 'Taxa de Emprego',
    
    // Courses
    'courses.title': 'Cursos Ministrados',
    'courses.subtitle': 'Oferecemos uma ampla variedade de cursos técnicos e profissionais para preparar você para o mercado de trabalho.',
    'courses.viewAll': 'Ver Todos os Cursos',
    'courses.learnMore': 'Saiba Mais',
    
    // News
    'news.title': 'Notícias e Eventos',
    'news.subtitle': 'Fique por dentro das últimas novidades e acontecimentos do IPIKK.',
    'news.readMore': 'Ler Mais',
    'news.viewMore': 'Ver Mais Notícias',
    
    // Enrollment
    'enrollment.title': 'Faça sua Matrícula no IPIKK',
    'enrollment.subtitle': 'Junte-se a nós e usufrua do que temos a oferecer para a sua capacitação e desenvolvimento profissional.',
    'enrollment.enrollNow': 'Inscrever-se Agora',
    'enrollment.moreInfo': 'Mais Informações',
    
    // Footer
    'footer.quickLinks': 'Links Rápidos',
    'footer.contact': 'Contato',
    'footer.newsletter': 'Newsletter',
    'footer.newsletterText': 'Receba as últimas notícias e atualizações do IPIKK.',
    'footer.send': 'Enviar',
    'footer.copyright': '© 2024 IPIKK - Instituto Politécnico Industrial de Kuanza-Norte. Todos os direitos reservados.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.courses': 'Courses',
    'nav.admissions': 'Admissions',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    'nav.enroll': 'Enroll',
    
    // Hero
    'hero.title': 'Build Your Future with Excellence in Training',
    'hero.subtitle': 'Kuanza-Norte Industrial Polytechnic Institute offers quality technical and professional training in various areas.',
    'hero.enrollNow': 'Enroll Now',
    'hero.learnMore': 'Learn More',
    
    // About
    'about.title': 'Who We Are?',
    'about.description': 'Kuanza-Norte Industrial Polytechnic Institute (IPIKK) is a reference institution in technical and professional training in Angola.',
    'about.moreAbout': 'Learn More About Us',
    'about.years': 'Years of Experience',
    'about.students': 'Graduates',
    'about.courses': 'Courses Offered',
    'about.employment': 'Employment Rate',
    
    // Courses
    'courses.title': 'Courses Offered',
    'courses.subtitle': 'We offer a wide variety of technical and professional courses to prepare you for the job market.',
    'courses.viewAll': 'View All Courses',
    'courses.learnMore': 'Learn More',
    
    // News
    'news.title': 'News and Events',
    'news.subtitle': 'Stay updated with the latest news and events from IPIKK.',
    'news.readMore': 'Read More',
    'news.viewMore': 'View More News',
    
    // Enrollment
    'enrollment.title': 'Enroll at IPIKK',
    'enrollment.subtitle': 'Join us and benefit from what we have to offer for your training and professional development.',
    'enrollment.enrollNow': 'Enroll Now',
    'enrollment.moreInfo': 'More Information',
    
    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.newsletter': 'Newsletter',
    'footer.newsletterText': 'Receive the latest news and updates from IPIKK.',
    'footer.send': 'Send',
    'footer.copyright': '© 2024 IPIKK - Kuanza-Norte Industrial Polytechnic Institute. All rights reserved.',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.courses': 'Cursos',
    'nav.admissions': 'Admisiones',
    'nav.news': 'Noticias',
    'nav.contact': 'Contacto',
    'nav.enroll': 'Inscribirse',
    
    // Hero
    'hero.title': 'Construye Tu Futuro con Formación de Excelencia',
    'hero.subtitle': 'El Instituto Politécnico Industrial de Kuanza-Norte ofrece formación técnica y profesional de calidad en diversas áreas.',
    'hero.enrollNow': 'Inscríbete Ahora',
    'hero.learnMore': 'Saber Más',
    
    // About
    'about.title': '¿Quiénes Somos?',
    'about.description': 'El Instituto Politécnico Industrial de Kuanza-Norte (IPIKK) es una institución de referencia en formación técnica y profesional en Angola.',
    'about.moreAbout': 'Saber Más Sobre Nosotros',
    'about.years': 'Años de Experiencia',
    'about.students': 'Estudiantes Graduados',
    'about.courses': 'Cursos Ofrecidos',
    'about.employment': 'Tasa de Empleo',
    
    // Courses
    'courses.title': 'Cursos Impartidos',
    'courses.subtitle': 'Ofrecemos una amplia variedad de cursos técnicos y profesionales para prepararte para el mercado laboral.',
    'courses.viewAll': 'Ver Todos los Cursos',
    'courses.learnMore': 'Saber Más',
    
    // News
    'news.title': 'Noticias y Eventos',
    'news.subtitle': 'Mantente al día con las últimas noticias y eventos de IPIKK.',
    'news.readMore': 'Leer Más',
    'news.viewMore': 'Ver Más Noticias',
    
    // Enrollment
    'enrollment.title': 'Matrícula en IPIKK',
    'enrollment.subtitle': 'Únete a nosotros y aprovecha lo que tenemos para ofrecer para tu capacitación y desarrollo profesional.',
    'enrollment.enrollNow': 'Inscribirse Ahora',
    'enrollment.moreInfo': 'Más Información',
    
    // Footer
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.contact': 'Contacto',
    'footer.newsletter': 'Boletín',
    'footer.newsletterText': 'Recibe las últimas noticias y actualizaciones de IPIKK.',
    'footer.send': 'Enviar',
    'footer.copyright': '© 2024 IPIKK - Instituto Politécnico Industrial de Kuanza-Norte. Todos los derechos reservados.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.courses': 'Cours',
    'nav.admissions': 'Admissions',
    'nav.news': 'Actualités',
    'nav.contact': 'Contact',
    'nav.enroll': "S'inscrire",
    
    // Hero
    'hero.title': 'Construisez Votre Avenir avec une Formation d\'Excellence',
    'hero.subtitle': 'L\'Institut Polytechnique Industriel de Kuanza-Norte offre une formation technique et professionnelle de qualité dans divers domaines.',
    'hero.enrollNow': 'Inscrivez-vous Maintenant',
    'hero.learnMore': 'En Savoir Plus',
    
    // About
    'about.title': 'Qui Sommes-Nous?',
    'about.description': 'L\'Institut Polytechnique Industriel de Kuanza-Norte (IPIKK) est une institution de référence en formation technique et professionnelle en Angola.',
    'about.moreAbout': 'En Savoir Plus Sur Nous',
    'about.years': 'Années d\'Expérience',
    'about.students': 'Diplômés',
    'about.courses': 'Cours Offerts',
    'about.employment': 'Taux d\'Emploi',
    
    // Courses
    'courses.title': 'Cours Dispensés',
    'courses.subtitle': 'Nous offrons une large variété de cours techniques et professionnels pour vous préparer au marché du travail.',
    'courses.viewAll': 'Voir Tous les Cours',
    'courses.learnMore': 'En Savoir Plus',
    
    // News
    'news.title': 'Actualités et Événements',
    'news.subtitle': 'Restez informé des dernières nouvelles et événements de l\'IPIKK.',
    'news.readMore': 'Lire Plus',
    'news.viewMore': 'Voir Plus d\'Actualités',
    
    // Enrollment
    'enrollment.title': 'Inscrivez-vous à l\'IPIKK',
    'enrollment.subtitle': 'Rejoignez-nous et profitez de ce que nous avons à offrir pour votre formation et développement professionnel.',
    'enrollment.enrollNow': 'S\'inscrire Maintenant',
    'enrollment.moreInfo': 'Plus d\'Informations',
    
    // Footer
    'footer.quickLinks': 'Liens Rapides',
    'footer.contact': 'Contact',
    'footer.newsletter': 'Newsletter',
    'footer.newsletterText': 'Recevez les dernières nouvelles et mises à jour de l\'IPIKK.',
    'footer.send': 'Envoyer',
    'footer.copyright': '© 2024 IPIKK - Institut Polytechnique Industriel de Kuanza-Norte. Tous droits réservés.',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    const saved = localStorage.getItem('ipikk-language') as Language;
    if (saved && ['pt', 'en', 'es', 'fr'].includes(saved)) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('ipikk-language', lang);
  };

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
