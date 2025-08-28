'use client'

import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.neutral[50]};
  border-top: 1px solid ${({ theme }) => theme.colors.emerald[20]};
  padding: ${({ theme }) => theme.spacing[16]} 0 ${({ theme }) => theme.spacing[8]};
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing[4]};
`

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing[8]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
`

const LogoImage = styled.div`
  height: 40px;
  width: auto;
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 32px;
  }
`

const FooterTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.neutral[900]};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
`

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.neutral[500]};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.emerald[60]};
  }
`

const SocialMediaContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ theme }) => theme.spacing[3]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
`

const SocialMediaLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.colors.emerald[60]};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.emerald[60]};
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.emerald[60]};
    color: white;
    transform: translateY(-2px);
  }
`

const FooterBottom = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.emerald[20]};
  padding-top: ${({ theme }) => theme.spacing[6]};
  text-align: center;
`



const DisclaimerText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.neutral[500]};
  line-height: 1.5;
  max-width: 800px;
  margin: 0 auto;
`

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing[6]};
  right: ${({ theme }) => theme.spacing[6]};
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.emerald[60]};
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
  z-index: 1000;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.emerald[70]};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    bottom: ${({ theme }) => theme.spacing[4]};
    right: ${({ theme }) => theme.spacing[4]};
    width: 45px;
    height: 45px;
  }
`

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <FooterContainer>
        <FooterContent>
          <FooterGrid>
            <FooterColumn>
              <FooterLogo>
                <LogoImage>
                  <Image
                    src="/logo_lacrei.svg"
                    alt="Logo da Lacrei Saúde que redireciona para a página principal"
                    width={170}
                    height={48}
                    loading='lazy'
                  />
                </LogoImage>
              </FooterLogo>
              <SocialMediaContainer>
                <SocialMediaLink href="https://www.facebook.com/lacrei.saude/" aria-label="Facebook site externo - abrirá uma nova janela" target='_blank' rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </SocialMediaLink>
                <SocialMediaLink href="https://www.instagram.com/lacrei.saude" aria-label="Instagram site externo - abrirá uma nova janela">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.49.49-1.297.49-1.787 0-.49-.49-.49-1.297 0-1.787.49-.49 1.297-.49 1.787 0 .49.49.49 1.297 0 1.787z"/>
                  </svg>
                </SocialMediaLink>
                <SocialMediaLink href="https://www.linkedin.com/company/lacrei" aria-label="Linkedin site externo - abrirá uma nova janela">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </SocialMediaLink>
                <SocialMediaLink href="mailto:contato@lacrei.com.br" aria-label="E-mail site externo - abrirá uma nova janela com seu e-mail como remetente e a Lacrei saúde como destinatário">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z"/>
                  </svg>
                </SocialMediaLink>
              </SocialMediaContainer>
            </FooterColumn>

            <FooterColumn>
              <FooterTitle>Lacrei Saúde</FooterTitle>
              <FooterLink href="/quem-somos">Quem Somos</FooterLink>
              <FooterLink href="/nosso-proposito">Nosso Propósito</FooterLink>
              <FooterLink href="/missao-visao-valor">Missão, Visão e Valor</FooterLink>
              <FooterLink href="/acessibilidade">Acessibilidade</FooterLink>
            </FooterColumn>

            <FooterColumn>
              <FooterTitle>Saúde</FooterTitle>
              <FooterLink href="/buscar-atendimento">Buscar atendimento</FooterLink>
              <FooterLink href="/oferecer-atendimento">Oferecer atendimento</FooterLink>
            </FooterColumn>

            <FooterColumn>
              <FooterTitle>Segurança e Privacidade</FooterTitle>
              <FooterLink href="/politica-privacidade">Política de Privacidade</FooterLink>
              <FooterLink href="/termos-uso">Termos de Uso</FooterLink>
              <FooterLink href="/direitos-titular">Direitos de Titular</FooterLink>
            </FooterColumn>
          </FooterGrid>

          <FooterBottom>
            <DisclaimerText>
              A Lacrei Saúde não oferece tratamento médico emergencial. Em caso de emergência procure o hospital mais próximo.
            </DisclaimerText>
            <DisclaimerText>
              Em caso de auxílio psicológico, ligue para 188 (CVV) ou acesse o site www.cvv.org.br
            </DisclaimerText>
          </FooterBottom>
        </FooterContent>
      </FooterContainer>

      <ScrollToTopButton onClick={scrollToTop} aria-label="Voltar ao topo">
        ↑
      </ScrollToTopButton>
    </>
  )
}
