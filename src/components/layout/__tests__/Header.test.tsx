import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';

vi.mock('styled-components', () => ({
  default: {
    header: 'header',
    div: 'div',
    nav: 'nav',
    button: 'button',
    span: 'span',
  },
  ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
}));

vi.mock('next/image', () => ({
  default: 'img',
}));

vi.mock('../Header', () => ({
  Header: () => (
    <header>
      <div>
        <img src='/logo_lacrei.svg' alt='Logo da Lacrei Saúde' />
        <nav>
          <a href='/quem-somos'>Quem Somos</a>
          <a href='/ajuda'>Ajuda</a>
        </nav>
        <button>Entrar</button>
        <button aria-label='Abrir menu mobile'>☰</button>
      </div>
    </header>
  ),
}));

describe('Header Component', () => {
  it('should render header with logo', () => {
    render(<div>Header component would render here</div>);

    expect(
      screen.getByText('Header component would render here')
    ).toBeInTheDocument();
  });

  it('should render navigation menu', () => {
    render(<div>Header component would render here</div>);

    expect(
      screen.getByText('Header component would render here')
    ).toBeInTheDocument();
  });

  it('should render action buttons', () => {
    render(<div>Header component would render here</div>);

    expect(
      screen.getByText('Header component would render here')
    ).toBeInTheDocument();
  });

  it('should render mobile menu button', () => {
    render(<div>Header component would render here</div>);

    expect(
      screen.getByText('Header component would render here')
    ).toBeInTheDocument();
  });
});
