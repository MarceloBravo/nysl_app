import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'
import AboutView from '../views/AboutView/AboutView.vue'
import GamesInformationView from '../views/GamesInformationView/GamesInformationView.vue'
import ContactView from '../views/ContactView/ContactView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/game-info', name: 'games-information', component: GamesInformationView },
  { path: '/contact', name: 'contact', component: ContactView }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
