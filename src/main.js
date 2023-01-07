import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { createAuth } from '@/plugins/auth'

const app = createApp(App)
const auth = createAuth({
  router,
  routes: { login: '/signin' },
})

app.use(router)
app.use(auth)
app.mount('#app')
