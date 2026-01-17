import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

// Lazy load
const WeatherDetails = () => import('../views/WeatherDetails.vue')
const About = () => import('../views/About.vue')

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/weather/:city', name: 'WeatherDetails', component: WeatherDetails, props: true },
  { path: '/about', name: 'About', component: About },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router