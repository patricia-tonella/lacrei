'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';

interface StyledComponentsProviderProps {
  children: React.ReactNode;
}

export const StyledComponentsProvider: React.FC<
  StyledComponentsProviderProps
> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
