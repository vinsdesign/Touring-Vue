import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import EventDetailView from '../views/EventDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventListView,
    props: (route) => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/event/:id',
    name: 'event-details',
    props: true,
    component: EventDetailView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
