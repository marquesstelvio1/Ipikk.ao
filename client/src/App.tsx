import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Home from "@/pages/Home";
import About from "@/pages/About";
import GestaoSistemasInformaticos from "@/pages/courses/gestao-sistemas-informaticos";
import TecnicoInformatica from "@/pages/courses/tecnico-informatica";
import EnergiasElectricas from "@/pages/courses/energias-electricas";
import ConstrucaoCivil from "@/pages/courses/construcao-civil";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/sobre" component={About}/>
      <Route path="/cursos/gestao-sistemas-informaticos" component={GestaoSistemasInformaticos}/>
      <Route path="/cursos/tecnico-informatica" component={TecnicoInformatica}/>
      <Route path="/cursos/energias-electricas" component={EnergiasElectricas}/>
      <Route path="/cursos/construcao-civil" component={ConstrucaoCivil}/>
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
          <Router />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
