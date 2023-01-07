import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { createAuth } from '@/plugins/auth'
import createUserService from '@/services/UserService'

const app = createApp(App)
const userService = createUserService()
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
