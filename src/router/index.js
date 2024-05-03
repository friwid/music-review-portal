import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/music-review-portal/'),
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
