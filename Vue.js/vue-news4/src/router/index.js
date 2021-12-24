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
    name: 'News',
    component: () => import('../views/News.vue')
  },
  {
    path: '/ask',
    name: 'Ask',
    component: () => import('../views/Ask.vue')
  },
  {
    path: '/job',
    name: 'Jobs',
    component: () => import('../views/Jobs.vue')
  },
  {
    path: '/show',
    name: 'Show',
    component: () => import('../views/Show.vue')
  },
  {
    path: '/newest',
    name: 'Newest',
    component: () => import('../views/Newest.vue')
  },
  {
    path: '/user/:id',
    name: 'User',
    component: () => import('../views/User.vue')
  },
  {
    path: '/item/:id',
    name: 'Item',
    component: () => import('../views/Item.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
