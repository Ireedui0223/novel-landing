import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@/assets/vuetifyTheme.scss'

import { createVuetify } from 'vuetify'

export default defineNuxtPlugin(app => {
  const vuetify = createVuetify({
    // ... your configuration
    display: {
      breakpoints: {
        xs: 0,
        sm: 0,
        md: 960,
        lg: 1264,
        xl: 1904
      },
      icons: {
        iconfont: 'mdiSvg' // default - only for display purposes
      },
      rtl: false,
      theme: {
        dark: false,
        default: 'light',
        disable: false,
        options: {
          cspNonce: undefined,
          customProperties: undefined,
          minifyTheme: undefined,
          themeCache: undefined
        }
      },
      window: {
        systemBar: false
      }
    }
  })
  app.vueApp.use(vuetify)
})
