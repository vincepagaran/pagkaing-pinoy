import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/auth/homepage.vue'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import LandingPageView from '@/views/auth/LandingPageView.vue'
import AboutView from '@/views/auth/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage, // First page when you access the root URL
    },
    {
      path: '/login',
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
      name: 'landingpage',
      component: LandingPageView, // Can be used for a specific page like a post-login dashboard
    },
    {
      path: '/about',
      name: 'aboutview',
      component: AboutView,
    },
  ],
})

export default router
