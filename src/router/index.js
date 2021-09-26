import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

import daybookRouter from '@/modules/dayBook/router'
import authRouter from '@/modules/auth/router'
import isAuthenticated from '../modules/auth/router/auth-guard'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/daybook',
    beforeEnter: [ isAuthenticated ],
    ...daybookRouter
  },
  {
    path: '/auth',
    ...authRouter
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
