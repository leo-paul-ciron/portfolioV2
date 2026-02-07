import { createTheme } from '@mui/material/styles'

const baseTypography = {
  fontFamily:
    '"SF Pro Text", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
  h1: {
    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    fontWeight: 600,
    letterSpacing: '-0.02em',
  },
  h2: {
    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    fontWeight: 600,
    letterSpacing: '-0.02em',
  },
  h3: {
    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    fontWeight: 600,
    letterSpacing: '-0.01em',
  },
  h4: {
    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    fontWeight: 600,
  },
  h5: {
    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    fontWeight: 600,
  },
  subtitle1: {
    fontWeight: 500,
    letterSpacing: '0.01em',
  },
  button: {
    textTransform: 'none',
    fontWeight: 600,
    letterSpacing: '0.01em',
  },
}

const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'light' ? '#0a84ff' : '#5aa2ff',
        dark: mode === 'light' ? '#0060df' : '#2f6de3',
        light: mode === 'light' ? '#66a7ff' : '#9ac2ff',
      },
      secondary: {
        main: mode === 'light' ? '#1d1d1f' : '#e5e5ea',
      },
      background: {
        default: mode === 'light' ? '#f5f5f7' : '#0f1013',
        paper: mode === 'light' ? '#ffffff' : '#1a1b1f',
      },
      text: {
        primary: mode === 'light' ? '#1d1d1f' : '#f5f5f7',
        secondary: mode === 'light' ? '#6e6e73' : '#b0b3bb',
      },
    },
    shape: {
      borderRadius: 18,
    },
    typography: baseTypography,
    components: {
      MuiContainer: {
        defaultProps: {
          maxWidth: 'lg',
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            border:
              mode === 'light' ? '1px solid rgba(29, 29, 31, 0.06)' : '1px solid rgba(90, 162, 255, 0.1)',
            boxShadow: mode === 'light' ? '0 18px 60px rgba(15, 15, 20, 0.08)' : '0 24px 70px rgba(0,0,0,0.45)',
            backgroundImage: 'none',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            border:
              mode === 'light' ? '1px solid rgba(29, 29, 31, 0.12)' : '1px solid rgba(90, 162, 255, 0.28)',
            fontWeight: 500,
            backgroundColor: mode === 'light' ? '#ffffff' : 'rgba(18, 19, 24, 0.9)',
          },
          icon: {
            color: mode === 'light' ? '#0a84ff' : '#9ac2ff',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            boxShadow:
              mode === 'light' ? '0 10px 24px rgba(10, 132, 255, 0.18)' : '0 10px 24px rgba(0,0,0,0.4)',
          },
        },
      },
      MuiToggleButtonGroup: {
        styleOverrides: {
          root: {
            borderRadius: 999,
          },
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            border:
              mode === 'light' ? '1px solid rgba(29, 29, 31, 0.12)' : '1px solid rgba(90, 162, 255, 0.25)',
            color: mode === 'light' ? '#6e6e73' : '#c7c9d1',
            '&.Mui-selected': {
              backgroundColor: mode === 'light' ? 'rgba(10, 132, 255, 0.12)' : 'rgba(90, 162, 255, 0.2)',
              color: mode === 'light' ? '#1d1d1f' : '#f5f5f7',
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiInputBase-root': {
              backgroundColor: mode === 'light' ? '#ffffff' : 'rgba(15, 16, 20, 0.9)',
            },
          },
        },
      },
    },
  })

export default getTheme
