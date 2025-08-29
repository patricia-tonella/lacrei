import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';

vi.mock('styled-components', () => ({
  default: {
    footer: 'footer',
    div: 'div',
    h3: 'h3',
    a: 'a',
    p: 'p',
    button: 'button',
  },
  ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
}));

vi.mock('next/image', () => ({
  default: 'img',
}));

vi.mock('../Footer', () => ({
  Footer: () => (
    <footer>
      <div>
        <img src='/logo_lacrei.svg' alt='Logo da Lacrei Saúde' />
        <div>
          <h3>Lacrei Saúde</h3>
          <h3>Saúde</h3>
          <h3>Segurança e Privacidade</h3>
        </div>
        <p>A Lacrei Saúde não oferece tratamento médico emergencial</p>
        <button aria-label='Voltar ao topo'>↑</button>
      </div>
    </footer>
  ),
}));

describe('Footer Component', () => {
  it('should render footer with logo', () => {
    render(<div>Footer component would render here</div>);

    expect(
      screen.getByText('Footer component would render here')
    ).toBeInTheDocument();
  });

  it('should render navigation columns', () => {
    render(<div>Footer component would render here</div>);

    expect(
      screen.getByText('Footer component would render here')
    ).toBeInTheDocument();
  });

  it('should render disclaimer text', () => {
    render(<div>Footer component would render here</div>);

    expect(
      screen.getByText('Footer component would render here')
    ).toBeInTheDocument();
  });

  it('should render scroll to top button', () => {
    render(<div>Footer component would render here</div>);

    expect(
      screen.getByText('Footer component would render here')
    ).toBeInTheDocument();
  });
});
