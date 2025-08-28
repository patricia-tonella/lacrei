// Dados mockados para simular API da Lacrei Saúde

export interface Professional {
  id: string
  name: string
  specialty: string
  avatar: string
  rating: number
  experience: string
  languages: string[]
  availableSlots: string[]
  description: string
}

export interface Service {
  id: string
  name: string
  category: string
  description: string
  duration: number
  price: number
  isAvailable: boolean
  professionals: string[]
}

export interface Appointment {
  id: string
  patientId: string
  professionalId: string
  serviceId: string
  date: string
  time: string
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled'
  notes?: string
}

// Mock de profissionais de saúde
export const mockProfessionals: Professional[] = [
  {
    id: '1',
    name: 'Dra. Ana Silva',
    specialty: 'Psicologia',
    avatar: '👩‍⚕️',
    rating: 4.9,
    experience: '8 anos',
    languages: ['Português', 'Inglês'],
    availableSlots: ['09:00', '14:00', '16:00'],
    description: 'Especialista em saúde mental com foco em comunidade LGBTQIAPN+. Atendimento humanizado e inclusivo.'
  },
  {
    id: '2',
    name: 'Dr. Carlos Mendes',
    specialty: 'Endocrinologia',
    avatar: '👨‍⚕️',
    rating: 4.8,
    experience: '12 anos',
    languages: ['Português', 'Espanhol'],
    availableSlots: ['10:00', '15:00', '17:00'],
    description: 'Endocrinologista especializado em terapia hormonal para pessoas trans e não-binárias.'
  },
  {
    id: '3',
    name: 'Dra. Mariana Costa',
    specialty: 'Ginecologia',
    avatar: '👩‍⚕️',
    rating: 4.7,
    experience: '6 anos',
    languages: ['Português'],
    availableSlots: ['08:00', '13:00', '18:00'],
    description: 'Ginecologista com formação em saúde sexual e reprodutiva para todas as identidades de gênero.'
  },
  {
    id: '4',
    name: 'Dr. Pedro Santos',
    specialty: 'Clínico Geral',
    avatar: '👨‍⚕️',
    rating: 4.6,
    experience: '15 anos',
    languages: ['Português', 'Inglês', 'Francês'],
    availableSlots: ['11:00', '14:00', '16:00'],
    description: 'Clínico geral com experiência em atendimento inclusivo e acolhedor para comunidade LGBTQIAPN+.'
    },
    {
    id: '1',
    name: 'Dra. Joana Lopes',
    specialty: 'Psicologia',
    avatar: '👩‍⚕️',
    rating: 5,
    experience: '20 anos',
    languages: ['Português', 'Inglês'],
    availableSlots: ['09:00', '14:00'],
    description: 'Especialista em saúde mental com foco em comunidade LGBTQIAPN+. Atendimento humanizado e inclusivo.'
  },
]

// Mock de serviços
export const mockServices: Service[] = [
  {
    id: '1',
    name: 'Consulta Psicológica',
    category: 'Saúde Mental',
    description: 'Atendimento psicológico individual com foco em questões específicas da comunidade LGBTQIAPN+.',
    duration: 50,
    price: 120.00,
    isAvailable: true,
    professionals: ['1']
  },
  {
    id: '2',
    name: 'Consulta Endocrinológica',
    category: 'Especialidades',
    description: 'Avaliação e acompanhamento endocrinológico, incluindo terapia hormonal.',
    duration: 40,
    price: 150.00,
    isAvailable: true,
    professionals: ['2']
  },
  {
    id: '3',
    name: 'Consulta Ginecológica',
    category: 'Saúde da Mulher',
    description: 'Atendimento ginecológico inclusivo para todas as identidades de gênero.',
    duration: 45,
    price: 130.00,
    isAvailable: false,
    professionals: ['3']
  },
  {
    id: '4',
    name: 'Consulta Clínica',
    category: 'Clínica Geral',
    description: 'Avaliação clínica geral com abordagem inclusiva e acolhedora.',
    duration: 30,
    price: 100.00,
    isAvailable: true,
    professionals: ['4']
  }
]

// Mock de agendamentos
export const mockAppointments: Appointment[] = [
  {
    id: '1',
    patientId: '1',
    professionalId: '1',
    serviceId: '1',
    date: '2024-12-20',
    time: '14:00',
    status: 'confirmed',
    notes: 'Primeira consulta - ansiedade e questões de identidade'
  },
  {
    id: '2',
    patientId: '2',
    professionalId: '2',
    serviceId: '2',
    date: '2024-12-21',
    time: '10:00',
    status: 'scheduled',
    notes: 'Acompanhamento hormonal'
  }
]


// Simulação de delay para parecer API real
export const simulateApiDelay = (ms: number = 800): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms))
}


