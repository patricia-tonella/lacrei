// Dados mockados para simular uma chamada de API
export interface Professional {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  languages: string[];
  availableSlots: string[];
  description: string;
}

export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  duration: number;
  price: number;
  isAvailable: boolean;
  professionals: string[];
}

export const mockProfessionals: Professional[] = [
  {
    id: '1',
    name: 'Dra. Ana Silva',
    specialty: 'Psicologia',
    experience: '8 anos',
    languages: ['Português', 'Inglês'],
    availableSlots: ['09:00', '14:00', '16:00'],
    description:
      'Especialista em saúde mental com foco em comunidade LGBTQIAPN+. Atendimento humanizado e inclusivo.',
  },
  {
    id: '2',
    name: 'Dr. Carlos Mendes',
    specialty: 'Endocrinologia',
    experience: '12 anos',
    languages: ['Português', 'Espanhol'],
    availableSlots: ['10:00', '15:00', '17:00'],
    description:
      'Endocrinologista especializado em terapia hormonal para pessoas trans e não-binárias.',
  },
  {
    id: '3',
    name: 'Dra. Mariana Costa',
    specialty: 'Ginecologia',
    experience: '6 anos',
    languages: ['Português'],
    availableSlots: ['08:00', '13:00', '18:00'],
    description:
      'Ginecologista com formação em saúde sexual e reprodutiva para todas as identidades de gênero.',
  },
  {
    id: '4',
    name: 'Dr. Pedro Santos',
    specialty: 'Clínico Geral',
    experience: '15 anos',
    languages: ['Português', 'Inglês', 'Francês'],
    availableSlots: ['11:00', '14:00', '16:00'],
    description:
      'Clínico geral com experiência em atendimento inclusivo e acolhedor para comunidade LGBTQIAPN+.',
  },
  {
    id: '1',
    name: 'Dra. Joana Lopes',
    specialty: 'Psicologia',
    experience: '20 anos',
    languages: ['Português', 'Inglês'],
    availableSlots: ['09:00', '14:00'],
    description:
      'Especialista em saúde mental com foco em comunidade LGBTQIAPN+. Atendimento humanizado e inclusivo.',
  },
];

// Simulação de delay para parecer API real
export const simulateApiDelay = (ms: number = 800): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
