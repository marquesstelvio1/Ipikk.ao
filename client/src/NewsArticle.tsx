import { useEffect, useState } from 'react';
import { useParams, Link } from 'wouter';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

interface Article {
  id: string;
  title: string;
  content: string;
  date: string;
  category: string;
  image?: string;
  author?: string;
}

export default function NewsArticle() {
  const { id } = useParams();
  const { t } = useLanguage();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    // Mock data com conteúdo completo (substitua pela sua fonte de dados)
    const mockArticles: Article[] = [
      {
        id: '1',
        title: t('news.item1.title'),
        date: t('news.item1.date'),
        category: t('news.item1.category'),
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop',
        author: 'Equipa IPIKK',
        content: `
          <p class="mb-4">O Instituto Politécnico Industrial de Kilamba Kiaxi (IPIKK) realizou com sucesso a Cerimónia de Graduação 2024, celebrando a conclusão de mais uma turma de formandos qualificados.</p>
          
          <p class="mb-4">O evento contou com a presença de familiares, parceiros institucionais e membros da comunidade académica, que se reuniram para homenagear os novos profissionais técnicos formados pelo IPIKK.</p>
          
          <h3 class="text-xl font-semibold mb-3 mt-6">Momentos Marcantes</h3>
          <p class="mb-4">Durante a cerimónia, foram destacados os melhores alunos de cada curso, reconhecendo o mérito académico e o compromisso com a excelência na formação técnica.</p>
          
          <p class="mb-4">Os formandos receberam os seus certificados em diversas áreas, incluindo Informática, Eletricidade, Construção Civil, Frio e Climatização, entre outras especialidades técnicas.</p>
          
          <h3 class="text-xl font-semibold mb-3 mt-6">Compromisso com o Futuro</h3>
          <p class="mb-4">O IPIKK reafirma o seu compromisso em continuar a formar profissionais de excelência, preparados para os desafios do mercado de trabalho angolano e contribuindo para o desenvolvimento do país.</p>
        `
      },
      {
        id: '2',
        title: t('news.item2.title'),
        date: '10 Nov 2024',
        category: t('news.item2.category'),
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop',
        author: 'Equipa IPIKK',
        content: `
          <p class="mb-4">O IPIKK inaugurou oficialmente o seu novo Laboratório de Informática de última geração, equipado com tecnologia moderna para garantir uma formação prática e eficiente dos estudantes.</p>
          
          <p class="mb-4">O novo laboratório conta com computadores de alta performance, ferramentas de diagnóstico avançadas e software atualizado, proporcionando aos alunos uma experiência de aprendizagem alinhada com as necessidades do mercado de trabalho.</p>
          
          <h3 class="text-xl font-semibold mb-3 mt-6">Equipamentos Modernos</h3>
          <p class="mb-4">O espaço foi projetado para suportar atividades práticas em redes de computadores, programação, manutenção de hardware e outras competências essenciais na área de informática.</p>
          
          <p class="mb-4">Esta iniciativa reforça o compromisso do IPIKK em oferecer infraestruturas de qualidade que permitam aos estudantes desenvolver competências técnicas práticas e relevantes.</p>
        `
      },
      {
        id: '3',
        title: t('news.item3.title'),
        date: '05 Nov 2024',
        category: t('news.item3.category'),
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=600&fit=crop',
        author: 'Equipa IPIKK',
        content: `
          <p class="mb-4">O IPIKK firmou importantes parcerias estratégicas com empresas líderes do setor, garantindo estágios profissionais e oportunidades de emprego para os seus formandos.</p>
          
          <p class="mb-4">Estas parcerias visam aproximar os estudantes do mercado de trabalho, proporcionando experiências práticas que complementam a formação teórica recebida na instituição.</p>
          
          <h3 class="text-xl font-semibold mb-3 mt-6">Benefícios para os Estudantes</h3>
          <p class="mb-4">Os acordos estabelecidos incluem programas de estágio estruturados, visitas técnicas, palestras com profissionais do setor e oportunidades de recrutamento direto.</p>
          
          <p class="mb-4">Esta iniciativa reforça a empregabilidade dos formandos do IPIKK, criando pontes entre a formação académica e as necessidades reais das empresas angolanas.</p>
        `
      },
    ];

    const foundArticle = mockArticles.find((a) => a.id === id);
    if (foundArticle) {
      setArticle(foundArticle);
    }
  }, [id, t]);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">{t('news.articleNotFound') || 'Artigo não encontrado'}</h1>
            <Link href="/noticias">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" /> {t('news.backToNews')}
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Botão Voltar - Movido para cima */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-6"
            >
              <Link href="/noticias">
                <Button variant="ghost" className="mb-4">
                  <ArrowLeft className="mr-2 h-4 w-4" /> {t('news.backToNews')}
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden">
                {article.image && (
                  <div className="relative h-64 md:h-96 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                )}
                
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    {article.author && (
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {article.author}
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-3xl md:text-4xl">{article.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div 
                    className="text-foreground space-y-4 [&_p]:mb-4 [&_p]:leading-relaxed [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mb-3 [&_h3]:mt-6 [&_h3]:text-foreground"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}