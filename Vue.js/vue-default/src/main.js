import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import i18nPlugin from './plugins/i18n'
import store from './store.js'

const i18nStrings = {
    en: {
        hi: 'Hello!'
    },
    ko: {
        hi: '안녕하세요!'
    },
}

const app = createApp(App)
app.use(router)
app.use(VueSweetalert2)
app.use(store)
app.use(i18nPlugin, i18nStrings)
app.directive('focus', {
    mounted(el){
        el.focus();
    }
})
app.mount('#app')
