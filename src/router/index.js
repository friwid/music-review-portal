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
    }
  ]
})

export default router
