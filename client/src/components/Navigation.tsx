import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface CourseArea {
  name: string;
  courses: string[];
}

const courseAreas: CourseArea[] = [
  {
    name: 'Informática',
    courses: ['Técnico de Informática', 'Gestão de Sistemas Informáticos']
  },
  {
    name: 'Contabilidade',
    courses: ['Contabilidade', 'Auditoria']
  },
  {
    name: 'Eletricidade',
    courses: ['Instalações Elétricas', 'Eletrónica Industrial']
  },
  {
    name: 'Mecânica',
    courses: ['Mecânica Automóvel', 'Manutenção Industrial']
  },
  {
    name: 'Construção Civil',
    courses: ['Construção Civil', 'Topografia']
  },
  {
    name: 'Gestão e Administração',
    courses: ['Gestão de Empresas', 'Secretariado']
  }
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileAreaOpen, setMobileAreaOpen] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const coursesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (coursesRef.current && !coursesRef.current.contains(event.target as Node)) {
        setCoursesOpen(false);
        setHoveredArea(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-primary" data-testid="logo-text">IPIKK</div>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <a href="#inicio" className="text-foreground hover-elevate px-3 py-2 rounded-md transition-colors" data-testid="link-inicio">
              Início
            </a>
            <a href="#sobre" className="text-foreground hover-elevate px-3 py-2 rounded-md transition-colors" data-testid="link-sobre">
              Sobre
            </a>
            
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
                Cursos
                <ChevronDown className={`w-4 h-4 transition-transform ${coursesOpen ? 'rotate-180' : ''}`} />
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
                                  key={course}
                                  href={`#curso-${course.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="block px-4 py-2 hover-elevate text-popover-foreground"
                                  data-testid={`link-curso-${course.toLowerCase().replace(/\s+/g, '-')}`}
                                >
                                  {course}
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

            <a href="#admissoes" className="text-foreground hover-elevate px-3 py-2 rounded-md transition-colors" data-testid="link-admissoes">
              Admissões
            </a>
            <a href="#noticias" className="text-foreground hover-elevate px-3 py-2 rounded-md transition-colors" data-testid="link-noticias">
              Notícias
            </a>
            <a href="#contato" className="text-foreground hover-elevate px-3 py-2 rounded-md transition-colors" data-testid="link-contato">
              Contato
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setDarkMode(!darkMode)}
              className="toggle-elevate"
              data-testid="button-theme-toggle"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button data-testid="button-inscreva-se">
              Inscreva-se
            </Button>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setDarkMode(!darkMode)}
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
              <a href="#inicio" className="block px-3 py-2 rounded-md hover-elevate text-foreground" data-testid="link-inicio-mobile">
                Início
              </a>
              <a href="#sobre" className="block px-3 py-2 rounded-md hover-elevate text-foreground" data-testid="link-sobre-mobile">
                Sobre
              </a>
              
              <div>
                <button
                  onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md hover-elevate text-foreground"
                  data-testid="button-cursos-mobile"
                >
                  Cursos
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileCoursesOpen ? 'rotate-180' : ''}`} />
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
                                    key={course}
                                    href={`#curso-${course.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="block px-3 py-2 rounded-md hover-elevate text-foreground text-sm"
                                    data-testid={`link-curso-${course.toLowerCase().replace(/\s+/g, '-')}-mobile`}
                                  >
                                    {course}
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

              <a href="#admissoes" className="block px-3 py-2 rounded-md hover-elevate text-foreground" data-testid="link-admissoes-mobile">
                Admissões
              </a>
              <a href="#noticias" className="block px-3 py-2 rounded-md hover-elevate text-foreground" data-testid="link-noticias-mobile">
                Notícias
              </a>
              <a href="#contato" className="block px-3 py-2 rounded-md hover-elevate text-foreground" data-testid="link-contato-mobile">
                Contato
              </a>
              
              <div className="pt-2">
                <Button className="w-full" data-testid="button-inscreva-se-mobile">
                  Inscreva-se
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
