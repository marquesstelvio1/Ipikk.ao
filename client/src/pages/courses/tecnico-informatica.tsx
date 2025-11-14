import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Monitor, CheckCircle2, Clock, Users, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function TecnicoInformatica() {
  const modules = [
    'Arquitetura de Computadores',
    'Montagem e Manutenção de PCs',
    'Sistemas Operativos',
    'Redes de Computadores',
    'Programação Básica',
    'Suporte Técnico e Help Desk'
  ];

  const skills = [
    'Diagnóstico e reparação de hardware',
    'Instalação de sistemas operativos',
    'Configuração de redes locais',
    'Manutenção preventiva e corretiva',
    'Atendimento ao cliente',
    'Resolução de problemas técnicos'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-br from-cyan-500/10 via-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="w-20 h-20 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Monitor className="w-10 h-10 text-cyan-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Técnico de Informática
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Curso técnico completo em manutenção e reparação de equipamentos informáticos.
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
                O curso de Técnico de Informática prepara profissionais especializados na manutenção, reparação e suporte de sistemas informáticos.
              </p>
              <p className="text-muted-foreground mb-4">
                Os formandos adquirem conhecimentos práticos essenciais para diagnosticar problemas em hardware e software, realizar manutenções preventivas e prestar assistência técnica qualificada.
              </p>
              <p className="text-muted-foreground">
                A formação inclui práticas intensivas em laboratórios modernos, preparando os alunos para o mercado de trabalho em assistência técnica, lojas especializadas e departamentos de TI.
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
              Inscreva-se agora e torne-se um técnico de informática qualificado.
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
