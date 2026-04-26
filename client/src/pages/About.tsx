import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Award, Target, Eye, Users, BookOpen, Briefcase, TrendingUp, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import campus from '@/components/imgs/img3.jpg'

export default function About() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Award,
      title: t('aboutPage.values.excellence.title'),
      description: t('aboutPage.values.excellence.description'),
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Heart,
      title: t('aboutPage.values.commitment.title'),
      description: t('aboutPage.values.commitment.description'),
      color: 'text-red-500',
      bgColor: 'bg-red-500/10'
    },
    {
      icon: Users,
      title: t('aboutPage.values.inclusion.title'),
      description: t('aboutPage.values.inclusion.description'),
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: Briefcase,
      title: t('aboutPage.values.employability.title'),
      description: t('aboutPage.values.employability.description'),
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10'
    }
  ];

  const achievements = [
    { number: '25+', label: t('aboutPage.achievements.experience'), icon: BookOpen },
    { number: '5000+', label: t('aboutPage.achievements.graduates'), icon: Users },
    { number: '15+', label: t('aboutPage.achievements.courses'), icon: Award },
    { number: '95%', label: t('aboutPage.achievements.employment'), icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6" data-testid="text-about-hero-title">
              {t('aboutPage.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-hero-subtitle">
              {t('aboutPage.hero.subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <img
                  src={campus}
                  alt="Campus IPIKK"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="text-historia-title">
                {t('aboutPage.history.title')}
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  {t('aboutPage.history.p1')}
                </p>
                <p>
                  {t('aboutPage.history.p2')}
                </p>
                <p>
                  {t('aboutPage.history.p3')}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="h-full border-2 border-primary/20">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl" data-testid="text-missao-title">{t('aboutPage.mission.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t('aboutPage.mission.description')}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="h-full border-2 border-primary/20">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Eye className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl" data-testid="text-visao-title">{t('aboutPage.vision.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t('aboutPage.vision.description')}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12" data-testid="text-valores-title">
              {t('aboutPage.values.title')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                >
                  <Card className="text-center h-full hover-elevate transition-all" data-testid={`card-valor-${index}`}>
                    <CardHeader>
                      <div className={`w-16 h-16 ${value.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                        <value.icon className={`w-8 h-8 ${value.color}`} />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-primary rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-primary-foreground text-center mb-12" data-testid="text-conquistas-title">
              {t('aboutPage.achievements.title')}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  className="text-center"
                  data-testid={`stat-${index}`}
                >
                  <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-4xl font-bold text-primary-foreground mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-primary-foreground/80">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
