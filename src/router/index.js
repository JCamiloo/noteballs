import { createRouter, createWebHashHistory } from 'vue-router'
import NotesView from '@/views/NotesView.vue'
import StatsView from '@/views/StatsView.vue'

const routes = [
  {
    path: '/',
    name: 'notes',
    component: NotesView
  },
  {
    path: '/stats',
    name: 'stats',
    component: StatsView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router