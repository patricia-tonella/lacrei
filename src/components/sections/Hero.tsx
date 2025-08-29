'use client';

import React from 'react';
import styled from 'styled-components';
import { Button } from '@/components/ui/Button';

const HeroSection = styled.section`
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  background: linear-gradient(
    135deg,
    #ff0000 0%,
    #ff8c00 16.67%,
    #ffff00 33.33%,
    #00ff00 50%,
    #0000ff 66.67%,
    #8b00ff 83.33%,
    #ff00ff 100%
  );
  overflow: hidden;
  margin-top: ${({ theme }) => theme.lacreiSpacing.desktop.headerToElement};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: ${({ theme }) => theme.lacreiSpacing.mobile.headerToElement};
  }
`;

const HeroContent = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.grid.lg.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.lacreiSpacing.desktop.sectionToSection}
    ${({ theme }) => theme.grid.lg.margin};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: ${({ theme }) => theme.grid.md.maxWidth};
    padding: ${({ theme }) => theme.spacing[10]}
      ${({ theme }) => theme.grid.md.margin};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: ${({ theme }) => theme.grid.md.maxWidth};
    padding: ${({ theme }) => theme.lacreiSpacing.mobile.sectionToSection}
      ${({ theme }) => theme.grid.md.margin};
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: ${({ theme }) => theme.grid.sm.maxWidth};
    padding: ${({ theme }) => theme.spacing[6]}
      ${({ theme }) => theme.grid.sm.margin};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: ${({ theme }) => theme.grid.xl.maxWidth};
    padding: ${({ theme }) => theme.lacreiSpacing.desktop.sectionToSection}
      ${({ theme }) => theme.grid.xl.margin};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints['2xl']}) {
    max-width: ${({ theme }) => theme.grid['2xl'].maxWidth};
    padding: ${({ theme }) => theme.lacreiSpacing.desktop.sectionToSection}
      ${({ theme }) => theme.grid['2xl'].margin};
  }
`;

const TextContent = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: ${({ theme }) => theme.lacreiSpacing.desktop.sectionToSection};
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.lacreiSpacing.mobile.sectionToSection};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[6]};
  }
`;

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.emerald[70]};
  text-align: center;
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.lacreiSpacing.desktop.headingToElement};
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
    margin-bottom: ${({ theme }) =>
      theme.lacreiSpacing.mobile.headingToElement};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
    margin-bottom: ${({ theme }) => theme.spacing[3]};
  }
`;

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.neutral[500]};
  margin-bottom: ${({ theme }) => theme.lacreiSpacing.desktop.buttonToElement};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    max-width: 600px;
    margin-bottom: ${({ theme }) => theme.lacreiSpacing.mobile.buttonToElement};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    max-width: 100%;
  }
`;

const HeroActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.lacreiSpacing.desktop.buttonToButton};
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.lacreiSpacing.mobile.buttonToButton};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.lacreiSpacing.mobile.buttonToButton};

    > * {
      width: 100%;
      max-width: 300px;
    }
  }
`;

export const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroContent>
        <TextContent>
          <HeroTitle>Olá, você está na Lacrei Saúde!</HeroTitle>
          <HeroSubtitle>
            Conectamos pessoas LGBTQIAPN+ com profissionais de saúde
            qualificados, proporcionando experiências de cuidado seguras e
            inclusivas.
          </HeroSubtitle>

          <HeroActions>
            <Button variant='primary' size='md'>
              Para pacientes
            </Button>
            <Button variant='primary' size='md'>
              Para profissionais
            </Button>
          </HeroActions>
        </TextContent>
      </HeroContent>
    </HeroSection>
  );
};
