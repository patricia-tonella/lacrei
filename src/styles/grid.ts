import { css } from 'styled-components'

// Grid System Utilitários da Lacrei
export const gridContainer = css`
  width: 100%;
  max-width: ${({ theme }) => theme.grid.lg.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.grid.lg.margin};
  
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

export const gridRow = css`
  display: flex;
  flex-wrap: wrap;
  margin: 0 calc(-${({ theme }) => theme.grid.lg.gutter} / 2);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0 calc(-${({ theme }) => theme.grid.md.gutter} / 2);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 0 calc(-${({ theme }) => theme.grid.sm.gutter} / 2);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    margin: 0 calc(-${({ theme }) => theme.grid.xl.gutter} / 2);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints['2xl']}) {
    margin: 0 calc(-${({ theme }) => theme.grid['2xl'].gutter} / 2);
  }
`

export const gridCol = (columns: number, totalColumns: number = 12) => css`
  flex: 0 0 ${(columns / totalColumns) * 100}%;
  max-width: ${(columns / totalColumns) * 100}%;
  padding: 0 calc(${({ theme }) => theme.grid.lg.gutter} / 2);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 calc(${({ theme }) => theme.grid.md.gutter} / 2);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 calc(${({ theme }) => theme.grid.sm.gutter} / 2);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 0 calc(${({ theme }) => theme.grid.xl.gutter} / 2);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints['2xl']}) {
    padding: 0 calc(${({ theme }) => theme.grid['2xl'].gutter} / 2);
  }
`

// Responsive Grid Columns
export const responsiveGrid = {
  sm: (columns: number) => css`
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      flex: 0 0 ${(columns / 4) * 100}%;
      max-width: ${(columns / 4) * 100}%;
    }
  `,
  md: (columns: number) => css`
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      flex: 0 0 ${(columns / 8) * 100}%;
      max-width: ${(columns / 8) * 100}%;
    }
  `,
  lg: (columns: number) => css`
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      flex: 0 0 ${(columns / 12) * 100}%;
      max-width: ${(columns / 12) * 100}%;
    }
  `,
  xl: (columns: number) => css`
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
      flex: 0 0 ${(columns / 12) * 100}%;
      max-width: ${(columns / 12) * 100}%;
    }
  `,
  '2xl': (columns: number) => css`
    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      flex: 0 0 ${(columns / 12) * 100}%;
      max-width: ${(columns / 12) * 100}%;
    }
  `,
}

