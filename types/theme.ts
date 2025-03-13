export type TTheme = {
  name: string
  dark: boolean
  variables?: object
  colors: {
    primary: string
    secondary: string
    accent: string
    info: string
    success: string
    warning: string
    error: string
    background: string
    surface: string
    textPrimary: string
    textSecondary: string
    lightGray: string
  }
}
