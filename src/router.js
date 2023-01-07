import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        auth: true,
      },
    },
    {
      path: '/decks',
      name: 'decks',
      component: () => import('@/views/DecksView.vue'),
      meta: {
        auth: true,
      },
    },
    {
      path: '/cards',
      name: 'cards',
      component: () => import('@/views/CardsView.vue'),
      meta: {
        auth: true,
      },
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/ProfileView.vue'),
      meta: {
        auth: true,
      },
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/views/SettingsView.vue'),
      meta: {
        auth: true,
      },
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('@/views/SigninView.vue'),
      meta: {
        auth: false,
      },
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/SignupView.vue'),
      meta: {
        auth: false,
      },
    },
    // TODO: Redirect to 404 without touching path
    {
      path: '/:pathMatch(.*)',
      redirect: '/',
    },
  ],
})

export default router
