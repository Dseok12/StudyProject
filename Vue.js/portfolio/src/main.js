import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueSplide from '@splidejs/vue-splide';
import 'animate.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



createApp(App)
.use(router)
.use(store)
.use( VueSplide )
.mount('#app')

