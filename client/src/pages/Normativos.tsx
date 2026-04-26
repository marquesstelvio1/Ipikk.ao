import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Normativos() {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);

  // Caminho para o PDF (coloque o arquivo normas.pdf na pasta client/public/)
  const pdfPath = '/normas.pdf';

  const handleDownload = () => {
    setIsLoading(true);
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'normas.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
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
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <FileText className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                {t('normativosPage.title') || 'Documentos Normativos'}
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t('normativosPage.subtitle') || 'Consulte os documentos normativos e regulamentos do IPIKK. Aqui você encontra todas as normas, regulamentos e diretrizes que regem o funcionamento da nossa instituição.'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-6 mb-8"
            >
              <Card className="border-2 border-border/20 hover:border-primary/50 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    {t('normativosPage.documentTitle') || 'Normativos e Regulamentos'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {t('normativosPage.documentDescription') || 'Documento completo contendo todas as normas, regulamentos e diretrizes institucionais do IPIKK.'}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={handleDownload}
                      disabled={isLoading}
                      className="flex-1"
                      aria-label={t('normativosPage.download') || 'Baixar PDF'}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          {t('normativosPage.downloading') || 'Baixando...'}
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4 mr-2" />
                          {t('normativosPage.download') || 'Baixar PDF'}
                        </>
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      className="flex-1"
                      aria-label={t('normativosPage.view') || 'Visualizar PDF'}
                    >
                      <a href={pdfPath} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t('normativosPage.view') || 'Visualizar'}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-border/20 hover:border-primary/50 transition-colors duration-300">
                <CardHeader>
                  <CardTitle>{t('normativosPage.infoTitle') || 'Informações'}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <strong className="text-foreground">{t('normativosPage.lastUpdate') || 'Última atualização:'}</strong>{' '}
                      {t('normativosPage.lastUpdateDate') || 'Janeiro 2024'}
                    </p>
                    <p>
                      <strong className="text-foreground">{t('normativosPage.format') || 'Formato:'}</strong> PDF
                    </p>
                    <p>
                      <strong className="text-foreground">{t('normativosPage.language') || 'Idioma:'}</strong>{' '}
                      {t('normativosPage.languageValue') || 'Português'}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12"
            >
              <Card className="bg-muted/30 border-2 border-border/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {t('normativosPage.importantTitle') || 'Informações Importantes'}
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{t('normativosPage.important1') || 'Os documentos normativos são atualizados periodicamente. Verifique sempre a versão mais recente.'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{t('normativosPage.important2') || 'Em caso de dúvidas sobre os normativos, entre em contato com a secretaria da instituição.'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{t('normativosPage.important3') || 'Os documentos estão disponíveis para download e visualização online.'}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Visualizador de PDF embutido */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12"
            >
              <Card className="border-2 border-border/20">
                <CardHeader>
                  <CardTitle>{t('normativosPage.viewerTitle') || 'Visualizador de PDF'}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-[600px] border border-border rounded-lg overflow-hidden bg-muted/20">
                    <iframe
                      src={`${pdfPath}#toolbar=1&navpanes=1&scrollbar=1`}
                      className="w-full h-full"
                      title={t('normativosPage.documentTitle') || 'Normativos e Regulamentos'}
                      aria-label={t('normativosPage.documentTitle') || 'Normativos e Regulamentos'}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    {t('normativosPage.viewerNote') || 'Se o PDF não carregar, use o botão "Visualizar" para abrir em uma nova aba.'}
                  </p>
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

