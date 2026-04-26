import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';

export default function NewsSection() {
  const { t } = useLanguage();

  const news = [
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
    }
  ];

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
            {t('news.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-news-subtitle">
            {t('news.subtitle')}
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
              <Link href={`/noticias/${item.id}`}>
                <a className="block h-full">
                  <Card className="h-full overflow-hidden hover-elevate transition-all group flex flex-col" data-testid={`card-news-${index}`}>
                    <div className="relative h-48 overflow-hidden shrink-0">
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
                      <CardTitle className="text-xl line-clamp-2">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      <CardDescription className="text-base mb-4 flex-grow" data-testid={`text-news-excerpt-${index}`}>
                        {item.excerpt}
                      </CardDescription>
                      <div className="text-primary inline-flex items-center font-semibold group-hover:underline mt-auto" data-testid={`button-read-more-${index}`}>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/noticias">
            <a className="inline-block">
              <Button size="lg" data-testid="button-news-ver-mais">
                {t('news.viewMore')}
              </Button>
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
