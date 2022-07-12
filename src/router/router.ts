import * as VueRouter from 'vue-router'
import Home from '@/pages/home/index.vue'
import About from '@/pages/home/index.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(import.meta.env.VITE_APP_BASE),
  routes,
})

export default router
