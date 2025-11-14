import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Server, CheckCircle2, Clock, Users, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function GestaoSistemasInformaticos() {
  const modules = [
    'Fundamentos de Sistemas Operativos',
    'Administração de Redes',
    'Gestão de Bases de Dados',
    'Segurança da Informação',
    'Cloud Computing e Virtualização',
    'Gestão de Projetos de TI'
  ];

  const skills = [
    'Administração de servidores Linux e Windows',
    'Configuração e manutenção de redes empresariais',
    'Gestão de bases de dados relacionais',
    'Implementação de medidas de segurança',
    'Virtualização e gestão de cloud',
    'Suporte técnico avançado'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-br from-blue-500/10 via-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Server className="w-10 h-10 text-blue-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6" data-testid="text-course-title">
              Gestão de Sistemas Informáticos
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Formação avançada em gestão e administração de sistemas de informação empresariais.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader>
                <Clock className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Duração</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">3 anos letivos</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Modalidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Presencial</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Certificação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Diploma Técnico</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Sobre o Curso</h2>
              <p className="text-muted-foreground mb-4">
                O curso de Gestão de Sistemas Informáticos forma profissionais capazes de administrar, configurar e manter sistemas computacionais complexos em ambientes empresariais.
              </p>
              <p className="text-muted-foreground mb-4">
                Os estudantes desenvolvem competências técnicas em administração de servidores, redes, bases de dados e segurança da informação, preparando-os para assumir funções de responsabilidade em departamentos de TI.
              </p>
              <p className="text-muted-foreground">
                Com forte componente prática, o curso inclui laboratórios equipados com tecnologia moderna e projetos reais que simulam desafios do mercado de trabalho.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Módulos do Curso</h2>
              <div className="space-y-3">
                {modules.map((module, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{module}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">Competências Adquiridas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <Card key={index} className="hover-elevate transition-all">
                  <CardContent className="p-4">
                    <p className="text-sm">{skill}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-primary rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Pronto para Começar?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Inscreva-se agora e inicie sua carreira em Gestão de Sistemas Informáticos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Inscrever-se Agora
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent hover:bg-white/10 text-primary-foreground border-primary-foreground/30">
                Baixar Brochura
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
