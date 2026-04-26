import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { User, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

// Importe as imagens
import od1 from '@/components/imgs/od1.jpeg';
import od2 from '@/components/imgs/od2.jpeg';
import od9 from '@/components/imgs/od2.jpg';
import od3 from '@/components/imgs/od3.jpeg';
import od4 from '@/components/imgs/od4.jpeg';
import od5 from '@/components/imgs/od5.jpeg';
import od6 from '@/components/imgs/od6.jpeg';

export default function Management() {
  const { t } = useLanguage(); 
  const sections = [
    {
      title: t('managementPage.sections.executive.title'),
      description: t('managementPage.sections.executive.description'),
      members: [
        { name: "Ferreira Fragoso", role: t('managementPage.roles.generalDirector'), email: "director.geral@ipikk.ao", image: od1 },
        { name: "Carlos Brito Da silva ", role: t('managementPage.roles.pedagogicalDirector'), email: "pedagogico@ipikk.ao", image: od2 },
        { name: "Luís Iango", role: t('managementPage.roles.administrativeDirector'), email: "administrativo@ipikk.ao", image: od9 },
              ]
    },
    {
      title: t('managementPage.sections.courseCoordinators.title'),
      description: t('managementPage.sections.courseCoordinators.description'),
      members: [
    { name: "Diassilua Simão", role: t('managementPage.roles.informaticsCoordinator'), email: "informatica@ipikk.ao", image: "" },
        { name: "António Muxinda", role: t('managementPage.roles.civilConstructionCoordinator'), email: "civil@ipikk.ao", image: "" },
        { name: "Manuel Domingos", role: t('managementPage.roles.electricityCoordinator'), email: "electricidade@ipikk.ao", image: "" },
        { name: "Gilberto da Conceição", role: t('managementPage.roles.hvacCoordinator'), email: "frio@ipikk.ao", image: "" },
        { name: "Ivete Nunes", role: t('managementPage.roles.informaticsmanagementCoordinator'), email: "informatica@ipikk.ao", image: "" },
        { name: "Silson Borges", role: t('managementPage.roles.furnitureCoordinator'), email: "informatica@ipikk.ao", image: "" },
        { name: "Nome do Coord.", role: t('managementPage.roles.informaticsCoordinator'), email: "informatica@ipikk.ao", image: "" }
      ]
    },
    {
      title: t('managementPage.sections.subjectCoordinators.title'),
      description: t('managementPage.sections.subjectCoordinators.description'),
      members: [
    { name: "Celina Domingos", role: t('managementPage.roles.portugueseCoordinator'), email: "portugues@ipikk.ao", image: "" },
        { name: "Isabel Chitangueleca", role: t('managementPage.roles.mathCoordinator'), email: "matematica@ipikk.ao", image: "" },
        { name: "Manuel João", role: t('managementPage.roles.physicsCoordinator'), email: "fisica@ipikk.ao", image: "" },
        { name: "Edson Massukina", role: t('managementPage.roles.portugueseCoordinator'), email: "ingles@ipikk.ao", image: "" },
        { name: "Manuel Cangueze", role: t('managementPage.roles.dtCoordinator'), email: "ingles@ipikk.ao", image: "" },
        { name: "Julieta Tchitungo", role: t('managementPage.roles.empCoordinator'), email: "ingles@ipikk.ao", image: "" },
        { name: "Joana Arlindo", role: t('managementPage.roles.FaiCoordinator'), email: "ingles@ipikk.ao", image: "" },
        { name: "Guilherme Quileba", role: t('managementPage.roles.chemistryCoordinator'), email: "quimica@ipikk.ao", image: "" }
      ]
    },
    {
      title: t('managementPage.sections.areaChiefs.title'),
      description: t('managementPage.sections.areaChiefs.description'),
      members: [
        { name: "Pedro João", role: t('managementPage.roles.headOfsecurity'), email: "gabinete@ipikk.ao", image: "" },
        { name: "Ivo Gama", role: t('managementPage.roles.headOfPatrimony'), email: "patrimonio@ipikk.ao", image: "" },
        { name: "Maria Manuel", role: t('managementPage.roles.headOfacadoffice'), email: "financas@ipikk.ao", image: "" }
      ]
    },
    {
      title: t('managementPage.sections.otherCoordinators.title'),
      description: t('managementPage.sections.otherCoordinators.description'),
      members: [
        { name: "Amélia Bartolomeu", role: t('managementPage.roles.morningShiftCoordinator'), email: "turno.manha@ipikk.ao", image: "" },
        { name: "António Pinto", role: t('managementPage.roles.afternoonShiftCoordinator'), email: "turno.tarde@ipikk.ao", image: "" },
        { name: "Hélder Gonçalo", role: t('managementPage.roles.GivaCoordinator'), email: "turno.noite@ipikk.ao", image: "" },
        { name: "Hélder Félix", role: t('managementPage.roles.disccomCoordinator'), email: "estagios@ipikk.ao", image: "" },
        { name: "Esperança Serafim", role: t('managementPage.roles.socialworkCoordinator'), email: "estagios@ipikk.ao", image: "" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                {t('managementPage.title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('managementPage.subtitle')}
              </p>
            </motion.div>

            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-24 last:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mb-10"
                >
                  <h2 className="text-3xl font-bold text-foreground mb-3 border-l-4 border-primary pl-4">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground pl-5">
                    {section.description}
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {section.members.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="h-full border-2 border-primary/10 hover:border-primary/30 transition-colors overflow-hidden group">
                        <div className="aspect-[4/5] bg-muted relative overflow-hidden">
                          {member.image ? (
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-secondary/30">
                              <User className="w-20 h-20 text-muted-foreground/50" />
                            </div>
                          )}
                          
                          {/* Overlay com contacto ao passar o rato */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                             <div className="flex gap-4">
                                <a href={`mailto:${member.email}`} className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-colors" title="Enviar Email">
                                    <Mail className="w-5 h-5" />
                                </a>
                             </div>
                          </div>
                        </div>
                        
                        <CardHeader className="text-center pb-2">
                          <CardTitle className="text-lg font-bold">{member.name}</CardTitle>
                          <p className="text-primary font-medium text-sm">{member.role}</p>
                        </CardHeader>
                        <CardContent className="text-center">
                          <p className="text-sm text-muted-foreground">
                            {member.email}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}