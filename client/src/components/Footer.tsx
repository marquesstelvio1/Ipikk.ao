import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  return (
    <footer id="contato" className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4" data-testid="text-footer-about-title">IPIKK</h3>
            <p className="text-muted-foreground mb-4" data-testid="text-footer-about-description">
              Instituto Politécnico Industrial de Kuanza-Norte, formando profissionais de excelência desde 1999.
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
            <h3 className="text-lg font-semibold text-foreground mb-4" data-testid="text-footer-links-title">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors hover-elevate px-2 py-1 rounded-md inline-block" data-testid="link-footer-sobre">Sobre Nós</a></li>
              <li><a href="#cursos" className="text-muted-foreground hover:text-foreground transition-colors hover-elevate px-2 py-1 rounded-md inline-block" data-testid="link-footer-cursos">Cursos</a></li>
              <li><a href="#admissoes" className="text-muted-foreground hover:text-foreground transition-colors hover-elevate px-2 py-1 rounded-md inline-block" data-testid="link-footer-admissoes">Admissões</a></li>
              <li><a href="#noticias" className="text-muted-foreground hover:text-foreground transition-colors hover-elevate px-2 py-1 rounded-md inline-block" data-testid="link-footer-noticias">Notícias</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4" data-testid="text-footer-contact-title">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span data-testid="text-footer-address">Kuanza-Norte, Angola</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span data-testid="text-footer-phone">(+244) 923 456 789</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span data-testid="text-footer-email">info@ipikk.ao</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4" data-testid="text-footer-newsletter-title">Newsletter</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Receba as últimas notícias e atualizações do IPIKK.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Seu email" 
                className="flex-1"
                data-testid="input-newsletter-email"
              />
              <Button data-testid="button-newsletter-submit">
                Enviar
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p data-testid="text-footer-copyright">
            © 2024 IPIKK - Instituto Politécnico Industrial de Kuanza-Norte. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
