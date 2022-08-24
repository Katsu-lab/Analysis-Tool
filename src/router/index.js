import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/input',
    name: 'input',
    component: () => import('../views/InputView.vue')
  },
  {
    path: '/output',
    name: 'output',
    component: () => import('../views/OutputView.vue')
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('../views/SettingView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
