import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/news'
  },
  {
    path: '/news',
    name: 'NewsView',
    component: () => import('../views/NewsView.vue')
  },
  {
    path: '/ask',
    name: 'AskView',
    component: () => import('../views/AskView.vue')
  },
  {
    path: '/jobs',
    name: 'JobsView',
    component: () => import('../views/JobsView.vue')
  },
  {
    path: '/user',
    name: 'UserView',
    component: () => import('../views/UserView.vue')
  },
  {
    path: '/item',
    name: 'ItemView',
    component: () => import('../views/ItemView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
