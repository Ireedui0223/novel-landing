import type { TTheme } from '../types/theme'

const LightTheme: TTheme = {
  name: 'LightTheme',
  dark: false,
  variables: {
    'border-color': '#eeeeee',
    'carousel-control-size': 10
  },
  colors: {
    primary: '#020216', // Dark navy blue (background)
    secondary: '#2E4AD5', // Brighter blue (accent color)
    accent: '#3E92CC', // Lighter blue (for buttons)
    info: '#4169E1', // Royal blue (for info sections)
    success: '#4CAF50', // Green (for success messages)
    warning: '#FFC107', // Amber (for warnings)
    error: '#FF5252', // Red (for errors)
    background: '#010326', // Darkest blue (page background)
    surface: '#1E2C54', // Same as primary (card backgrounds)
    textPrimary: '#FFFFFF', // White text
    textSecondary: '#B0BEC5', // Light gray text for secondary information
    lightGray: '#E6E6E6'
  }
}

export { LightTheme }
