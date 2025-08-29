import 'styled-components';
import { theme } from '@/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof theme.colors;
    components: typeof theme.components;
    typography: typeof theme.typography;
    spacing: typeof theme.spacing;
    lacreiSpacing: typeof theme.lacreiSpacing;
    grid: typeof theme.grid;
    borderRadius: typeof theme.borderRadius;
    shadows: typeof theme.shadows;
    breakpoints: typeof theme.breakpoints;
  }
}
