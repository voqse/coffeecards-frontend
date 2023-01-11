import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import globalStyle from '@/assets/scss/global.module.scss'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/:collectionId',
      name: 'decks',
      component: () => import('@/views/DecksView.vue'),
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/:collectionId/:deckId',
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
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    const fromLogin = from.path === '/signin' || from.path === '/signup'
    const toLogin = to.path === '/signin'

    if (!toLogin && !fromLogin && toDepth === fromDepth) {
      to.meta.transition = 'fade'
    } else if (toLogin || toDepth < fromDepth) {
      to.meta.transition = 'slideRight'
    } else {
      to.meta.transition = 'slideLeft'
    }
  }
})

export default router
