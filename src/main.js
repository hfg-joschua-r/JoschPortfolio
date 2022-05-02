import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/tailwind.css'
import VueWriter from "vue-writer";
// importing AOS css style globally
import 'aos/dist/aos.css'
import AOS from 'aos'

createApp(App)
    .use(VueWriter)
    .use(AOS)
    .mount('#app')