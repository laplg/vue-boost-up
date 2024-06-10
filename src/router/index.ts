import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/inbox',
      name: 'Inbox',
      component: () => import('@/views/InboxView.vue')
    },
    {
      path: '/today',
      name: 'Today',
      component: () => import('@/views/TodayView.vue')
    },
    {
      path: '/projects',
      name: 'Projects',
      children: [
        {
          path: ':id',
          name: 'Project Detail',
          component: () => import('@/views/Project/ProjectDetailView.vue')
        }
      ]
    }
  ]
})

export default router
