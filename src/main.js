// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App)

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi', // Set MDI as default
  },
  components,
  directives,
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme: {
        dark: false,
        colors: {
          // Your color palette here
        },
        variables: {
          fontFamily: 'Roboto, sans-serif',
        },
      },
    },
  },
})

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
