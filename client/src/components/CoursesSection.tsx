import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Laptop, Zap, Wrench, Building2, Calculator, Users2 } from 'lucide-react';

const courses = [
  {
    icon: Laptop,
    title: 'Gestão de Sistemas Informáticos',
    description: 'Formação avançada em gestão e administração de sistemas de informação.',
    color: 'text-blue-500'
  },
  {
    icon: Laptop,
    title: 'Técnico de Informática',
    description: 'Curso técnico completo em manutenção e reparação de equipamentos informáticos.',
    color: 'text-cyan-500'
  },
  {
    icon: Zap,
    title: 'Energias e Instalações Elétricas',
    description: 'Formação em instalação, manutenção e reparação de sistemas elétricos.',
    color: 'text-yellow-500'
  },
  {
    icon: Building2,
    title: 'Técnico de Obras de Construção Civil',
    description: 'Preparação para trabalhar em projetos de construção e obras civis.',
    color: 'text-orange-500'
  },
  {
    icon: Wrench,
    title: 'Frio e Climatização',
    description: 'Especialização em sistemas de refrigeração e ar condicionado.',
    color: 'text-teal-500'
  },
  {
    icon: Calculator,
    title: 'Contabilidade',
    description: 'Formação em contabilidade empresarial e gestão financeira.',
    color: 'text-green-500'
  }
];

export default function CoursesSection() {
  return (
    <section id="cursos" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-courses-title">
            Cursos Ministrados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-courses-subtitle">
            Oferecemos uma ampla variedade de cursos técnicos e profissionais para preparar você para o mercado de trabalho.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full hover-elevate transition-all" data-testid={`card-course-${index}`}>
                <CardHeader>
                  <course.icon className={`w-12 h-12 ${course.color} mb-3`} />
                  <CardTitle className="text-xl" data-testid={`text-course-title-${index}`}>{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4" data-testid={`text-course-description-${index}`}>
                    {course.description}
                  </CardDescription>
                  <Button variant="outline" className="w-full" data-testid={`button-course-saiba-mais-${index}`}>
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button size="lg" data-testid="button-courses-ver-todos">
            Ver Todos os Cursos
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
