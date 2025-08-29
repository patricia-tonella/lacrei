'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(
    rgb(245, 255, 251) 31.04%,
    rgb(255, 255, 255) 100%
  );
  padding: 0px 7.625rem;
  height: 6rem;
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0px 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0px 1rem;
    height: 5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0px 0.5rem;
    height: 4rem;
  }
`;

const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;

  &:hover {
    opacity: 0.9;
    transition: opacity 0.2s ease;
  }
`;

const LogoImage = styled.div`
  height: 48px;
  width: auto;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 40px;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing[4]};
  }
`;

const NavigationLinks = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.emerald[70]};
  text-decoration: none;
  font-size: 1.125rem;
  font-weight: 700;
  transition: color 0.2s ease;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.colors.emerald[60]};
    background-color: rgba(1, 135, 98, 0.1);
    border-radius: 0.5rem;
  }
`;

const LoginButton = styled.button`
  background-color: ${({ theme }) => theme.colors.emerald[60]};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  height: 3rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.emerald[70]};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ChevronIcon = styled.span<{ $isOpen: boolean }>`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: rotate(45deg);
  transition: transform 0.2s ease;

  ${({ $isOpen }) =>
    $isOpen &&
    `
    transform: rotate(-135deg);
  `}
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.emerald[70]};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    border-top: 1px solid ${({ theme }) => theme.colors.emerald[20]};
    padding: ${({ theme }) => theme.spacing[4]};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const MobileNavLink = styled.a`
  display: block;
  color: ${({ theme }) => theme.colors.emerald[70]};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  padding: ${({ theme }) => theme.spacing[2]} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.emerald[20]};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.emerald[60]};
  }
`;

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLoginDropdown = () => {
    setIsLoginDropdownOpen(!isLoginDropdownOpen);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo href='/lacrei'>
          <LogoImage>
            <Image
              src='logo_lacrei.svg'
              alt='Logo da Lacrei Saúde que redireciona para a página principal'
              width={187}
              height={24}
              loading='lazy'
            />
          </LogoImage>
        </Logo>

        <HeaderRight>
          <NavigationLinks>
            <NavLink href='quem-somos'>Quem Somos</NavLink>
            <NavLink href='ajuda'>Ajuda</NavLink>
          </NavigationLinks>

          <LoginButton onClick={toggleLoginDropdown}>
            Entrar
            <ChevronIcon $isOpen={isLoginDropdownOpen} />
          </LoginButton>

          <MobileMenuButton
            onClick={toggleMobileMenu}
            aria-label='Abrir menu mobile'
          >
            ☰
          </MobileMenuButton>
        </HeaderRight>
      </HeaderContent>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        <MobileNavLink href='quem-somos'>Quem Somos</MobileNavLink>
        <MobileNavLink href='ajuda'>Ajuda</MobileNavLink>
      </MobileMenu>
    </HeaderContainer>
  );
};
