import { useState, useEffect, useRef, ElementType } from 'react';
import { Menu, X, ChevronDown, Sun, Moon, Monitor, Server, Zap, Snowflake, Building2, Compass, Hammer, Home, House } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import { Link } from 'wouter';
import logo from './logo.png';

interface Course {
  name: string;
  link: string;
  icon: ElementType;
}

interface CourseArea {
  name: string;
  courses: Course[];
}

export default function Navigation() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileAreaOpen, setMobileAreaOpen] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const coursesRef = useRef<HTMLDivElement>(null);

  const courseAreas: CourseArea[] = [
    {
      name: t('nav.courses.area.informatics'),
      courses: [
        { name: t('courses.ti.title'), link: '/cursos/tecnico-informatica', icon: Monitor },
        { name: t('courses.gsi.title'), link: '/cursos/gestao-sistemas-informaticos', icon: Server }
      ]
    },
    {
      name: t('nav.courses.area.electricity'),
      courses: [
        { name: t('courses.eie.title'), link: '/cursos/energias-electricas', icon: Zap }
      ]
    },
    {
      name: t('nav.courses.area.mechanics'),
      courses: [
        { name: t('courses.fc.title'), link: '/cursos/frio-climatizacao', icon: Snowflake }
      ]
    },
    {
      name: t('nav.courses.area.civil'),
      courses: [
        { name: t('courses.tocc.title'), link: '/cursos/construcao-civil', icon: Building2 },
        { name: t('courses.dp.title'), link: '/cursos/desenhador-projectista', icon: Compass },
      ]
    },
    {
      name: t('nav.courses.area.furniture'),
      courses: [
        { name: t('courses.ttm.title'), link: '/cursos/tecnologias-moveis', icon: House }
      ]
    }
  ];

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode || storedDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    setDarkMode(localStorage.getItem('darkMode') === 'true');
  }, []);



  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (coursesRef.current && !coursesRef.current.contains(event.target as Node)) {
        setCoursesOpen(false);
        setHoveredArea(null);
      }
      if (aboutRef.current && !aboutRef.current.contains(event.target as Node)) {
        setAboutOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="IPIKK Logo" className="h-12 w-auto object-contain" />
          </a>

          <div className="hidden lg:flex items-center gap-6">
            <a href="/" className="text-foreground hover-elevate px-3 py-2 rounded-md transition-colors" data-testid="link-inicio">
              {t('nav.home')}
            </a>
            <div
              className="relative"
              ref={aboutRef}
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-foreground hover-elevate px-3 py-2 rounded-md transition-colors"
                data-testid="button-sobre"
              >
                {t('nav.about')}
              </button>
              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1 w-56 bg-popover border border-popover-border rounded-md shadow-lg"
                  >
                    <a href="/sobre" className="block px-4 py-2 hover-elevate text-popover-foreground" data-testid="link-quem-somos">{t('nav.whoWeAre')}</a>
                    <a href="/orgaos-directivos" className="block px-4 py-2 hover-elevate text-popover-foreground" data-testid="link-orgaos-directivos">{t('nav.managementBody')}</a>
                    <a href="/normativos" className="block px-4 py-2 hover-elevate text-popover-foreground" data-testid="link-normativos">{t('nav.normativos')}</a>
                    <a href="/galeria" className="block px-4 py-2 hover-elevate text-popover-foreground" data-testid="link-galeria">{t('nav.gallery')}</a>
                    <a href="/ex-directores" className="block px-4 py-2 hover-elevate text-popover-foreground" data-testid="link-ex-directores">{t('nav.formerDirectors')}</a>
                    <a href="/escolas-filiadas" className="block px-4 py-2 hover-elevate text-popover-foreground" data-testid="link-escolas-filiadas">{t('nav.affiliatedSchools')}</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div 
              className="relative" 
              ref={coursesRef}
              onMouseEnter={() => setCoursesOpen(true)}
              onMouseLeave={() => {
                setCoursesOpen(false);
                setHoveredArea(null);
              }}
            >
              <button
                className="flex items-center gap-1 text-foreground hover-elevate px-3 py-2 rounded-md transition-colors"
                data-testid="button-cursos"
              >
                {t('nav.courses')}
              </button>

              <AnimatePresence>
                {coursesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1 w-56 bg-popover border border-popover-border rounded-md shadow-lg"
                  >
                    {courseAreas.map((area) => (
                      <div
                        key={area.name}
                        className="relative"
                        onMouseEnter={() => setHoveredArea(area.name)}
                      >
                        <button
                          className="w-full text-left px-4 py-2 hover-elevate text-popover-foreground flex items-center justify-between"
                          data-testid={`button-area-${area.name.toLowerCase()}`}
                        >
                          {area.name}
                          <ChevronDown className="w-4 h-4 -rotate-90" />
                        </button>

                        <AnimatePresence>
                          {hoveredArea === area.name && (
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              transition={{ duration: 0.15 }}
                              className="absolute left-full top-0 ml-1 w-64 bg-popover border border-popover-border rounded-md shadow-lg"
                            >
                              {area.courses.map((course) => (
                                <a
                                  key={course.name}
                                  href={course.link}
                                  className="block px-4 py-2 hover-elevate text-popover-foreground flex items-center gap-2"
                                  data-testid={`link-curso-${course.name.toLowerCase().replace(/\s+/g, '-')}`}
                                >
                                  <course.icon className="w-4 h-4 text-primary" />
                                  {course.name}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="/admissoes" className="text-foreground hover-elevate px-3 py-2 rounded-md transition-colors" data-testid="link-admissoes">
              {t('nav.admissions')}
            </a>
            <a href="/noticias" className="text-foreground hover-elevate px-3 py-2 rounded-md transition-colors" data-testid="link-noticias">
              {t('nav.news')}
            </a>
            <a href="/contato" className="text-foreground hover-elevate px-3 py-2 rounded-md transition-colors" data-testid="link-contato">
              {t('nav.contact')}
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <LanguageSelector />
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleDarkMode}
              className="toggle-elevate"
              data-testid="button-theme-toggle"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Link href="/admissoes" className={buttonVariants()} data-testid="button-inscreva-se">
              {t('nav.enroll')}
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <LanguageSelector />
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleDarkMode}
              data-testid="button-theme-toggle-mobile"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background"
          >
            <div className="px-4 py-4 space-y-2">
              <a href="/" className="block px-3 py-2 rounded-md hover-elevate text-foreground" data-testid="link-inicio-mobile">
                {t('nav.home')}
              </a>
              <div>
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md hover-elevate text-foreground"
                  data-testid="button-sobre-mobile"
                >
                  {t('nav.about')}
                </button>
                <AnimatePresence>
                  {mobileAboutOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-4 mt-1 space-y-1"
                    >
                      <a href="/sobre" className="block px-3 py-2 rounded-md hover-elevate text-foreground text-sm" data-testid="link-quem-somos-mobile">{t('nav.whoWeAre')}</a>
                      <a href="/orgaos-directivos" className="block px-3 py-2 rounded-md hover-elevate text-foreground text-sm" data-testid="link-orgaos-directivos-mobile">{t('nav.managementBody')}</a>
                      <a href="/normativos" className="block px-3 py-2 rounded-md hover-elevate text-foreground text-sm" data-testid="link-normativos-mobile">{t('nav.normativos')}</a>
                      <a href="/galeria" className="block px-3 py-2 rounded-md hover-elevate text-foreground text-sm" data-testid="link-galeria-mobile">{t('nav.gallery')}</a>
                      <a href="/ex-directores" className="block px-3 py-2 rounded-md hover-elevate text-foreground text-sm" data-testid="link-ex-directores-mobile">{t('nav.formerDirectors')}</a>
                      <a href="/escolas-filiadas" className="block px-3 py-2 rounded-md hover-elevate text-foreground text-sm" data-testid="link-escolas-filiadas-mobile">{t('nav.affiliatedSchools')}</a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div>
                <button
                  onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md hover-elevate text-foreground"
                  data-testid="button-cursos-mobile"
                >
                  {t('nav.courses')}
                </button>
                
                <AnimatePresence>
                  {mobileCoursesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-4 mt-1 space-y-1"
                    >
                      {courseAreas.map((area) => (
                        <div key={area.name}>
                          <button
                            onClick={() => setMobileAreaOpen(mobileAreaOpen === area.name ? null : area.name)}
                            className="w-full flex items-center justify-between px-3 py-2 rounded-md hover-elevate text-foreground text-sm"
                            data-testid={`button-area-${area.name.toLowerCase()}-mobile`}
                          >
                            {area.name}
                            <ChevronDown className={`w-3 h-3 transition-transform ${mobileAreaOpen === area.name ? 'rotate-180' : ''}`} />
                          </button>
                          
                          <AnimatePresence>
                            {mobileAreaOpen === area.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="pl-4 space-y-1"
                              >
                                {area.courses.map((course) => (
                                  <a
                                    key={course.name}
                                    href={course.link}
                                    className="block px-3 py-2 rounded-md hover-elevate text-foreground text-sm flex items-center gap-2"
                                    data-testid={`link-curso-${course.name.toLowerCase().replace(/\s+/g, '-')}-mobile`}
                                  >
                                    <course.icon className="w-4 h-4 text-primary" />
                                    {course.name}
                                  </a>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a href="/admissoes" className="block px-3 py-2 rounded-md hover-elevate text-foreground" data-testid="link-admissoes-mobile">
                {t('nav.admissions')}
              </a>
              <a href="/noticias" className="block px-3 py-2 rounded-md hover-elevate text-foreground" data-testid="link-noticias-mobile">
                {t('nav.news')}
              </a>
              <a href="/contato" className="block px-3 py-2 rounded-md hover-elevate text-foreground" data-testid="link-contato-mobile">
                {t('nav.contact')}
              </a>
              
              <div className="pt-2">
                <Link href="/admissoes" className={buttonVariants({ className: "w-full" })} data-testid="button-inscreva-se-mobile">
                  {t('nav.enroll')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
