import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const news = [
  {
    date: '15 Nov 2024',
    category: 'Evento',
    title: 'Cerimónia de Graduação 2024',
    excerpt: 'Celebração da conclusão de mais uma turma de formandos do IPIKK com familiares e parceiros.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop'
  },
  {
    date: '10 Nov 2024',
    category: 'Notícia',
    title: 'Novo Laboratório de Informática',
    excerpt: 'Inauguração do laboratório de última geração equipado com tecnologia moderna para formação prática.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop'
  },
  {
    date: '05 Nov 2024',
    category: 'Parceria',
    title: 'Acordo com Empresas do Setor',
    excerpt: 'IPIKK firma parceria com empresas líderes para garantir estágios e oportunidades de emprego.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop'
  }
];

export default function NewsSection() {
  return (
    <section id="noticias" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-news-title">
            Notícias e Eventos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-news-subtitle">
            Fique por dentro das últimas novidades e acontecimentos do IPIKK.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover-elevate transition-all group" data-testid={`card-news-${index}`}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground" data-testid={`badge-category-${index}`}>
                      {item.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2" data-testid={`text-date-${index}`}>
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                  <CardTitle className="text-xl" data-testid={`text-news-title-${index}`}>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4" data-testid={`text-news-excerpt-${index}`}>
                    {item.excerpt}
                  </CardDescription>
                  <Button variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent" data-testid={`button-read-more-${index}`}>
                    Ler Mais
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
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
          <Button size="lg" data-testid="button-news-ver-mais">
            Ver Mais Notícias
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
