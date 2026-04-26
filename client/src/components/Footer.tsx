import { useState } from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

export default function Footer() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <footer id="contato" className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4" data-testid="text-footer-about-title">IPIKK</h3>
            <p className="text-muted-foreground mb-4" data-testid="text-footer-about-description">
              {t('footer.aboutDescription')}
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="hover-elevate" data-testid="button-social-facebook">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover-elevate" data-testid="button-social-instagram">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover-elevate" data-testid="button-social-linkedin">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover-elevate" data-testid="button-social-youtube">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4" data-testid="text-footer-links-title">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><a href="/sobre" className="text-muted-foreground hover:text-foreground transition-colors hover-elevate px-2 py-1 rounded-md inline-block" data-testid="link-footer-sobre">{t('footer.aboutUs')}</a></li>
              <li><a href="/#cursos" className="text-muted-foreground hover:text-foreground transition-colors hover-elevate px-2 py-1 rounded-md inline-block" data-testid="link-footer-cursos">{t('nav.courses')}</a></li>
              <li><a href="/admissoes" className="text-muted-foreground hover:text-foreground transition-colors hover-elevate px-2 py-1 rounded-md inline-block" data-testid="link-footer-admissoes">{t('nav.admissions')}</a></li>
              <li><a href="/galeria" className="text-muted-foreground hover:text-foreground transition-colors hover-elevate px-2 py-1 rounded-md inline-block" data-testid="link-footer-galeria">{t('nav.gallery')}</a></li>
              <li><a href="/noticias" className="text-muted-foreground hover:text-foreground transition-colors hover-elevate px-2 py-1 rounded-md inline-block" data-testid="link-footer-noticias">{t('nav.news')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4" data-testid="text-footer-contact-title">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span data-testid="text-footer-address">Luanda, Angola</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span data-testid="text-footer-phone">(+244) 923 456 789</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span data-testid="text-footer-email">geral@ipikk.ao</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4" data-testid="text-footer-newsletter-title">{t('footer.newsletter')}</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              {t('footer.newsletterText')}
            </p>
            <form 
              className="flex gap-2" 
              onSubmit={async (e) => {
                e.preventDefault();
                
                // Validação básica do email
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!email || !emailRegex.test(email)) {
                  toast({
                    title: t('footer.emailInvalid') || "Email inválido",
                    description: t('footer.emailInvalidDescription') || "Por favor, insira um endereço de email válido",
                    variant: "destructive",
                  });
                  return;
                }

                setIsSubmitting(true);
                
                // Simular envio (aqui você pode adicionar uma chamada à API)
                try {
                  await new Promise(resolve => setTimeout(resolve, 1500));
                  
                  // Salvar no localStorage como exemplo (em produção, enviar para API)
                  const subscriptions = JSON.parse(localStorage.getItem('newsletter_subscriptions') || '[]');
                  if (!subscriptions.includes(email)) {
                    subscriptions.push(email);
                    localStorage.setItem('newsletter_subscriptions', JSON.stringify(subscriptions));
                  }
                  
                  toast({
                    title: t('footer.newsletterSuccess') || "Inscrição realizada!",
                    description: t('footer.newsletterSuccessDescription') || `Obrigado por se inscrever! Você receberá nossas novidades em ${email}`,
                  });
                  
                  setEmail('');
                } catch (error) {
                  toast({
                    title: t('footer.newsletterError') || "Erro ao inscrever",
                    description: t('footer.newsletterErrorDescription') || "Ocorreu um erro. Por favor, tente novamente mais tarde.",
                    variant: "destructive",
                  });
                } finally {
                  setIsSubmitting(false);
                }
              }}
            >
              <Input 
                type="email" 
                placeholder={t('footer.emailPlaceholder')}
                className="flex-1"
                data-testid="input-newsletter-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                required
                aria-label={t('footer.emailPlaceholder') || "Endereço de email"}
              />
              <Button 
                type="submit" 
                data-testid="button-newsletter-submit"
                disabled={isSubmitting || !email}
                aria-label={t('footer.send') || "Enviar"}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {t('footer.sending') || "Enviando..."}
                  </>
                ) : (
                  t('footer.send')
                )}
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p data-testid="text-footer-copyright">
            {t('footer.copyright')}
           </p>
        </div>
      </div>
    </footer>
  );
}
