import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Courses() {
  const { t } = useLanguage();

  const courses = [
    {
      id: "gsi",
      title: t('courses.gsi.title'),
      desc: t('courses.gsi.desc'),
      link: "/cursos/gestao-sistemas-informaticos"
    },
    {
      id: "ti",
      title: t('courses.ti.title'),
      desc: t('courses.ti.desc'),
      link: "/cursos/tecnico-informatica"
    },
    {
      id: "eie",
      title: t('courses.eie.title'),
      desc: t('courses.eie.desc'),
      link: "/cursos/energias-electricas"
    },
    {
      id: "fc",
      title: t('courses.fc.title'),
      desc: t('courses.fc.desc'),
      link: "/cursos/frio-climatizacao"
    },
    {
      id: "tocc",
      title: t('courses.tocc.title'),
      desc: t('courses.tocc.desc'),
      link: "/cursos/construcao-civil"
    },
    {
      id: "dp",
      title: t('courses.dp.title'),
      desc: t('courses.dp.desc'),
      link: "/cursos/desenhador-projectista"
    },
    {
      id: "tim",
      title: t('courses.tim.title'),
      desc: t('courses.tim.desc'),
      link: "/cursos/tecnologia-imoveis"
    },
    {
      id: "ttm",
      title: t('courses.ttm.title'),
      desc: t('courses.ttm.desc'),
      link: "/cursos/tecnologias-moveis"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-foreground">{t('courses.title')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <Card key={course.id} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.desc}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Link href={course.link}>
                  <Button className="w-full cursor-pointer">{t('courses.learnMore')}</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}