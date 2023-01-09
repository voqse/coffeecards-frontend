import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { createAuth } from '@/plugins/auth'
import { userService } from '@/services'

import '@/utils/vhFix'
import '@/assets/scss/generic.scss'

const app = createApp(App)
const auth = createAuth({
  router,
  userService,
  routes: {
    login: '/signin',
    register: '/signup',
  },
})

app.use(router)
app.use(auth)
app.mount('#app')
