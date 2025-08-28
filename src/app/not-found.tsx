'use client'

import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing[6]};
  text-align: center;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.neutral[50]}, 
    ${({ theme }) => theme.colors.emerald[10]});
`

const NotFoundTitle = styled.h1`
  font-size: clamp(4rem, 8vw, 8rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.emerald[60]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  line-height: 1;
`

const NotFoundSubtitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: ${({ theme }) => theme.colors.neutral[700]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`

const NotFoundDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.neutral[600]};
  max-width: 600px;
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`

const HomeButton = styled(Link)`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.emerald[60]};
  color: ${({ theme }) => theme.colors.neutral[50]};
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[8]}`};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  transition: all 0.2s ease;
  border: 2px solid ${({ theme }) => theme.colors.emerald[60]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.emerald[70]};
    border-color: ${({ theme }) => theme.colors.emerald[70]};
    transform: translateY(-2px);
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.emerald[30]};
    outline-offset: 2px;
  }
`

export default function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundSubtitle>Página não encontrada</NotFoundSubtitle>
      <NotFoundDescription>
        A página que você está procurando não existe ou foi movida. 
        Volte para a página inicial e continue navegando pelo nosso site.
      </NotFoundDescription>
      <HomeButton href="/">
        Voltar para o início
      </HomeButton>
    </NotFoundContainer>
  )
}
