import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/defects',
      name: 'defects',
      component: () => import('../views/defects/DefectsView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'defects' }
    }
  ]
})

export default router
