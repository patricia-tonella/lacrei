'use client'

import React, { useState } from 'react'
import styled from 'styled-components'
import { useProfessionals } from '@/hooks/useApi'
import { Button } from '@/components/ui/Button'
import { LoadingSpinner, Skeleton } from '@/components/ui/LoadingSpinner'

const ProfessionalsSection = styled.section`
  padding: ${({ theme }) => theme.spacing[16]} 0;
  background-color: ${({ theme }) => theme.colors.neutral[50]};
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing[4]};
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing[12]};
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral[900]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
`

const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.neutral[500]};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`

const SearchContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`

const SearchInput = styled.input`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border: 2px solid ${({ theme }) => theme.colors.emerald[20]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  min-width: 300px;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.emerald[60]};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-width: 250px;
  }
`

const ProfessionalsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing[6]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`

const ProfessionalCard = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[6]};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  border: 1px solid ${({ theme }) => theme.colors.emerald[10]};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border-color: ${({ theme }) => theme.colors.emerald[30]};
  }
`

const ProfessionalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.emerald[10]};
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.emerald[20]};
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const AvatarInitials = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #349E35, #64B4FF);
  border-radius: 50%;
  color: white;
  font-weight: bold;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
`

const ProfessionalInfo = styled.div`
  flex: 1;
`

const ProfessionalName = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.neutral[900]};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`

const Specialty = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.emerald[60]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`

const Stars = styled.span`
  color: #FFD700;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`

const RatingText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.neutral[500]};
`

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.neutral[500]};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`

const ProfessionalDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`

const DetailTag = styled.span`
  background: ${({ theme }) => theme.colors.emerald[10]};
  color: ${({ theme }) => theme.colors.emerald[70]};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`

const AvailableSlots = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`

const SlotsTitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.neutral[900]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`

const SlotsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`

const SlotTag = styled.span`
  background: ${({ theme }) => theme.colors.success[50]};
  color: ${({ theme }) => theme.colors.success[700]};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`

const ErrorState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[12]};
  background: ${({ theme }) => theme.colors.error[50]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.error[200]};
`

const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.error[700]};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`

const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[12]};
  color: ${({ theme }) => theme.colors.neutral[500]};
`

const EmptyText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`

export const ProfessionalsList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const { professionals, loading, error, search, refetch } = useProfessionals()

  const handleSearch = () => {
    if (searchQuery.trim()) {
      search(searchQuery)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  if (loading && professionals.length === 0) {
    return (
      <ProfessionalsSection>
        <Container>
          <SectionHeader>
            <SectionTitle>Nossos Profissionais</SectionTitle>
            <SectionSubtitle>
              Encontre profissionais qualificados e inclusivos para cuidar da sua saúde
            </SectionSubtitle>
          </SectionHeader>
          
          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Buscar por especialidade, nome ou idioma..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled
            />
            <Button disabled>
              <LoadingSpinner size="sm" />
            </Button>
          </SearchContainer>

          <div style={{ marginTop: '2rem' }}>
            {[...Array(6)].map((_, index) => (
              <div key={index} style={{ marginBottom: '1rem' }}>
                <Skeleton width="100%" height="120px" />
              </div>
            ))}
          </div>
        </Container>
      </ProfessionalsSection>
    )
  }

  if (error) {
    return (
      <ProfessionalsSection>
        <Container>
          <SectionHeader>
            <SectionTitle>Nossos Profissionais</SectionTitle>
            <SectionSubtitle>
              Encontre profissionais qualificados e inclusivos para cuidar da sua saúde
            </SectionSubtitle>
          </SectionHeader>
          
          <ErrorState>
            <ErrorText>
              Erro ao carregar profissionais. Tente novamente.
            </ErrorText>
            <Button onClick={refetch} variant="secondary">
              Tentar Novamente
            </Button>
          </ErrorState>
        </Container>
      </ProfessionalsSection>
    )
  }

  return (
    <ProfessionalsSection>
      <Container>
        <SectionHeader>
          <SectionTitle>Nossos Profissionais</SectionTitle>
          <SectionSubtitle>
            Encontre profissionais qualificados e inclusivos para cuidar da sua saúde
          </SectionSubtitle>
        </SectionHeader>
        
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Buscar por especialidade, nome ou idioma"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <Button onClick={handleSearch} disabled={loading}>
            {loading ? <LoadingSpinner size="sm" /> : 'Buscar'}
          </Button>
        </SearchContainer>

        {professionals.length === 0 ? (
          <EmptyState>
            <EmptyText>
              Nenhum profissional encontrado
            </EmptyText>
          </EmptyState>
        ) : (
          <ProfessionalsGrid>
            {professionals.map((professional) => (
              <ProfessionalCard key={professional.id}>
                <ProfessionalHeader>
                  <Avatar>
                    <AvatarInitials>
                      {professional.name
                        .split(' ')
                        .map(n => n[0])
                        .join('')
                        .toUpperCase()
                        .slice(0, 2)}
                    </AvatarInitials>
                  </Avatar>
                  <ProfessionalInfo>
                    <ProfessionalName>{professional.name}</ProfessionalName>
                    <Specialty>{professional.specialty}</Specialty>
                    <Rating>
                      <Stars>
                        {[...Array(5)].map((_, i) => (
                          <span key={i} style={{ color: i < professional.rating ? '#FFD700' : '#E0E0E0' }}>
                            ★
                          </span>
                        ))}
                      </Stars>
                      <RatingText>{professional.rating}/5</RatingText>
                    </Rating>
                  </ProfessionalInfo>
                </ProfessionalHeader>
                
                <Description>{professional.description}</Description>
                
                <ProfessionalDetails>
                  <DetailTag>Experiência: {professional.experience}</DetailTag>
                  <DetailTag>Idiomas: {professional.languages.join(', ')}</DetailTag>
                </ProfessionalDetails>
                
                <AvailableSlots>
                  <SlotsTitle>Horários Disponíveis:</SlotsTitle>
                  <SlotsList>
                    {professional.availableSlots.slice(0, 3).map((slot, index) => (
                      <SlotTag key={index}>{slot}</SlotTag>
                    ))}
                    {professional.availableSlots.length > 3 && (
                      <SlotTag>+{professional.availableSlots.length - 3} mais</SlotTag>
                    )}
                  </SlotsList>
                </AvailableSlots>
              </ProfessionalCard>
            ))}
          </ProfessionalsGrid>
        )}
      </Container>
    </ProfessionalsSection>
  )
}
