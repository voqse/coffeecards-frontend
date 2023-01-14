import { createRouter, createWebHistory } from 'vue-router'
import DecksView from '@/views/DecksView.vue'
import globalStyle from '@/assets/scss/global.module.scss'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DecksView,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/:deckId',
      name: 'cards',
      component: () => import('@/views/CardsView.vue'),
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/ProfileView.vue'),
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/views/SettingsView.vue'),
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('@/views/SigninView.vue'),
      meta: {
        requireAuth: false,
      },
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/SignupView.vue'),
      meta: {
        requireAuth: false,
      },
    },
    // TODO: Redirect to the 404 without touching the path
    {
      path: '/:pathMatch(.*)',
      redirect: '/',
    },
  ],
  linkActiveClass: globalStyle.linkActive,
  linkExactActiveClass: globalStyle.linkExactActive,
})

router.afterEach((to, from) => {
  if (from.name) {
    const toDepth = from.path === '/' ? to.path.split('/').length : 1
    const fromDepth = to.path === '/' ? from.path.split('/').length : 1
    const toLogin = to.path === '/signin' || to.path === '/signup'
    const fromLogin = from.path === '/signin'

    if (fromLogin || (!toLogin && toDepth > fromDepth)) {
      to.meta.transition = 'slideIn'
    } else if (toLogin || (!toLogin && toDepth < fromDepth)) {
      to.meta.transition = 'slideOut'
    } else {
      to.meta.transition = 'fade'
    }
  }
})

export default router
