import { createRouter, createWebHashHistory } from 'vue-router'
import ViewNotes from '@/views/view-notes.vue'
import ViewStats from '@/views/view-stats.vue'

const routes = [
  {
    path: '/',
    name: 'notes',
    component: ViewNotes
  },
  {
    path: '/stats',
    name: 'stats',
    component: ViewStats
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
