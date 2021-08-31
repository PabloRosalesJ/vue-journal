import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

import daybookRouter from '@/modules/dayBook/router'

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
    ...daybookRouter
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
