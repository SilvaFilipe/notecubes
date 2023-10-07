import { createRouter, createWebHashHistory } from 'vue-router'
import ViewNotes from '@/views/view-notes.vue'
import ViewEditNote from '@/views/view-edit-note.vue'
import ViewStats from '@/views/view-stats.vue'

const routes = [
  {
    path: '/',
    name: 'notes',
    component: ViewNotes
  },
  {
    path: '/edit-note/:id',
    name: 'edit-note',
    component: ViewEditNote
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
