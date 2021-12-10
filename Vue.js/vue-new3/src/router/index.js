import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'NewsView',
    component: () => import('../views/NewsView.vue')
  },
  {
    path: '/jobs',
    name: 'JobsView',
    component: () => import('../views/JobsView.vue')
  },
  {
    path: '/ask',
    name: 'AskView',
    component: () => import('../views/AskView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
