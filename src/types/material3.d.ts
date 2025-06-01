import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface PaletteColor {
    container?: string
    onContainer?: string
    surface?: string
    surfaceVariant?: string
    onSurface?: string
    onSurfaceVariant?: string
    outline?: string
    outlineVariant?: string
  }

  interface PaletteColorOptions {
    container?: string
    onContainer?: string
    surface?: string
    surfaceVariant?: string
    onSurface?: string
    onSurfaceVariant?: string
    outline?: string
    outlineVariant?: string
  }

  interface Palette {
    tertiary: PaletteColor
    surface: {
      main: string
      variant: string
      onSurface: string
      onSurfaceVariant: string
      dim: string
      bright: string
      container: string
      containerLow: string
      containerHigh: string
    }
    outline: {
      main: string
      variant: string
    }
    scrim: string
    shadow: {
      main: string
      channel: string
    }
  }

  interface PaletteOptions {
    tertiary?: PaletteColorOptions
    surface?: {
      main?: string
      variant?: string
      onSurface?: string
      onSurfaceVariant?: string
      dim?: string
      bright?: string
      container?: string
      containerLow?: string
      containerHigh?: string
    }
    outline?: {
      main?: string
      variant?: string
    }
    scrim?: string
    shadow?: {
      main?: string
      channel?: string
    }
  }

  interface Shape {
    borderRadiusSm?: number
    borderRadiusMd?: number
    borderRadiusLg?: number
    borderRadiusXl?: number
  }

  interface MotionTokens {
    duration: {
      shortest: number
      shorter: number
      short: number
      standard: number
      complex: number
      enteringScreen: number
      leavingScreen: number
    }
    easing: {
      easeInOut: string
      easeOut: string
      easeIn: string
      sharp: string
      bounce: string
      spring: string
    }
    spring: {
      stiffness: number
      damping: number
      mass: number
    }
  }

  interface ElevationTokens {
    level0: string
    level1: string
    level2: string
    level3: string
    level4: string
    level5: string
    hover: {
      level1: string
      level2: string
      level3: string
      level4: string
      level5: string
    }
  }

  interface Theme {
    motion: MotionTokens
    elevation: ElevationTokens
    shape: Shape
  }

  interface ThemeOptions {
    motion?: Partial<MotionTokens>
    elevation?: Partial<ElevationTokens>
    shape?: Partial<Shape>
  }
}

declare module '@mui/material/styles/createTheme' {
  interface Theme {
    shape: Shape
  }
  interface ThemeOptions {
    shape?: Partial<Shape>
  }
}

// Augment the Palette and PaletteOptions in @mui/material
declare module '@mui/material' {
  interface Palette {
    tertiary: PaletteColor
    surface: {
      main: string
      variant: string
      onSurface: string
      onSurfaceVariant: string
      dim: string
      bright: string
      container: string
      containerLow: string
      containerHigh: string
    }
    outline: {
      main: string
      variant: string
    }
    scrim: string
    shadow: {
      main: string
      channel: string
    }
  }
  interface PaletteOptions {
    tertiary?: PaletteColorOptions
    surface?: {
      main?: string
      variant?: string
      onSurface?: string
      onSurfaceVariant?: string
      dim?: string
      bright?: string
      container?: string
      containerLow?: string
      containerHigh?: string
    }
    outline?: {
      main?: string
      variant?: string
    }
    scrim?: string
    shadow?: {
      main?: string
      channel?: string
    }
  }
} 