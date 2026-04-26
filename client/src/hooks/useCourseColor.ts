import { useEffect } from 'react';

// Cores para cada curso em HSL
const courseColors: Record<string, string> = {
  'tecnico-informatica': '142 76% 36%', 
  'gestao-sistemas-informaticos': '210 95% 42%', 
  'construcao-civil': '0 0% 50%', 
  'frio-climatizacao': '25 95% 53%', 
  'energias-electricas': '210 100% 25%', 
  'desenhador-projectista': '48 96% 53%', 
  'tecnologia-imoveis': '0 84% 50%', 
  'tecnologias-moveis': '0 84% 50%', 
};

export function useCourseColor(courseId: string) {
  useEffect(() => {
    const color = courseColors[courseId];
    if (color) {
      // Aplicar a cor primária ao documento
      document.documentElement.style.setProperty('--primary', color);
      
      // Calcular a cor de foreground (branco ou preto baseado na luminosidade)
      const lightness = parseFloat(color.split(' ')[2].replace('%', ''));
      const foreground = lightness < 50 ? '0 0% 98%' : '0 0% 9%';
      document.documentElement.style.setProperty('--primary-foreground', foreground);
      
      // Calcular a cor do ring (borda de foco)
      document.documentElement.style.setProperty('--ring', color);
    }
    
    // Cleanup: restaurar a cor padrão quando o componente desmontar
    return () => {
      document.documentElement.style.removeProperty('--primary');
      document.documentElement.style.removeProperty('--primary-foreground');
      document.documentElement.style.removeProperty('--ring');
    };
  }, [courseId]);
}

