'use client'

import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

// Importar fonte Nunito do Google Fonts
import { Nunito } from 'next/font/google'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-nunito',
})

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${nunito.style.fontFamily}, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #111827;
    background-color: #F9FAFB;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${nunito.style.fontFamily}, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  /* Acessibilidade */
  .skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: #018762;
    color: white;
    padding: 8px;
    text-decoration: none;
    border-radius: 0.125rem;
    z-index: 1000;
    transition: top 0.2s ease;

    &:focus {
      top: 6px;
    }
  }

  /* Focus styles */
  *:focus-visible {
    outline: 2px solid #0EA5E9;
    outline-offset: 2px;
  }
`
