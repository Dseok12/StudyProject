import { createWebHistory, createRouter } from "vue-router";
import Home from '../view/Home.vue'
import About from '../view/About.vue'
import Portfolio from '../view/Portfolio.vue'
import Contact from '../view/Contact.vue'

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/About.vue",
    component: About,
  },
  {
    path: "/Portfolio.vue",
    component: Portfolio,
  },
  {
    path: "/Contact.vue",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 