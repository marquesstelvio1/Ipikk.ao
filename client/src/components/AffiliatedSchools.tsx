import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, MapPin, Phone, Mail, GraduationCap } from 'lucide-react';

const schools = [
  {
    name: 'Instituto Politécnico Privado "Ndombwa"',
    location: 'Luanda, Angola',
    phone: '(+244) 923 456 789',
    email: 'ndombwa@ipikk.ao'
  },
  {
    name: 'Instituto Politécnico Privado "Bondo Matuatunguila"',
    location: 'Nova-Vida – Rua 40-Casa 41',
    phone: '(+244) 928 497 433',
    email: 'ippbmatuatunguila@hotmail.com'
  },
  {
    name: 'Instituto Politécnico Privado "Pedro Nelson"',
    location: 'Talatona – Bairro 4 de Abril',
    phone: '(+244) 925 678 901',
    email: 'pedronelson@ipikk.ao'
  },
  {
    name: 'Instituto Politécnico Privado "Professora Maria Osvalda"',
    location: 'Benfica-Rua das Salinas',
    phone: '(+244) 949 766 444',
    email: 'mariaosvalda@ipikk.ao'
  },
  {
    name: 'Instituto Politécnico Privado "A.J.Nicolau"',
    location: 'Benfica – Rua Dona Xepa-Girafa',
    phone: '(+244) 929 431 259',
    email: 'ajnicolau@ipikk.ao'
  },
  {
    name: 'Instituto Médio Politécnico "Maria Luisa"',
    location: 'Viana – Estalagem – Rua da Sofogor',
    phone: '(+244) 993 338 493',
    email: 'marialuisa@ipikk.ao'
  }
];

export default function AffiliatedSchools() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(schools.length / itemsPerPage));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const visibleSchools = schools.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.ceil(schools.length / itemsPerPage) - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(schools.length / itemsPerPage));
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-schools-title">
            Escolas Filiadas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-schools-subtitle">
            Rede de instituições parceiras que compartilham nossa missão de excelência educacional.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleSchools.map((school, index) => (
              <motion.div
                key={`${currentIndex}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full hover-elevate transition-all" data-testid={`card-school-${index}`}>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg" data-testid={`text-school-name-${index}`}>{school.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span data-testid={`text-school-location-${index}`}>{school.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <span data-testid={`text-school-phone-${index}`}>{school.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate" data-testid={`text-school-email-${index}`}>{school.email}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              size="icon"
              variant="outline"
              onClick={goToPrevious}
              data-testid="button-schools-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(schools.length / itemsPerPage) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-muted'
                  }`}
                  data-testid={`button-schools-indicator-${index}`}
                />
              ))}
            </div>

            <Button
              size="icon"
              variant="outline"
              onClick={goToNext}
              data-testid="button-schools-next"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" data-testid="button-schools-ver-mais">
            Ver Todas as Escolas
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
