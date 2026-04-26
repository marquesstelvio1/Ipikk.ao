import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';
import { Server, Monitor, Zap, Building2, Snowflake, Calculator, Compass, Hammer, Lightbulb, Car, Ruler, Briefcase, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';

export default function CoursesSection() {
  const { t } = useLanguage();
  
  const courses = [
    {
      icon: Server,
      title: t('courses.gsi.title'),
      description: t('courses.gsi.desc'),
      link: '/cursos/gestao-sistemas-informaticos',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Monitor,
      title: t('courses.ti.title'),
      description: t('courses.ti.desc'),
      link: '/cursos/tecnico-informatica',
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10'
    },
    {
      icon: Zap,
      title: t('courses.eie.title'),
      description: t('courses.eie.desc'),
      link: '/cursos/energias-electricas',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10'
    },
    {
      icon: Building2,
      title: t('courses.tocc.title'),
      description: t('courses.tocc.desc'),
      link: '/cursos/construcao-civil',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10'
    },
    {
      icon: Snowflake,
      title: t('courses.fc.title'),
      description: t('courses.fc.desc'),
      link: '/cursos/frio-climatizacao',
      color: 'text-teal-500',
      bgColor: 'bg-teal-500/10'
    },
    {
      icon: Compass,
      title: t('courses.dp.title'),
      description: t('courses.dp.desc'),
      link: '/cursos/desenhador-projectista',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: Home,
      title: t('courses.tim.title'),
      description: t('courses.tim.desc'),
      link: '/cursos/tecnologia-imoveis',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10'
    },
    {
      icon: Hammer,
      title: t('courses.ttm.title'),
      description: t('courses.ttm.desc'),
      link: '/cursos/tecnologias-moveis',
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10'
    }
  ];

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
            {t('courses.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-courses-subtitle">
            {t('courses.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="h-full hover-elevate transition-all" data-testid={`card-course-${index}`}>
                <CardHeader>
                  <div className={`w-14 h-14 ${course.bgColor} rounded-xl flex items-center justify-center mb-3`}>
                    <course.icon className={`w-7 h-7 ${course.color}`} />
                  </div>
                  <CardTitle className="text-xl" data-testid={`text-course-title-${index}`}>{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4" data-testid={`text-course-description-${index}`}>
                    {course.description}
                  </CardDescription>
                  <Link href={course.link} className={buttonVariants({ variant: 'outline', className: 'w-full' })} data-testid={`button-course-saiba-mais-${index}`}>
                      {t('courses.learnMore')}
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
