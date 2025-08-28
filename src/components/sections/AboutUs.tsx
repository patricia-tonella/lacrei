'use client'

import React from 'react'
import styled from 'styled-components'

const AboutUsSection = styled.section`
  /* Footer → qualquer elemento: 64px (Desktop) / 64px (Mobile) */
  padding: ${({ theme }) => theme.lacreiSpacing.desktop.footerToElement} 0;
  background-color: ${({ theme }) => theme.colors.neutral[50]};
`

const Container = styled.div`
  /* Grid System da Lacrei */
  width: 100%;
  max-width: ${({ theme }) => theme.grid.lg.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.grid.lg.margin};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: ${({ theme }) => theme.grid.md.maxWidth};
    padding: 0 ${({ theme }) => theme.grid.md.margin};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: ${({ theme }) => theme.grid.md.maxWidth};
    padding: 0 ${({ theme }) => theme.grid.md.margin};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: ${({ theme }) => theme.grid.sm.maxWidth};
    padding: 0 ${({ theme }) => theme.grid.sm.margin};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: ${({ theme }) => theme.grid.xl.maxWidth};
    padding: 0 ${({ theme }) => theme.grid.xl.margin};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints['2xl']}) {
    max-width: ${({ theme }) => theme.grid['2xl'].maxWidth};
    padding: 0 ${({ theme }) => theme.grid['2xl'].margin};
  }
`

const ContentGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const TextContent = styled.div`
  max-width: 800px;
  width: 100%;
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral[900]};
  /* Heading → qualquer elemento: 32px (Desktop) / 24px (Mobile) */
  margin-bottom: ${({ theme }) => theme.lacreiSpacing.desktop.headingToElement};
  line-height: 1.2;
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
    margin-bottom: ${({ theme }) => theme.lacreiSpacing.mobile.headingToElement};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
    margin-bottom: ${({ theme }) => theme.spacing[5]};
  }
`

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.neutral[500]};
  margin-bottom: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    line-height: 1.7;
  }
`

export const AboutUs: React.FC = () => {
  return (
    <AboutUsSection>
      <Container>
        <ContentGrid>
          <TextContent>
            <Title>Atendimento qualificado, seguro e inclusivo</Title>
            <Description>
              Acreditamos que, ao possibilitar a inclusão clínica da nossa comunidade, transformamos o mundo.
              Foi pensando nisso, que a Lacrei Saúde nasceu em 2020 com o propósito de oferecer a melhor experiência no acesso à profissionais da saúde para as pessoas LGBTQIAPN+.
              Atuamos de forma ética e embasada nas regras e diretrizes estabelecidas pelos órgãos de classe e regulamentadores.
            </Description>
          </TextContent>
        </ContentGrid>
      </Container>
    </AboutUsSection>
  )
}
