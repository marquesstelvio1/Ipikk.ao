import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, BookOpen, Users, Award, Mail } from 'lucide-react';
import { Link } from 'wouter';

export default function AffiliationInfo() {
  const benefits = [
    {
      icon: BookOpen,
      title: "Metodologia Comprovada",
      description: "Acesso a um currículo robusto e a uma metodologia de ensino que garante resultados de excelência e prepara os alunos para o futuro."
    },
    {
      icon: Users,
      title: "Formação de Professores",
      description: "Programas contínuos de capacitação e desenvolvimento para o seu corpo docente, elevando a qualidade do ensino."
    },
    {
      icon: Award,
      title: "Certificação e Prestígio",
      description: "Associe a sua marca a uma rede de prestígio, reconhecida pela qualidade e rigor académico em todo o país."
    },
    {
      icon: CheckCircle,
      title: "Recursos e Suporte",
      description: "Acesso a materiais didáticos, plataformas digitais e uma vasta rede de conhecimento e partilha entre instituições."
    }
  ];

  const processSteps = [
    {
      step: "1. Pedido Inicial",
      description: "Entre em contato connosco para manifestar o seu interesse. Pode fazê-lo presencialmente na nossa instituição ou através dos nossos canais digitais."
    },
    {
      step: "2. Avaliação de Requisitos",
      description: "A nossa equipa realizará uma visita de avaliação às suas instalações para verificar as condições e o alinhamento com os nossos padrões de qualidade."
    },
    {
      step: "3. Proposta e Acordo",
      description: "Após a avaliação positiva, apresentaremos uma proposta de filiação detalhada. Uma vez aceite, assinamos o acordo de parceria."
    },
    {
      step: "4. Integração e Formação",
      description: "A sua equipa receberá a formação inicial sobre a nossa metodologia e processos, garantindo uma transição suave e um início de sucesso."
    }
  ];

  const faqs = [
    {
      question: "Qual é o custo da filiação?",
      answer: "Os custos de filiação variam dependendo do tamanho da escola e do nível de integração desejado. Para obter uma proposta personalizada e detalhada, por favor, entre em contato com o nosso departamento de parcerias."
    },
    {
      question: "A minha escola precisa de ter instalações específicas?",
      answer: "Sim, existem requisitos mínimos de infraestrutura para garantir um ambiente de aprendizagem seguro e de qualidade. Estes requisitos incluem salas de aula adequadas, laboratórios (quando aplicável) e espaços comuns. Todos os detalhes serão avaliados durante a visita técnica."
    },
    {
      question: "Quanto tempo demora o processo de filiação?",
      answer: "O processo completo, desde o contato inicial até a assinatura do acordo, pode levar de 1 a 3 meses. A duração depende da rapidez na partilha de informações e da agenda de avaliações."
    },
    {
      question: "Que tipo de suporte o IPIKK oferece às escolas filiadas?",
      answer: "Oferecemos suporte contínuo que inclui formação de professores, consultoria pedagógica, acesso a materiais didáticos atualizados, suporte de marketing e integração na nossa rede de eventos e competições académicas."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-card border-b border-border">
          <div className="absolute inset-0 bg-primary/5" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6"
            >
              Junte-se à Nossa Rede de Ensino
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Eleve o padrão da sua instituição ao fazer parte de uma rede de excelência, com acesso a uma metodologia de sucesso e suporte contínuo.
            </motion.p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Vantagens da Filiação</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-card border border-border rounded-xl p-6 text-center h-full hover-elevate transition-shadow duration-300">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-card border-y border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-16">O Nosso Processo de Filiação</h2>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2" />
              {processSteps.map((item, index) => (
                <div key={index} className="relative pl-12 md:pl-0 mb-16 last:mb-0">
                  <div className={`md:flex items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="md:w-1/2"></div>
                    <div className="absolute top-0 left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full text-primary-foreground flex items-center justify-center font-bold z-10">
                      {index + 1}
                    </div>
                    <div className="w-full md:w-1/2 md:px-8">
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-background p-6 rounded-xl border border-border shadow-md"
                      >
                        <h3 className="text-xl font-bold mb-2 text-foreground">{item.step}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Perguntas Frequentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg text-left font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/90 text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto para Dar o Próximo Passo?</h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              A nossa equipa está disponível para esclarecer todas as suas dúvidas e iniciar o processo de filiação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link href="/contato">
                  Entre em Contato <Mail className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}