import * as VueRouter from 'vue-router'
import Home from '@/pages/home/index.vue'
import About from '@/pages/home/index.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
