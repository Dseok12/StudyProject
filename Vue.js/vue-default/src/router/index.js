import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Contact from '../views/Contact.vue'
// import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: About
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/Contact.vue')
  },
  {
    path: '/basic',
    name: 'Basic',
    component: () => import(/* webpackChunkName: "basic", webpackPrefetch:true */ '../views/Basic.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: () => import(/* webpackChunkName: "DataBinding", webpackPrefetch:true */ '../views/DataBinding.vue')
  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: () => import(/* webpackChunkName: "DataBindingHtml", webpackPrefetch:true */ '../views/DataBindingHtml.vue')
  },
  {
    path: '/example',
    name: 'Example',
    component: () => import(/* webpackChunkName: "Example", webpackPrefetch:true */ '../views/Example.vue')
  },
  {
    path: '/example02',
    name: 'Example02',
    component: () => import(/* webpackChunkName: "Example02", webpackPrefetch:true */ '../views/Example02.vue')
  },
  {
    path: '/example03',
    name: 'Example03',
    component: () => import(/* webpackChunkName: "Example03", webpackPrefetch:true */ '../views/Example03.vue')
  },
  {
    path: '/class',
    name: 'Class',
    component: () => import(/* webpackChunkName: "Class", webpackPrefetch:true */ '../views/Class.vue')
  },
  {
    path: '/randering',
    name: 'Randering',
    component: () => import(/* webpackChunkName: "Randering", webpackPrefetch:true */ '../views/Randering.vue')
  },
  {
    path: '/randering02',
    name: 'Randering02',
    component: () => import(/* webpackChunkName: "Randering02", webpackPrefetch:true */ '../views/Randering02.vue')
  },
  {
    path: '/event',
    name: 'Event',
    component: () => import(/* webpackChunkName: "Event", webpackPrefetch:true */ '../views/Event.vue')
  },
  {
    path: '/computed',
    name: 'Computed',
    component: () => import(/* webpackChunkName: "Computed", webpackPrefetch:true */ '../views/Computed.vue')
  },
  {
    path: '/watch',
    name: 'Watch',
    component: () => import(/* webpackChunkName: "Watch", webpackPrefetch:true */ '../views/Watch.vue')
  },
  {
    path: '/exercise',
    name: 'exercise',
    component: () => import(/* webpackChunkName: "exercise", webpackPrefetch:true */ '../views/exercise.vue')
  },
  {
    path: '/save',
    name: 'save',
    component: () => import(/* webpackChunkName: "save", webpackPrefetch:true */ '../views/save.vue')
  },
  {
    path: '/serverdata',
    name: 'serverdata',
    component: () => import(/* webpackChunkName: "serverdata", webpackPrefetch:true */ '../views/serverdata.vue')
  },
  {
    path: '/othercomponent',
    name: 'othercomponent',
    component: () => import(/* webpackChunkName: "othercomponent", webpackPrefetch:true */ '../views/othercomponent.vue')
  },
  {
    path: '/othercomponent02',
    name: 'othercomponent02',
    component: () => import(/* webpackChunkName: "othercomponent02", webpackPrefetch:true */ '../views/othercomponent02.vue')
  },
  {
    path: '/othercomponent03',
    name: 'othercomponent03',
    component: () => import(/* webpackChunkName: "othercomponent03", webpackPrefetch:true */ '../views/othercomponent03.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
