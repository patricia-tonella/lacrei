import { useState, useEffect, useCallback } from 'react'
import { 
  mockProfessionals, 
  mockServices, 
  mockAppointments, 
  simulateApiDelay,
  type Professional,
  type Service,
  type Appointment,
} from '@/data/mockApi'

export const useProfessionals = () => {
  const [professionals, setProfessionals] = useState<Professional[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchProfessionals = useCallback(async () => {
    setLoading(true)
    setError(null)
    
    try {
      await simulateApiDelay()
      
      setProfessionals(mockProfessionals)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido')
    } finally {
      setLoading(false)
    }
  }, [])

  const searchProfessionals = useCallback(async (query: string) => {
    setLoading(true)
    setError(null)
    
    try {
      await simulateApiDelay(500)
      
      const filtered = mockProfessionals.filter(prof => 
        prof.name.toLowerCase().includes(query.toLowerCase()) ||
        prof.specialty.toLowerCase().includes(query.toLowerCase())
      )
      
      setProfessionals(filtered)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchProfessionals()
  }, [fetchProfessionals])

  return {
    professionals,
    loading,
    error,
    refetch: fetchProfessionals,
    search: searchProfessionals
  }
}
