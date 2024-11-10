import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import LandingPageView from '@/views/auth/LandingPageView.vue'
import AboutView from '@/views/auth/AboutView.vue'
import HomePage from '@/views/auth/homepage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: 'homepage',
      name: 'homepage',
      component: HomePage,
    },
    {
      path: 'login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/home',
      name: 'regihomester',
      component: LandingPageView,
    },
    {
      path: '/about',
      name: 'aboutview',
      component: AboutView,
    },
  ],
})

export default router
