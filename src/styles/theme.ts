export const theme = {
  colors: {
    emerald: {
      10: '#DFF2ED', // Emerald-10
      20: '#B2DFD0', // Emerald-20
      30: '#80CAB1', // Emerald-30
      40: '#4FB494', // Emerald-40
      50: '#29A480', // Emerald-50, base
      60: '#018762', // Emerald-60
      70: '#007756', // Emerald-70
      80: '#014C37', // Emerald-80
    },
    success: {
      50: '#EBF9F0', // Green-10
      100: '#C4EED1', // Green-20
      200: '#9CE2B2', // Green-30
      300: '#75D693', // Green-40
      400: '#4ECB74', // Green-50
      500: '#00B15C', // Green-60
      600: '#298A46', // Green-70
      700: '#113B1E', // Green-80
    },
    error: {
      50: '#FEF2F2',
      100: '#FEE2E2',
      200: '#FECACA',
      300: '#FCA5A5',
      400: '#F87171',
      500: '#EF4444',
      600: '#DC2626',
      700: '#B91C1C',
    },
    neutral: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
  },
  components: {
    button: {
      base: {
        height: '48px',
        borderRadius: 'border-radius-sm',
        padding: 'space-inline-xxm',
        shadow: 'shadow-md',
        iconSize: '24px',
        iconSpacing: '16px', // spacing-inline-m
      },
      states: {
        primary: {
          default: {
            background: '#018762', // background-button-accent-default (Emerald-60)
            text: '#FFFFFF', // color-text-invert
            icon: '#FFFFFF', // color-icon-button-invert-default
          },
          hover: {
            background: '#007756', // background-button-accent-hover (Emerald-70)
            text: '#FFFFFF', // color-text-invert
            icon: '#FFFFFF', // color-icon-button-invert-default
          },
          pressed: {
            background: '#014C37', // background-button-accent-pressed (Emerald-80)
            text: '#FFFFFF', // color-text-invert
            icon: '#FFFFFF', // color-icon-button-invert-default
          },
          disabled: {
            background: '#B2DFD0', // background-button-primary-disabled (Emerald-20)
            text: '#9CA3AF', // color-button-disabled-default (Neutral-400)
            icon: '#9CA3AF', // color-button-disabled-default
          },
          focus: {
            background: '#018762', // background-button-accent-default
            text: '#FFFFFF', // color-text-invert
            icon: '#FFFFFF', // color-icon-button-invert-default
            border: '#0EA5E9', // border-button-focus-default (Accent-500)
          },
        },
        secondary: {
          default: {
            background: '#FFFFFF', // background-default
            border: '#018762', // border-accent-default (Emerald-60)
            text: '#018762', // text-accent-default (Emerald-60)
            icon: '#018762', // icon-accent-default (Emerald-60)
          },
          hover: {
            background: '#DFF2ED', // background-button-accent-secondary-hover (Emerald-10)
            border: '#007756', // border-button-accent-hover (Emerald-70)
            text: '#007756', // text-button-accent-hover (Emerald-70)
            icon: '#007756', // icon-hover (Emerald-70)
          },
          pressed: {
            background: '#B2DFD0', // background-button-accent-secondary-pressed (Emerald-20)
            border: '#014C37', // border-button-accent-pressed (Emerald-80)
            text: '#014C37', // text-button-accent-pressed (Emerald-80)
            icon: '#014C37', // icon-pressed (Emerald-80)
          },
          disabled: {
            background: '#FFFFFF', // background-default
            border: '#D1D5DB', // border-disabled (Neutral-300)
            text: '#9CA3AF', // text-disabled (Neutral-400)
            icon: '#9CA3AF', // icon-disabled (Neutral-400)
          },
          focus: {
            background: '#FFFFFF', // background-default
            border: '#018762', // border-accent (Emerald-60)
            text: '#018762', // text-button-accent-default (Emerald-60)
            icon: '#018762', // icon-accent (Emerald-60)
            outline: '#0EA5E9', // border-focus (Accent-500)
          },
        },
        critical: {
          default: {
            background: '#EF4444', // background-error-primary-default (Error-500)
            text: '#FFFFFF', // color-invert
            icon: '#FFFFFF', // icon-invert
          },
          hover: {
            background: '#DC2626', // background-error-primary-hover (Error-600)
            text: '#FFFFFF', // color-invert
            icon: '#FFFFFF', // icon-invert
          },
          pressed: {
            background: '#B91C1C', // background-error-primary-pressed (Error-700)
            text: '#FFFFFF', // color-invert
            icon: '#FFFFFF', // icon-invert
          },
          disabled: {
            background: '#FCA5A5', // background-error-disabled (Error-300)
            text: '#9CA3AF', // color-button-disabled-default (Neutral-400)
            icon: '#9CA3AF', // color-button-disabled-default
          },
          focus: {
            background: '#EF4444', // background-error-primary-default
            text: '#FFFFFF', // color-invert
            icon: '#FFFFFF', // icon-invert
            border: '#0EA5E9', // border-button-focus-default (Accent-500)
          },
        },
        link: {
          default: {
            background: '#FFFFFF', // background-default
            text: '#0EA5E9', // color-accent (Accent-500)
            icon: '#0EA5E9', // icon-accent (Accent-500)
            fontWeight: 700,
          },
          hover: {
            background: '#F0F9FF', // background-accent-100 (Accent-50)
            text: '#0284C7', // color-hover (Accent-600)
            icon: '#0284C7', // icon-hover (Accent-600)
            borderRadius: '50px',
          },
          pressed: {
            background: '#E0F2FE', // background-accent-200 (Accent-100)
            text: '#0369A1', // color-pressed (Accent-700)
            icon: '#0369A1', // icon-pressed (Accent-700)
          },
          disabled: {
            background: '#FFFFFF', // background-default
            text: '#9CA3AF', // color-disabled (Neutral-400)
            icon: '#9CA3AF', // icon-disabled (Neutral-400)
          },
          focus: {
            background: '#FFFFFF', // background-default
            text: '#0EA5E9', // color-accent (Accent-500)
            icon: '#0EA5E9', // icon-accent (Accent-500)
            outline: '#0EA5E9', // border-focus (Accent-500)
          },
        },
      },
    },

    input: {
      background: {
        default: '#FFFFFF',
        disabled: '#F9FAFB', // Neutral-50
        error: '#FEF2F2', // Error-50
      },
      text: {
        default: '#111827', // Neutral-900
        placeholder: '#9CA3AF', // Neutral-400
        disabled: '#9CA3AF', // Neutral-400
        error: '#EF4444', // Error-500
      },
      border: {
        default: '#E5E7EB', // Neutral-200
        focus: '#018762', // Emerald-60
        hover: '#D1D5DB', // Neutral-300
        error: '#F87171', // Error-400
        disabled: '#F3F4F6', // Neutral-100
      },
    },

    card: {
      background: {
        default: '#FFFFFF',
        secondary: '#F9FAFB', // Neutral-50
      },
      border: {
        default: '#E5E7EB', // Neutral-200
        hover: '#D1D5DB', // Neutral-300
      },
      shadow: {
        default:
          '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        hover:
          '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        large:
          '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  typography: {
    fontFamily: {
      primary:
        'Nunito, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      secondary:
        'Nunito, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      heading:
        'Nunito, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: 'JetBrains Mono, "Fira Code", "Roboto Mono", monospace',
    },
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '3.75rem', // 60px
    },
    fontWeight: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400, // Paragraphs
      medium: 500,
      semibold: 600,
      bold: 700, // Headers
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.2,
      base: 1.5,
      relaxed: 1.75,
    },
  },

  spacing: {
    0: '0',
    1: '0.25rem', // 4px
    2: '0.5rem', // 8px
    3: '0.75rem', // 12px
    4: '1rem', // 16px
    5: '1.25rem', // 20px
    6: '1.5rem', // 24px
    8: '2rem', // 32px
    10: '2.5rem', // 40px
    12: '3rem', // 48px
    14: '3.5rem', // 56px
    16: '4rem', // 64px
  },

  lacreiSpacing: {
    desktop: {
      headerToElement: '48px',
      footerToElement: '64px',
      headingToUnderline: '8px',
      headingToSubtitle: '16px',
      headingToElement: '32px',
      textToText: '16px',
      textToInput: '32px',
      buttonToButton: '24px',
      buttonToElement: '32px',
      cardToCard: '24px',
      sectionToSection: '48px',
    },
    // Mobile
    mobile: {
      headerToElement: '24px',
      footerToElement: '64px',
      headingToElement: '24px',
      textToInput: '24px',
      buttonToButton: '24px',
      buttonToElement: '32px',
      cardToCard: '16px',
      sectionToSection: '40px',
    },
  },

  borderRadius: {
    none: '0',
    sm: '0.125rem', // 2px
    base: '0.25rem', // 4px
    md: '0.375rem', // 6px
    lg: '0.5rem', // 8px
    xl: '0.75rem', // 12px
    '2xl': '1rem', // 16px
    '3xl': '1.5rem', // 24px
    full: '9999px',
  },

  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },

  breakpoints: {
    sm: '600px', // Mobile Small: 0px - 600px
    md: '900px', // Mobile Medium: 600px - 900px
    lg: '1200px', // Desktop Large: 900px - 1200px
    xl: '1536px', // Desktop Extra Large: 1200px - 1536px
    '2xl': '2560px', // Ultra-Wide: 2560px+
  },

  grid: {
    sm: {
      columns: 4,
      margin: '24px',
      gutter: '16px',
      row: '8px',
      containerWidth: 'auto',
      maxWidth: '100%',
    },
    md: {
      columns: 8,
      margin: '24px',
      gutter: '24px',
      row: '8px',
      containerWidth: 'auto',
      maxWidth: '100%',
    },
    lg: {
      columns: 12,
      margin: '24px',
      gutter: '24px',
      row: '8px',
      containerWidth: 'auto',
      maxWidth: '840px',
    },
    xl: {
      columns: 12,
      margin: '24px',
      gutter: '24px',
      row: '8px',
      containerWidth: 'auto',
      maxWidth: '1116px',
    },
    '2xl': {
      columns: 12,
      margin: '24px',
      gutter: '24px',
      row: '8px',
      containerWidth: 'auto',
      maxWidth: '100%',
    },
  },
};

export type Theme = typeof theme;
