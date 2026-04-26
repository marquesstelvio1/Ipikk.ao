import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Management from "@/pages/Management";
import Courses from "@/pages/Courses";
import GestaoSistemasInformaticos from "@/pages/courses/gestao-sistemas-informaticos";
import TecnicoInformatica from "@/pages/courses/tecnico-informatica";
import EnergiasElectricas from "@/pages/courses/energias-electricas";
import ConstrucaoCivil from "@/pages/courses/construcao-civil";
import FrioClimatizacao from "@/pages/courses/frio-climatizacao";
import DesenhadorProjectista from "@/pages/courses/desenhador-projectista";
import TecnologiasMoveis from "@/pages/courses/tecnologias-moveis";
import TecnologiaImoveis from "@/pages/courses/TecnologiaImoveis";
import Contact from "@/pages/Contact";
import News from "@/pages/News";
import Admissions from "@/pages/Admissions";
import Gallery from "@/pages/Gallery";
import NotFound from "@/pages/not-found";
import escolasfiliad from "@/components/AffiliatedSchools1";
import AffiliationInfo from "@/components/AffiliationInfo";
import NewsArticle from "@/NewsArticle";
import FormerDirectors from "@/pages/FormerDirectors";
import Privacy from "@/pages/Privacy";
import Normativos from "@/pages/Normativos";
import CookieConsent from "@/components/CookieConsent";
function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/sobre" component={About}/>
      <Route path="/orgaos-directivos" component={Management}/>
      <Route path="/cursos" component={Courses}/>
      <Route path="/cursos/gestao-sistemas-informaticos" component={GestaoSistemasInformaticos}/>
      <Route path="/cursos/tecnico-informatica" component={TecnicoInformatica}/>
      <Route path="/cursos/energias-electricas" component={EnergiasElectricas}/>
      <Route path="/cursos/construcao-civil" component={ConstrucaoCivil}/>
      <Route path="/cursos/frio-climatizacao" component={FrioClimatizacao}/>
      <Route path="/cursos/desenhador-projectista" component={DesenhadorProjectista}/>
      <Route path="/cursos/tecnologias-moveis" component={TecnologiasMoveis}/>
      <Route path="/cursos/tecnologia-imoveis" component={TecnologiaImoveis}/>
      <Route path="/contato" component={Contact}/>
      <Route path="/noticias" component={News}/>
      <Route path="/admissoes" component={Admissions}/>
      <Route path="/galeria" component={Gallery}/>
      <Route path="/escolas-filiadas" component={escolasfiliad}/>
      <Route path="/politica-de-privacidade" component={Privacy}/>
      <Route path="/filiacao-saber-mais" component={AffiliationInfo}/>
      <Route path="/noticias/:id" component={NewsArticle} />
      <Route path="/ex-directores" component={FormerDirectors} />
      <Route path="/normativos" component={Normativos} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <ScrollToTop />
          <Router />
          <CookieConsent />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
