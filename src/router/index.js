import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      props: false,
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/a1',
      name: 'a1',
      props: false,
      component: () => import('../views/A1View.vue')
    },
    {
      path: '/a2',
      name: 'a2',
      props: false,
      component: () => import('../views/A2View.vue')
    },
    {
      path: '/a3',
      name: 'a3',
      props: false,
      component: () => import('../views/A3View.vue')
    },
    {
      path: '/a4',
      name: 'a4',
      props: false,
      component: () => import('../views/A4View.vue')
    }
  ]
})

export default router
