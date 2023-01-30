import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createAuth } from '@/plugins/authPlugin'
import { createServices } from '@/plugins/servicesPlugin'
import { userService, contentService } from '@/services'
import App from '@/App.vue'
import router from '@/router'

import '@/utils/vhFix'
import '@/assets/scss/global.scss'

const app = createApp(App)
const pinia = createPinia()
const auth = createAuth({
  router,
  userService,
  routes: {
    login: '/signin',
    register: '/signup',
    logout: '/logout',
  },
})
const services = createServices({
  services: {
    userService,
    contentService,
  },
})

app.use(router)
app.use(pinia)
app.use(auth)
app.use(services)
app.mount('#app')
