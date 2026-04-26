import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useMemo, useEffect } from 'react';
import { Link } from 'wouter';

export default function News() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const allNews = useMemo(() => [
    {
      id: 1,
      date: t('news.item1.date'),
      category: t('news.item1.category'),
      title: t('news.item1.title'),
      excerpt: t('news.item1.excerpt'),
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      date: '10 Nov 2024',
      category: t('news.item2.category'),
      title: t('news.item2.title'),
      excerpt: t('news.item2.excerpt'),
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      date: '05 Nov 2024',
      category: t('news.item3.category'),
      title: t('news.item3.title'),
      excerpt: t('news.item3.excerpt'),
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      date: '01 Nov 2024',
      category: 'Evento',
      title: 'Feira de Tecnologia 2024',
      excerpt: 'Os alunos apresentaram seus projetos finais na feira anual de tecnologia do IPIKK.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop'
    },
    {
      id: 5,
      date: '25 Oct 2024',
      category: 'Institucional',
      title: 'Visita do Ministério da Educação',
      excerpt: 'Representantes do Ministério visitaram as instalações para avaliar novos cursos.',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop'
    },
     {
      id: 6,
      date: '20 Oct 2024',
      category: 'Desporto',
      title: 'Torneio Inter-Escolar',
      excerpt: 'A equipa de futebol do IPIKK venceu o campeonato regional.',
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bde9be2d?w=600&h=400&fit=crop'
    }
  ], [t]);

  const [filteredNews, setFilteredNews] = useState(allNews);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = allNews.filter(item =>
      item.title.toLowerCase().includes(lowercasedQuery) ||
      item.excerpt.toLowerCase().includes(lowercasedQuery) ||
      item.category.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredNews(filtered);
  }, [searchQuery, allNews]);

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
              className="text-center mb-12"
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                {t('news.title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('news.subtitle')}
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto mb-12 flex gap-4">
                <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input 
                      className="pl-10" 
                      placeholder={t('news.searchPlaceholder')}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <Button>{t('news.searchButton')}</Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link href={`/noticias/${item.id}`}>
                    <a className="block h-full">
                      <Card className="h-full overflow-hidden hover-elevate transition-all group flex flex-col">
                        <div className="relative h-48 overflow-hidden shrink-0">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-primary text-primary-foreground">
                              {item.category}
                            </Badge>
                          </div>
                        </div>
                        <CardHeader>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <Calendar className="w-4 h-4" />
                            {item.date}
                          </div>
                          <CardTitle className="text-xl line-clamp-2">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col justify-between">
                          <CardDescription className="text-base mb-4 line-clamp-3">
                            {item.excerpt}
                          </CardDescription>
                          <div className="text-primary inline-flex items-center font-semibold group-hover:underline mt-auto">
                            {t('news.readMore')}
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  </Link>
                </motion.div>
              ))}
            </div>
            {filteredNews.length === 0 && (
              <div className="text-center col-span-full py-16">
                <p className="text-muted-foreground">{t('news.noResults')}</p>
                      </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}