import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/musicworks',
      name: 'musicworks',
      component: () => import('../views/MusicView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectView.vue')
    },
    {
      path: '/animationworks',
      name: 'animationworks',
      component: () => import('../views/AimationView.vue')
    }
  ]
})

export default router
