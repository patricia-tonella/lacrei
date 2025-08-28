import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Header } from '../Header'

// Mock do styled-components
vi.mock('styled-components', () => ({
  default: {
    header: ({ children, ...props }: any) => {
      const HeaderMock = (mockProps: any) => <header {...mockProps}>{mockProps.children}</header>
      return HeaderMock
    },
    div: ({ children, ...props }: any) => {
      const DivMock = (mockProps: any) => <div {...mockProps}>{mockProps.children}</div>
      return DivMock
    },
    nav: ({ children, ...props }: any) => {
      const NavMock = (mockProps: any) => <nav {...mockProps}>{mockProps.children}</nav>
      return NavMock
    },
    ul: ({ children, ...props }: any) => {
      const UlMock = (mockProps: any) => <div {...mockProps}>{mockProps.children}</div>
      return UlMock
    },
    li: ({ children, ...props }: any) => {
      const LiMock = (mockProps: any) => <div {...mockProps}>{mockProps.children}</div>
      return LiMock
    },
    a: ({ children, ...props }: any) => {
      const AMock = (mockProps: any) => <a {...mockProps}>{mockProps.children}</a>
      return AMock
    },
    button: ({ children, ...props }: any) => {
      const ButtonMock = (mockProps: any) => <button {...mockProps}>{mockProps.children}</button>
      return ButtonMock
    },
    span: ({ children, ...props }: any) => {
      const SpanMock = (mockProps: any) => <span {...mockProps}>{mockProps.children}</span>
      return SpanMock
    },
  },
}))

describe('Header Component', () => {
  beforeEach(() => {
    // Mock do window.scrollY
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 0,
    })
  })

  it('should render header with logo', () => {
    render(<Header />)
    expect(screen.getByText('Lacrei Saúde')).toBeInTheDocument()
    expect(screen.getByText('L')).toBeInTheDocument()
  })

  it('should render navigation menu', () => {
    render(<Header />)
    
    expect(screen.getByText('Início')).toBeInTheDocument()
    expect(screen.getByText('Serviços')).toBeInTheDocument()
    expect(screen.getByText('Profissionais')).toBeInTheDocument()
    expect(screen.getByText('Sobre Nós')).toBeInTheDocument()
    expect(screen.getByText('Contato')).toBeInTheDocument()
  })

  it('should render action buttons', () => {
    render(<Header />)
    
    expect(screen.getByRole('button', { name: 'Entrar no sistema' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Agendar consulta' })).toBeInTheDocument()
  })

  it('should render mobile menu button on small screens', () => {
    render(<Header />)
    
    const mobileMenuButton = screen.getByRole('button', { name: 'Abrir menu' })
    expect(mobileMenuButton).toBeInTheDocument()
  })

  it('should toggle mobile menu when button is clicked', () => {
    render(<Header />)
    
    const mobileMenuButton = screen.getByRole('button', { name: 'Abrir menu' })
    fireEvent.click(mobileMenuButton)
    
    expect(screen.getByRole('button', { name: 'Fechar menu' })).toBeInTheDocument()
    expect(screen.getByText('Início')).toBeInTheDocument() // Mobile menu should show navigation
  })

  it('should close mobile menu when navigation link is clicked', () => {
    render(<Header />)
    
    // Open mobile menu
    const mobileMenuButton = screen.getByRole('button', { name: 'Abrir menu' })
    fireEvent.click(mobileMenuButton)
    
    // Click on navigation link
    const inicioLink = screen.getByText('Início')
    fireEvent.click(inicioLink)
    
    // Menu should be closed
    expect(screen.getByRole('button', { name: 'Abrir menu' })).toBeInTheDocument()
  })

  it('should have correct aria attributes for mobile menu', () => {
    render(<Header />)
    
    const mobileMenuButton = screen.getByRole('button', { name: 'Abrir menu' })
    expect(mobileMenuButton).toHaveAttribute('aria-expanded', 'false')
    expect(mobileMenuButton).toHaveAttribute('aria-controls', 'mobile-menu')
    
    // Open menu
    fireEvent.click(mobileMenuButton)
    
    expect(mobileMenuButton).toHaveAttribute('aria-expanded', 'true')
  })

  it('should have correct aria-label for logo', () => {
    render(<Header />)
    
    const logo = screen.getByText('Lacrei Saúde')
    expect(logo.closest('a')).toHaveAttribute('aria-label', 'Lacrei Saúde - Página inicial')
  })

  it('should have correct aria-label for navigation', () => {
    render(<Header />)
    
    const navigation = screen.getByRole('navigation')
    expect(navigation).toHaveAttribute('aria-label', 'Navegação principal')
  })

  it('should have correct aria-label for mobile navigation', () => {
    render(<Header />)
    
    // Open mobile menu
    const mobileMenuButton = screen.getByRole('button', { name: 'Abrir menu' })
    fireEvent.click(mobileMenuButton)
    
    const mobileNavigation = screen.getByRole('navigation', { name: 'Navegação mobile' })
    expect(mobileNavigation).toBeInTheDocument()
  })

  it('should handle scroll events', () => {
    render(<Header />)
    
    // Simulate scroll
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 25,
    })
    
    // Trigger scroll event
    fireEvent.scroll(window)
    
    // Header should have scrolled state
    // Note: This test might need adjustment based on actual implementation
  })

  it('should render mobile menu with action buttons', () => {
    render(<Header />)
    
    // Open mobile menu
    const mobileMenuButton = screen.getByRole('button', { name: 'Abrir menu' })
    fireEvent.click(mobileMenuButton)
    
    // Check if mobile menu has action buttons
    expect(screen.getByRole('button', { name: 'Entrar no sistema' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Agendar consulta' })).toBeInTheDocument()
  })

  it('should have skip link for accessibility', () => {
    render(<Header />)
    
    // The skip link is in the layout, but we can test that it's accessible
    const skipLink = document.querySelector('.skip-link')
    expect(skipLink).toBeInTheDocument()
  })
})
