export interface AffiliatedSchool {
  id: number;
  name: string;
  location: string;
  phone: string;
  email: string;
  image?: string;
}

export const affiliatedSchools: AffiliatedSchool[] = [
  {
    id: 1,
    name: 'Instituto Politécnico Privado "Ndombwa"',
    location: 'Luanda, Angola',
    phone: '(+244) 923 456 789',
    email: 'ndombwa@ipikk.ao',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80'
  },
  {
    id: 2,
    name: 'Instituto Politécnico Privado "Bondo Matuatunguila"',
    location: 'Nova-Vida – Rua 40-Casa 41',
    phone: '(+244) 928 497 433',
    email: 'ippbmatuatunguila@hotmail.com',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80'
  },
  {
    id: 3,
    name: 'Instituto Politécnico Privado "Pedro Nelson"',
    location: 'Talatona – Bairro 4 de Abril',
    phone: '(+244) 925 678 901',
    email: 'pedronelson@ipikk.ao',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80'
  },
  {
    id: 4,
    name: 'Instituto Politécnico Privado "Professora Maria Osvalda"',
    location: 'Benfica-Rua das Salinas',
    phone: '(+244) 949 766 444',
    email: 'mariaosvalda@ipikk.ao',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80'
  },
  {
    id: 5,
    name: 'Instituto Politécnico Privado "A.J.Nicolau"',
    location: 'Benfica – Rua Dona Xepa-Girafa',
    phone: '(+244) 929 431 259',
    email: 'ajnicolau@ipikk.ao',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80'
  },
  {
    id: 6,
    name: 'Instituto Médio Politécnico "Maria Luisa"',
    location: 'Viana – Estalagem – Rua da Sofogor',
    phone: '(+244) 993 338 493',
    email: 'marialuisa@ipikk.ao',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80'
  }
];

