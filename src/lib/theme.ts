'use client';
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  cssVarPrefix: 'md3',
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        primary: {
          main: '#6750A4',
          light: '#EADDFF',
          dark: '#4F378B',
          contrastText: '#FFFFFF',
        },
        secondary: {
          main: '#625B71',
          light: '#E8DEF8',
          dark: '#4A4458',
          contrastText: '#FFFFFF',
        },
        tertiary: {
          main: '#7D5260',
          light: '#EFD8E4',
          dark: '#633B48',
          contrastText: '#FFFFFF',
        },
        error: {
          main: '#B3261E',
          light: '#F2B8B5',
          dark: '#8C1D18',
          contrastText: '#FFFFFF',
        },
        background: {
          default: '#FFFBFE',
          paper: '#FFFBFE',
        },
        surface: {
          main: '#FFFBFE',
          variant: '#E7E0EC',
          onSurface: '#1C1B1F',
          onSurfaceVariant: '#49454F',
          dim: '#F4EFF4',
          bright: '#FFFBFE',
          container: '#F3EDF7',
          containerLow: '#F7F2FA',
          containerHigh: '#ECE6F0',
        },
        outline: {
          main: '#79747E',
          variant: '#CAC4D0',
        },
        scrim: 'rgba(0, 0, 0, 0.32)',
        shadow: {
          main: 'rgba(0, 0, 0, 0.3)',
          channel: '0 0 0',
        },
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: '#D0BCFF',
          light: '#EADDFF',
          dark: '#B69DF8',
          contrastText: '#1C1B1F',
        },
        secondary: {
          main: '#CCC2DC',
          light: '#E8DEF8',
          dark: '#B69DF8',
          contrastText: '#1C1B1F',
        },
        tertiary: {
          main: '#EFB8C8',
          light: '#EFD8E4',
          dark: '#B69DF8',
          contrastText: '#1C1B1F',
        },
        error: {
          main: '#F2B8B5',
          light: '#F9DEDC',
          dark: '#B3261E',
          contrastText: '#1C1B1F',
        },
        background: {
          default: '#1C1B1F',
          paper: '#1C1B1F',
        },
        surface: {
          main: '#1C1B1F',
          variant: '#49454F',
          onSurface: '#E6E1E5',
          onSurfaceVariant: '#CAC4D0',
          dim: '#141218',
          bright: '#1C1B1F',
          container: '#211F26',
          containerLow: '#1D1B20',
          containerHigh: '#2D2C31',
        },
        outline: {
          main: '#938F99',
          variant: '#49454F',
        },
        scrim: 'rgba(0, 0, 0, 0.32)',
        shadow: {
          main: 'rgba(0, 0, 0, 0.3)',
          channel: '0 0 0',
        },
      },
    },
  },
  shape: {
    borderRadius: 16,
    borderRadiusSm: 8,
    borderRadiusMd: 12,
    borderRadiusLg: 16,
    borderRadiusXl: 28,
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 400,
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
    },
    h2: {
      fontSize: '2.75rem',
      fontWeight: 400,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 400,
      letterSpacing: '-0.01em',
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 400,
      letterSpacing: '-0.01em',
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 400,
      letterSpacing: '-0.01em',
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 400,
      letterSpacing: '-0.01em',
      lineHeight: 1.4,
    },
    button: {
      fontWeight: 500,
      letterSpacing: '0.1em',
      textTransform: 'none',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.03125em',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.43,
      letterSpacing: '0.0178571429em',
    },
  },
  motion: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      spring: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
    },
    spring: {
      stiffness: 300,
      damping: 30,
      mass: 1,
    },
  },
  elevation: {
    level0: 'none',
    level1: '0px 1px 2px 0px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15)',
    level2: '0px 1px 2px 0px rgba(0,0,0,0.3), 0px 2px 6px 2px rgba(0,0,0,0.15)',
    level3: '0px 4px 8px 3px rgba(0,0,0,0.15), 0px 1px 3px 0px rgba(0,0,0,0.3)',
    level4: '0px 6px 10px 4px rgba(0,0,0,0.15), 0px 2px 3px 0px rgba(0,0,0,0.3)',
    level5: '0px 8px 12px 6px rgba(0,0,0,0.15), 0px 4px 4px 0px rgba(0,0,0,0.3)',
    hover: {
      level1: '0px 1px 3px 1px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.3)',
      level2: '0px 2px 6px 2px rgba(0,0,0,0.15), 0px 1px 2px 0px rgba(0,0,0,0.3)',
      level3: '0px 4px 8px 3px rgba(0,0,0,0.15), 0px 1px 3px 0px rgba(0,0,0,0.3)',
      level4: '0px 6px 10px 4px rgba(0,0,0,0.15), 0px 2px 3px 0px rgba(0,0,0,0.3)',
      level5: '0px 8px 12px 6px rgba(0,0,0,0.15), 0px 4px 4px 0px rgba(0,0,0,0.3)',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          padding: '10px 24px',
          textTransform: 'none',
          fontWeight: 500,
          letterSpacing: '0.1em',
          boxShadow: 'var(--md3-elevation-level1)',
          transition: 'all var(--md3-motion-duration-standard) var(--md3-motion-easing-easeInOut)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: 'var(--md3-elevation-level2)',
          },
          '&:active': {
            transform: 'translateY(0)',
            boxShadow: 'var(--md3-elevation-level1)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: 'var(--md3-elevation-level2)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 28,
          boxShadow: 'var(--md3-elevation-level1)',
          transition: 'all var(--md3-motion-duration-standard) var(--md3-motion-easing-easeInOut)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: 'var(--md3-elevation-level3)',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 28,
          boxShadow: 'var(--md3-elevation-level3)',
          transition: 'all var(--md3-motion-duration-complex) var(--md3-motion-easing-easeInOut)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 4,
            transition: 'all var(--md3-motion-duration-short) var(--md3-motion-easing-easeInOut)',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--md3-palette-primary-main)',
              transform: 'scale(1.02)',
            },
            '&.Mui-focused': {
              transform: 'scale(1.02)',
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--md3-palette-surface-main)',
          boxShadow: 'var(--md3-elevation-level1)',
          transition: 'all var(--md3-motion-duration-standard) var(--md3-motion-easing-easeInOut)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
          transition: 'all var(--md3-motion-duration-short) var(--md3-motion-easing-easeInOut)',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          transition: 'all var(--md3-motion-duration-standard) var(--md3-motion-easing-easeInOut)',
          '& .MuiLinearProgress-bar': {
            transition: 'transform var(--md3-motion-duration-complex) var(--md3-motion-easing-spring)',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all var(--md3-motion-duration-short) var(--md3-motion-easing-easeInOut)',
          '&:hover': {
            transform: 'scale(1.1)',
            backgroundColor: 'var(--md3-palette-primary-container)',
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          transition: 'all var(--md3-motion-duration-short) var(--md3-motion-easing-easeInOut)',
          '&:hover': {
            backgroundColor: 'var(--md3-palette-primary-container)',
          },
        },
      },
    },
  },
})

export default theme 