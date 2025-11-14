import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function EnrollmentCTA() {
  const benefits = [
    'Infraestruturas modernas e equipadas',
    'Corpo docente qualificado e experiente',
    'Parcerias com empresas líderes',
    'Formação prática e teórica de qualidade'
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=600&fit=crop')] bg-cover bg-center opacity-10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6" data-testid="text-enrollment-title">
              Faça sua Matrícula no IPIKK
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8" data-testid="text-enrollment-subtitle">
              Junte-se a nós e usufrua do que temos a oferecer para a sua capacitação e desenvolvimento profissional.
            </p>
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                  data-testid={`text-benefit-${index}`}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/90">{benefit}</span>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-base" data-testid="button-enrollment-inscrever">
                Inscrever-se Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent hover:bg-white/10 text-primary-foreground border-primary-foreground/30" data-testid="button-enrollment-informacoes">
                Mais Informações
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary-foreground/10 rounded-2xl transform rotate-3" />
              <div className="relative bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">Processo de Matrícula</h3>
                <ol className="space-y-4 text-primary-foreground/90">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center font-bold">1</span>
                    <span>Preencha o formulário de pré-inscrição online</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center font-bold">2</span>
                    <span>Entregue os documentos necessários</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center font-bold">3</span>
                    <span>Realize o pagamento da inscrição</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center font-bold">4</span>
                    <span>Receba a confirmação e comece suas aulas</span>
                  </li>
                </ol>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
